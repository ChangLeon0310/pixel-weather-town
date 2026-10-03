import Phaser from 'phaser'
import { NPCSystem } from '../systems/NPCSystem'
import { RenderSystem } from '../systems/RenderSystem'
import { TimeSystem } from '../systems/TimeSystem'
import { WeatherSystem } from '../systems/WeatherSystem'
import { worldStore } from '../world/WorldStore'
import { WORLD_SIZE } from '../world/MapLayout'
export class MainScene extends Phaser.Scene {
 private npc!:NPCSystem;private worldRenderer!:RenderSystem;private timeSystem=new TimeSystem();private weatherSystem=new WeatherSystem();private nextLightning=0
 constructor(){super('MainScene')}
 create(){worldStore.load();this.worldRenderer=new RenderSystem(this);this.worldRenderer.create();this.npc=new NPCSystem(this);this.npc.create();this.timeSystem.start(this);this.weatherSystem.start(this);this.cameras.main.setZoom(Math.max(.68,Math.min(1.15,Math.min(this.scale.width/WORLD_SIZE,this.scale.height/WORLD_SIZE))));this.cameras.main.centerOn(WORLD_SIZE/2,WORLD_SIZE/2);this.scale.on('resize',()=>{this.cameras.main.setZoom(Math.max(.68,Math.min(1.15,Math.min(this.scale.width/WORLD_SIZE,this.scale.height/WORLD_SIZE))));this.cameras.main.centerOn(WORLD_SIZE/2,WORLD_SIZE/2)})}
 update(time:number,delta:number){const s=worldStore.getState();this.worldRenderer.update(s.period,s.weather);this.npc.update(time,delta);if(s.weather==='Thunderstorm'&&time>this.nextLightning){this.nextLightning=time+2500+Math.random()*5000;this.worldRenderer.lightning()}}
 shutdown(){this.timeSystem.destroy();this.weatherSystem.destroy()}
}
