// Types

// Calendar Components
export { default as Calendar } from './components/calendar/Calendar.svelte';
export { default as DayView } from './components/calendar/DayView.svelte';
// Content Components
export { default as ArticleCard } from './components/content/ArticleCard.svelte';
export { default as ArticleList } from './components/content/ArticleList.svelte';
export { default as Markdown } from './components/content/Markdown.svelte';
// Council Components
export { default as ArticleReferences } from './components/council/ArticleReferences.svelte';
export { default as CouncilSidebar } from './components/council/CouncilSidebar.svelte';
// Layout Components
export { default as Container } from './components/layout/Container.svelte';
export { default as Footer } from './components/layout/Footer.svelte';
export { default as Grid } from './components/layout/Grid.svelte';
export { default as Header } from './components/layout/Header.svelte';
export { default as Masthead } from './components/layout/Masthead.svelte';
// Meetings Components
export { default as MeetingView } from './components/meetings/MeetingView.svelte';
// Town Components
export {
  default as TownHeader,
  default as WeatherHeader,
} from './components/town/TownHeader.svelte';
// UI Components
export { default as Badge } from './components/ui/Badge.svelte';
export { default as Button } from './components/ui/Button.svelte';
export { default as Card } from './components/ui/Card.svelte';
export { default as Pagination } from './components/ui/Pagination.svelte';
// Weather Components (WeatherHeader aliased to TownHeader for backwards compatibility)
export { default as WeatherForecast } from './components/weather/WeatherForecast.svelte';
export type {
  BadgeSize,
  BadgeVariant,
  ButtonSize,
  ButtonVariant,
  CardPadding,
  CardVariant,
  Council,
  DayEvent,
  DayEventDetail,
  DayEventsData,
  DayForecast,
  ForecastDay,
  ForecastPeriod,
  HourlyForecast,
  Meeting,
  Reference,
} from './types';
