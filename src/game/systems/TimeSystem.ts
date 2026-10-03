import type Phaser from 'phaser'
import { worldStore } from '../world/WorldStore'
export class TimeSystem { private timer?:Phaser.Time.TimerEvent; start(scene:Phaser.Scene){worldStore.tickClock();this.timer=scene.time.addEvent({delay:1000,loop:true,callback:()=>worldStore.tickClock()})} destroy(){this.timer?.destroy()} }
