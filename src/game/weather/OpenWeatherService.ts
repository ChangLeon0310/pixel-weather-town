import type { WeatherKind, WeatherSnapshot } from '../../types/world'
const normalize=(value:string):WeatherKind=>value==='Thunderstorm'?'Thunderstorm':value==='Rain'||value==='Drizzle'?'Rain':value==='Clouds'?'Clouds':'Clear'
export async function fetchOpenWeather(signal?:AbortSignal):Promise<WeatherSnapshot>{
  const key=import.meta.env.VITE_OPENWEATHER_API_KEY
  if(!key) throw new Error('Missing VITE_OPENWEATHER_API_KEY')
  const lat=import.meta.env.VITE_WEATHER_LAT||'25.0330', lon=import.meta.env.VITE_WEATHER_LON||'121.5654'
  const url=`https://api.openweathermap.org/data/2.5/weather?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}&units=metric&appid=${encodeURIComponent(key)}`
  const res=await fetch(url,{signal});if(!res.ok)throw new Error(`OpenWeather ${res.status}`)
  const data=await res.json();return {weather:normalize(data.weather?.[0]?.main),temperature:Math.round(data.main?.temp??24),humidity:Math.round(data.main?.humidity??60),source:'openweather'}
}
