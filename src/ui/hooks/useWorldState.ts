import { useEffect, useState } from 'react'
import type { WorldState } from '../../types/world'
import { eventBus, WORLD_CHANGED } from '../../game/world/EventBus'
import { worldStore } from '../../game/world/WorldStore'
export function useWorldState(){const [state,setState]=useState<WorldState>(worldStore.snapshot());useEffect(()=>{const handler=(s:WorldState)=>setState(s);eventBus.on(WORLD_CHANGED,handler);setState(worldStore.snapshot());return()=>{eventBus.off(WORLD_CHANGED,handler)}},[]);return state}
