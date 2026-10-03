export type WeatherKind = 'Clear' | 'Clouds' | 'Rain' | 'Thunderstorm'
export type DayPeriod = 'DAY' | 'SUNSET' | 'NIGHT'
export type NPCState = 'IDLE' | 'WALK' | 'RETURN_HOME' | 'SLEEP'
export interface Point { x: number; y: number }
export interface NPC { id:string; name:string; homeId:string; mood:number; x:number; y:number; state:NPCState; target?:Point; destination?:'outside'|'home'|'tavern'; color:number }
export interface WorldState { currentTime:string; dateKey:string; period:DayPeriod; weather:WeatherKind; temperature:number; humidity:number; villagers:NPC[]; outdoorCount:number; tavernCount:number; weatherSource:'openweather'|'demo' }
export interface WeatherSnapshot { weather:WeatherKind; temperature:number; humidity:number; source:'openweather'|'demo' }
