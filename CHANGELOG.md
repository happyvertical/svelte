# @happyvertical/smrt-svelte

## 0.18.28

### Patch Changes

- ### Other Changes

  - chore: update @happyvertical/smrt-agents to >=0.19.26 (#47) (deps)

## 0.18.27

### Patch Changes

- ### Other Changes

  - chore: update @happyvertical/smrt-agents to >=0.19.23 (#46) (deps)

## 0.18.26

### Patch Changes

- ### Other Changes

  - chore: update @happyvertical/smrt-agents to >=0.19.20 (#45) (deps)

## 0.18.25

### Patch Changes

- ### Other Changes

  - chore: update @happyvertical/smrt-agents to >=0.19.17 (#44) (deps)

## 0.18.24

### Patch Changes

- ### Other Changes

  - chore: update @happyvertical/smrt-agents to >=0.19.16 (#43) (deps)

## 0.18.23

### Patch Changes

- ### Other Changes

  - chore: update @happyvertical/smrt-agents to >=0.19.11 (#42) (deps)

## 0.18.22

### Patch Changes

- ### Other Changes

  - chore: update @happyvertical/smrt-agents to >=0.19.10 (#41) (deps)

## 0.18.21

### Patch Changes

- ### Other Changes

  - chore: update @happyvertical/smrt-agents to >=0.19.8 (#40) (deps)

## 0.18.20

### Patch Changes

- ### Other Changes

  - chore: update @happyvertical/smrt-agents to >=0.19.4 (#39) (deps)

## 0.18.19

### Patch Changes

- ### Other Changes

  - chore: update @happyvertical/smrt-agents to >=0.19.3 (#38) (deps)

## 0.18.18

### Patch Changes

- ### Other Changes

  - chore: update vitest to ^4.0.17 (#37) (deps)

## 0.18.17

### Patch Changes

- ### Other Changes

  - chore: update @happyvertical/smrt-agents to >=0.19.2 (#36) (deps)

## 0.18.16

### Patch Changes

- ### Other Changes

  - chore: update @happyvertical/smrt-agents to >=0.19.0 (#35) (deps)

## 0.18.15

### Patch Changes

- ### Features

  - add AgentSettingsShell and admin panel components (#34) (admin)

## 0.18.14

### Patch Changes

- ### Other Changes

  - chore: update vite to ^7.3.1 (#33) (deps)

## 0.18.13

### Patch Changes

- ### Bug Fixes

  - remove mock data fallback, hide widget when no forecast (#32) (weather)

## 0.18.12

### Patch Changes

- ### Other Changes

  - chore: update @biomejs/biome to ^2.3.11 (#31) (deps)

## 0.18.11

### Patch Changes

- ### Features

  - add analytics callback props to TownHeader, Calendar, DayView (#28) (components)

  ### Other Changes

  - chore: update vitest to v4 (#23) (deps)

## 0.18.10

### Patch Changes

- ### Features

  - scroll-sync day navigation and smooth transitions (#27) (town)

## 0.18.9

### Patch Changes

- ### Bug Fixes

  - treat 0°C as valid temperature in chart (#26) (weather)

## 0.18.8

### Patch Changes

- ### Features

  - add Calendar, DayView, MeetingView with dark mode support (components)
  - add TownHeader component with weather forecast, events, and navigation animation (town)

  ### Bug Fixes

  - correct usage for selectedDayEvents (town)
  - use let for weatherViewTab state to allow reassignment (town)
  - make mobile view edge-to-edge (weather)
  - improve tab shadow and panel spacing (weather)

## 0.18.7

### Patch Changes

- ### Other Changes

  - chore: update @biomejs/biome to ^2.3.10 (#24) (deps)

## 0.18.6

### Patch Changes

- ### Other Changes

  - chore: update vite to ^7.3.0 (#22) (deps)

## 0.18.5

### Patch Changes

- ### Other Changes

  - chore: update TypeScript (#21) (deps)

## 0.18.4

### Patch Changes

- ### Other Changes

  - chore: update @changesets/cli to ^2.29.8 (#20) (deps)

## 0.18.3

### Patch Changes

- ### Other Changes

  - chore: update @biomejs/biome to ^2.3.9 (#19) (deps)

## 0.18.2

### Patch Changes

- ### Features

  - add mdsvex documentation site with component browser

  ### Bug Fixes

  - add @sveltejs/kit to tsconfig types for $app/stores resolution
  - restore SvelteKit tsconfig extends (CI runs sync first)
  - remove SvelteKit tsconfig extends for CI compatibility

  ### Other Changes

  - ci: add svelte-kit sync step for SvelteKit type generation
  - chore: add .svelte-kit and build to gitignore

## 0.18.1

### Patch Changes

- ### Features

  - add carousel/swipe behavior to day tabs (weather)
  - add CI/CD workflows and changeset configuration
  - initial extraction from smrt monorepo

  ### Bug Fixes

  - resolve svelte-check errors for pnpm 10 compatibility
  - extract types to separate file for pnpm 10 compatibility
  - remove pnpm version to use packageManager field (ci)

  ### Other Changes

  - chore: update pnpm to v10 (deps)
  - chore: update lefthook to v2 (deps)
  - chore: update actions/setup-node action to v6 (deps)
  - chore: update actions/checkout action to v6 (deps)
  - chore: update all dependencies (deps)
  - chore: update @sveltejs/vite-plugin-svelte to v6 (deps)
  - chore: use sdk preset for renovate config (deps)
  - chore: align CI/CD workflows with SMRT pattern (ci)
  - chore: @happyvertical/svelte@0.18.0 (release)
  - chore: add changeset for weather carousel feature
  - chore: add renovate.json (deps)
  - chore: add dev tooling for CI/CD parity with SMRT

## 0.18.0

### Minor Changes

- 8c07465: Add carousel/swipe behavior to daily forecast tabs in WeatherHeader component. The day tabs now support drag-to-scroll and keyboard navigation (arrow keys), matching the existing hourly forecast carousel. This enables smooth horizontal scrolling for 10-day forecasts on mobile devices.

## 0.17.37

## 0.17.36

## 0.17.35

## 0.17.34

## 0.17.33

## 0.17.32

### Patch Changes

- e7bb763: Redesign WeatherHeader with tab navigation for improved UX and better display of multi-day forecasts.

## 0.17.31

## 0.17.30

## 0.17.29

## 0.17.28

## 0.17.27

## 0.17.26

## 0.17.25

## 0.17.24

## 0.17.23

## 0.17.22

## 0.17.21

## 0.17.20

## 0.17.19

## 0.17.18

## 0.17.17

## 0.17.16

## 0.17.15

## 0.17.14

## 0.17.13

## 0.17.12

## 0.17.11

## 0.17.10

## 0.17.9

## 0.17.8

## 0.17.7

## 0.17.6

## 0.17.5

## 0.17.4

## 0.17.3

## 0.17.2

## 0.17.1

## 0.17.0

## 0.16.5

### Patch Changes

- caf593b: feat(build): auto-generate test-manifest-stub.ts from dist/manifest.json

  Ensures test manifest stubs stay in sync with generated manifests.
  Fixes #373 - Event.seriesId now correctly marked as optional.

## 0.16.4

## 0.16.3

### Patch Changes

- 721e5b9: - fix(ci): auto-generate changesets in PR workflow
  - fix(core): implement build-time field inheritance for STI classes

## 0.16.2

## 0.16.1

## 0.16.0

## 0.15.5

## 0.15.4

## 0.15.3

## 0.15.2

## 0.15.1

## 0.15.0

## 0.14.7

## 0.14.6

## 0.14.5

## 0.14.4

## 0.14.3

## 0.14.2

### Patch Changes

- dedf98e: - fix(ci): add 30-second delay before enabling auto-merge on version PR

## 0.14.1

## 0.14.0

### Minor Changes

- c45b560: - feat(all): implement multi-level class inheritance support (#247)

## 0.13.7

### Patch Changes

- febac3c: - chore(core): update SDK dependency and remove DuckDB workaround
  - fix(core): implement lazy database table initialization to prevent prerendering crashes
  - fix(ci): resolve issue triage authentication error

## 0.13.6

### Patch Changes

- 5160664: - fix(ci): resolve issue triage authentication error

## 0.13.5

## 0.13.4

### Patch Changes

- 3f46832: - chore(all): update @happyvertical dependencies
- 505a835: Make pretest scripts resilient to CLI not being built yet

  The pretest script now checks if `../cli/dist/index.js` exists before trying to run it, allowing tests to pass in scenarios where packages aren't built yet (like the cascade handler workflow). This uses the pattern `[ -f file ] && command || true` which silently succeeds if the CLI isn't available, while still running manifest generation when it is.

## 0.13.3

### Patch Changes

- 9adec16: Add --passWithNoTests flag to test scripts for packages without test files

  Packages that don't yet have test files now use `vitest run --passWithNoTests` instead of `vitest run`, allowing CI to pass while we incrementally add tests. This fixes the test suite failures caused by vitest exiting with code 1 when no tests are found.

## 0.13.2

### Patch Changes

- e7fc0d0: - chore(all): update @happyvertical dependencies

## 0.13.1

## 0.13.0

### Minor Changes

- 8b35bce: - feat(all): save aggregated manifest for CLI discovery (#215)

## 0.12.0

### Minor Changes

- 6d80cc4: - test(all): remove flaky default export test (#215)
  - feat(all): integrate dynamic class loader into CLI (#215)
  - feat(all): add dynamic class loader for external packages (#215)
  - feat(all): update consumer plugin to preserve package metadata (#215)
  - feat(all): enhance manifest schema with package metadata (#215)

## 0.11.1

### Patch Changes

- 538c597: - fix(all): use GH_TOKEN for package access in cascade workflow

## 0.11.0

### Minor Changes

- 4bf5d82: - feat(all): add automated dependency cascade workflow

## 0.10.4

## 0.10.3

## 0.10.2

### Patch Changes

- b3be399: - fix(all): exclude protected and private properties from database schema

## 0.10.1

## 0.10.0

### Minor Changes

- c6d8f52: - feat(ci): add auto-update workflow to prevent PR conflicts

## 0.9.0

### Minor Changes

- 85c671b: - feat(ci): add auto-update workflow to prevent PR conflicts

## 0.8.1

## 0.8.0

## 0.7.0

### Minor Changes

- 51c388a: - feat(generators): expose custom methods by default without explicit include
  - fix(cli): load manifest at runtime to populate ObjectRegistry

## 0.5.4

### Patch Changes

- f0d34b0: - docs(all): add comprehensive custom method discovery documentation
- 7c1de77: - feat(core): add getMethods() API to ObjectRegistry for custom method discovery

  - feat(cli): automatically discover and generate CLI commands for custom methods defined on SMRT objects

  Custom methods defined on SMRT objects are now automatically discovered at build time and exposed through the CLI generator. This eliminates the need for manual CLI command configuration for custom methods.

  Example:

  ```typescript
  @smrt({ cli: { include: ["list", "get", "research"] } })
  class Agent extends SmrtObject {
    async research(options: { query: string; depth?: number }) {
      // Custom method automatically gets CLI command:
      // smrt agent:research <id> --query "topic" --depth 5
    }
  }
  ```

## 0.5.3

### Patch Changes

- f9019e6: - fix(scanner): use project tsconfig.json for proper module resolution

## 0.5.2

### Patch Changes

- 694e1da: - fix(manifest): capture package name during registration for external packages

## 0.5.1

### Patch Changes

- 905bdf4: - fix(scanner): use project tsconfig.json for proper module resolution

## 0.5.0

### Minor Changes

- 007567e: - feat(all): add local SDK development setup scripts

## 0.4.2

### Patch Changes

- dfce003: Enable GitHub Package Registry publishing for all SMRT packages

  - Add @happyvertical scope to .npmrc for GitHub Package Registry
  - Configure authentication with GITHUB_TOKEN
  - All packages now publish to https://npm.pkg.github.com/@happyvertical/*
