import type { WorldState, WeatherKind } from '../../types/world'
const icons:Record<WeatherKind,string>={Clear:'☀',Clouds:'☁',Rain:'☂',Thunderstorm:'ϟ'}
export function HUD({state}:{state:WorldState}){return <aside className="hud panel"><div className="clock">{state.currentTime}</div><div className="weather"><span>{icons[state.weather]}</span>{state.weather}</div><div>{state.temperature}°C · 濕度 {state.humidity}%</div><div>Villagers: {state.villagers.length||20}</div><small>{state.weatherSource==='openweather'?'即時天氣':'展示天氣'}</small></aside>}
