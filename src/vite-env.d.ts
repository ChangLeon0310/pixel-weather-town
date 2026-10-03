/// <reference types="vite/client" />
interface ImportMetaEnv { readonly VITE_OPENWEATHER_API_KEY?: string; readonly VITE_WEATHER_LAT?: string; readonly VITE_WEATHER_LON?: string }
interface ImportMeta { readonly env: ImportMetaEnv }
