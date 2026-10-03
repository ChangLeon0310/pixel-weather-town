import type Phaser from 'phaser'
import { fetchOpenWeather } from '../weather/OpenWeatherService'
import { worldStore } from '../world/WorldStore'
export class WeatherSystem {
 private timer?:Phaser.Time.TimerEvent
 async refresh(){try{const w=await fetchOpenWeather();worldStore.patch({weather:w.weather,temperature:w.temperature,humidity:w.humidity,weatherSource:w.source})}catch(e){console.info('Using demo weather:',e);worldStore.patch({weather:worldStore.getState().weather,weatherSource:'demo'},false)}}
 start(scene:Phaser.Scene){void this.refresh();this.timer=scene.time.addEvent({delay:10*60*1000,loop:true,callback:()=>void this.refresh()})}
 destroy(){this.timer?.destroy()}
}
