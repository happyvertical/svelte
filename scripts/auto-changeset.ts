#!/usr/bin/env node
/**
 * Auto-generate Changesets from conventional commits
 *
 * Analyzes commits since last release and creates changeset files.
 * Every merge to main triggers a release.
 *
 * Version bump rules for 0.x.x releases:
 * - Breaking changes (feat!, BREAKING CHANGE) → minor bump (0.x.0)
 * - All other commits → patch bump (0.0.x)
 */

import { execSync } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { existsSync, readdirSync, writeFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

interface ParsedCommit {
  type: string;
  scope?: string;
  breaking: boolean;
  message: string;
  body?: string;
  hash: string;
}

function exec(command: string): string {
  try {
    return execSync(command, { encoding: 'utf-8' }).trim();
  } catch (_error) {
    return '';
  }
}

function getPackageName(): string {
  const pkgPath = join(process.cwd(), 'package.json');
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
  return pkg.name;
}

function getCommitsSinceLastRelease(): string[] {
  const lastTag = exec('git describe --tags --abbrev=0 2>/dev/null');

  let range: string;
  if (lastTag) {
    range = `${lastTag}..HEAD`;
  } else {
    range = 'HEAD';
  }

  const commits = exec(
    `git log ${range} --pretty=format:"%H|||%s|||%b" --no-merges`,
  );

  if (!commits) return [];

  return commits.split('\n').filter(Boolean);
}

function parseConventionalCommit(commitLine: string): ParsedCommit | null {
  const [hash, subject, body] = commitLine.split('|||');

  if (!subject) {
    console.log(
      `Skipping commit with empty subject: ${hash?.substring(0, 7) || 'unknown'}`,
    );
    return null;
  }

  const match = subject.match(/^(\w+)(?:\(([^)]+)\))?(!)?:\s*(.+)$/);

  if (!match) {
    console.log(`Skipping non-conventional commit: ${subject}`);
    return null;
  }

  const [, type, scope, breaking, message] = match;
  const hasBreakingInBody = body?.includes('BREAKING CHANGE') || false;

  return {
    type,
    scope,
    breaking: !!breaking || hasBreakingInBody,
    message: message.trim(),
    body,
    hash: hash.substring(0, 7),
  };
}

function determineVersionBump(
  commits: ParsedCommit[],
): 'major' | 'minor' | 'patch' {
  const hasBreaking = commits.some((c) => c.breaking);
  return hasBreaking ? 'minor' : 'patch';
}

function generateChangesetContent(
  packageName: string,
  commits: ParsedCommit[],
  bump: 'major' | 'minor' | 'patch',
): string {
  const breaking = commits.filter((c) => c.breaking);
  const features = commits.filter((c) => c.type === 'feat' && !c.breaking);
  const fixes = commits.filter((c) => c.type === 'fix' && !c.breaking);
  const other = commits.filter(
    (c) => !c.breaking && c.type !== 'feat' && c.type !== 'fix',
  );

  let content = `---\n`;
  content += `"${packageName}": ${bump}\n`;
  content += `---\n\n`;

  if (breaking.length > 0) {
    content += `### Breaking Changes\n\n`;
    breaking.forEach((c) => {
      content += `- ${c.message}${c.scope ? ` (${c.scope})` : ''}\n`;
    });
    content += `\n`;
  }

  if (features.length > 0) {
    content += `### Features\n\n`;
    features.forEach((c) => {
      content += `- ${c.message}${c.scope ? ` (${c.scope})` : ''}\n`;
    });
    content += `\n`;
  }

  if (fixes.length > 0) {
    content += `### Bug Fixes\n\n`;
    fixes.forEach((c) => {
      content += `- ${c.message}${c.scope ? ` (${c.scope})` : ''}\n`;
    });
    content += `\n`;
  }

  if (other.length > 0) {
    content += `### Other Changes\n\n`;
    other.forEach((c) => {
      content += `- ${c.type}: ${c.message}${c.scope ? ` (${c.scope})` : ''}\n`;
    });
  }

  return `${content.trim()}\n`;
}

function hasExistingChangesets(): boolean {
  const changesetDir = join(process.cwd(), '.changeset');
  if (!existsSync(changesetDir)) return false;

  const files = readdirSync(changesetDir);
  return files.some(
    (f) => f.endsWith('.md') && f !== 'README.md' && f !== 'config.json',
  );
}

function main() {
  console.log('🔍 Checking for conventional commits...');

  if (hasExistingChangesets()) {
    console.log('✅ Existing changesets found, skipping auto-generation');
    return;
  }

  const commitLines = getCommitsSinceLastRelease();

  if (commitLines.length === 0) {
    console.log('ℹ️  No commits found since last release');
    return;
  }

  console.log(`📝 Analyzing ${commitLines.length} commits...`);

  const parsedCommits = commitLines
    .map(parseConventionalCommit)
    .filter((c): c is ParsedCommit => c !== null);

  if (parsedCommits.length === 0) {
    console.log('ℹ️  No conventional commits found');
    return;
  }

  const packageName = getPackageName();
  const bump = determineVersionBump(parsedCommits);

  console.log(`📦 Version bump: ${bump}`);
  console.log(`   - ${parsedCommits.length} conventional commits`);
  console.log(
    `   - ${parsedCommits.filter((c) => c.breaking).length} breaking changes`,
  );

  const changesetId = randomBytes(8).toString('hex');
  const changesetPath = join(
    process.cwd(),
    '.changeset',
    `auto-${changesetId}.md`,
  );
  const changesetContent = generateChangesetContent(packageName, parsedCommits, bump);

  writeFileSync(changesetPath, changesetContent);

  console.log(`✅ Generated changeset: .changeset/auto-${changesetId}.md`);
  console.log('');
  console.log('Changeset content:');
  console.log('---');
  console.log(changesetContent);
  console.log('---');
}

main();
