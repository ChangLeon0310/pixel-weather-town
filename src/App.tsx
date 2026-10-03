import { useEffect, useRef } from 'react'
import type Phaser from 'phaser'
import { createGame } from './game/PhaserGame'
import { HUD } from './ui/components/HUD'
import { NewsPanel } from './ui/components/NewsPanel'
import { useWorldState } from './ui/hooks/useWorldState'
export default function App(){const host=useRef<HTMLDivElement>(null);const state=useWorldState();useEffect(()=>{if(!host.current)return;const game:Phaser.Game=createGame(host.current);return()=>game.destroy(true)},[]);return <main><div ref={host} className="game"/><div className="title"><b>PIXEL WEATHER TOWN</b><span>一座正在自己生活的小鎮</span></div><HUD state={state}/><NewsPanel state={state}/><div className="scanlines"/></main>}
