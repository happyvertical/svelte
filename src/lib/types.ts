// Badge types
export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';
export type BadgeSize = 'sm' | 'md';

// Button types
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

// Card types
export type CardVariant = 'default' | 'outlined' | 'elevated';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

// ArticleReferences types
export interface Reference {
  title: string;
  url: string;
  type?: 'agenda' | 'minutes' | 'video' | 'document' | 'external';
  description?: string;
}

// WeatherForecast types
export interface ForecastPeriod {
  name: string;
  conditions: string;
  temperature: number;
  windSpeed: number;
  windDirection: number;
  humidity: number;
  precipProbability: number;
}

export interface ForecastDay {
  day: string;
  icon: string;
  high: number;
  low: number;
  periods: ForecastPeriod[];
}

// WeatherHeader types
export interface HourlyForecast {
  time: string;
  hour: number;
  icon: string;
  temperature: number;
  feelsLike: number;
}

export interface DayForecast {
  id: string;
  dayName: string;
  date: string;
  icon: string;
  high: number;
  low: number;
  hourlyData: HourlyForecast[];
}
