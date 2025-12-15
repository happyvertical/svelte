<script lang="ts">
import { page } from '$app/stores';
import '../app.css';

interface Props {
  children: import('svelte').Snippet;
}

const { children }: Props = $props();

const components = {
  UI: [
    { name: 'Button', path: '/components/button' },
    { name: 'Card', path: '/components/card' },
    { name: 'Badge', path: '/components/badge' },
    { name: 'Pagination', path: '/components/pagination' },
  ],
  Content: [
    { name: 'ArticleCard', path: '/components/article-card' },
    { name: 'ArticleList', path: '/components/article-list' },
    { name: 'Markdown', path: '/components/markdown' },
  ],
  Layout: [
    { name: 'Container', path: '/components/container' },
    { name: 'Footer', path: '/components/footer' },
    { name: 'Grid', path: '/components/grid' },
    { name: 'Header', path: '/components/header' },
    { name: 'Masthead', path: '/components/masthead' },
  ],
  Council: [
    { name: 'ArticleReferences', path: '/components/article-references' },
    { name: 'CouncilSidebar', path: '/components/council-sidebar' },
  ],
  Weather: [
    { name: 'WeatherForecast', path: '/components/weather-forecast' },
    { name: 'WeatherHeader', path: '/components/weather-header' },
  ],
};

const currentPath = $derived($page.url.pathname);
</script>

<div class="docs-layout">
  <aside class="docs-sidebar">
    <h1>@happyvertical/svelte</h1>

    <nav>
      <ul>
        <li>
          <a href="/" class:active={currentPath === '/'}>
            Getting Started
          </a>
        </li>
      </ul>

      {#each Object.entries(components) as [category, items]}
        <h2>{category}</h2>
        <ul>
          {#each items as item}
            <li>
              <a href={item.path} class:active={currentPath === item.path}>
                {item.name}
              </a>
            </li>
          {/each}
        </ul>
      {/each}
    </nav>
  </aside>

  <main class="docs-main">
    {@render children()}
  </main>
</div>
