import { resolve } from 'node:path';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  if (mode === 'test') {
    // Test app configuration (legacy, for quick component testing)
    return {
      root: 'test-app',
      plugins: [
        svelte({
          compilerOptions: {
            runes: true,
          },
        }),
      ],
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src'),
        },
      },
    };
  }

  if (mode === 'lib') {
    // Library build configuration
    return {
      plugins: [
        svelte({
          compilerOptions: {
            runes: true,
          },
        }),
      ],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/lib/index.ts'),
          name: 'SmrtSvelte',
          fileName: 'index',
        },
        rollupOptions: {
          external: [
            'svelte',
            'svelte/internal',
            'svelte/store',
            'svelte/transition',
            'svelte/animate',
          ],
          output: {
            globals: {
              svelte: 'svelte',
            },
          },
        },
      },
    };
  }

  // Default: SvelteKit documentation site
  return {
    plugins: [sveltekit()],
  };
});
