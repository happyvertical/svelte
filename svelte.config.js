import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';

// Create shiki highlighter
const highlighter = await createHighlighter({
  themes: ['github-dark', 'github-light'],
  langs: ['svelte', 'typescript', 'javascript', 'html', 'css', 'bash', 'json'],
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.svx'],
      highlight: {
        highlighter: (code, lang) => {
          const html = highlighter.codeToHtml(code, {
            lang: lang || 'text',
            theme: 'github-dark',
          });
          return `{@html \`${html.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`}`;
        },
      },
    }),
  ],
  compilerOptions: {
    runes: true,
  },
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
    alias: {
      $lib: 'src/lib',
    },
  },
};

export default config;
