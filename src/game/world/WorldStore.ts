import type { NPC, WorldState } from '../../types/world'
import { eventBus, WORLD_CHANGED } from './EventBus'
const KEY='pixel-weather-town-world-v1'
const now=()=>new Date()
const time=()=>now().toLocaleTimeString('zh-TW',{hour:'2-digit',minute:'2-digit',hour12:false})
const dateKey=()=>`${now().getFullYear()}-${now().getMonth()+1}-${now().getDate()}`
const period=():WorldState['period']=>{const h=now().getHours();return h>=6&&h<17?'DAY':h>=17&&h<20?'SUNSET':'NIGHT'}
export class WorldStore {
  private state:WorldState={currentTime:time(),dateKey:dateKey(),period:period(),weather:'Clear',temperature:24,humidity:60,villagers:[],outdoorCount:0,tavernCount:0,weatherSource:'demo'}
  getState=()=>this.state
  patch=(patch:Partial<WorldState>, persist=true)=>{this.state={...this.state,...patch}; if(persist)this.save(); eventBus.emit(WORLD_CHANGED,this.snapshot())}
  setVillagers=(villagers:NPC[])=>{this.state.villagers=villagers;this.recount()}
  tickClock=()=>this.patch({currentTime:time(),dateKey:dateKey(),period:period()},false)
  recount=()=>{const v=this.state.villagers;this.state.outdoorCount=v.filter(n=>n.destination==='outside').length;this.state.tavernCount=v.filter(n=>n.destination==='tavern').length;eventBus.emit(WORLD_CHANGED,this.snapshot())}
  snapshot=():WorldState=>({...this.state,villagers:this.state.villagers.map(n=>({...n}))})
  save=()=>{try{localStorage.setItem(KEY,JSON.stringify({...this.state,villagers:[]}))}catch{}}
  load=()=>{try{const raw=localStorage.getItem(KEY);if(raw){const p=JSON.parse(raw);this.state={...this.state,...p,villagers:[]}}}catch{}}
}
export const worldStore=new WorldStore()
