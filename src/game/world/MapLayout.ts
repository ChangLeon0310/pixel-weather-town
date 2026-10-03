import type { Point } from '../../types/world'
export const TILE=24, MAP_TILES=40, WORLD_SIZE=TILE*MAP_TILES
export const plaza={x:15*TILE,y:14*TILE,w:10*TILE,h:9*TILE}
export const houses:Point[]=[{x:5*TILE,y:5*TILE},{x:10*TILE,y:5*TILE},{x:25*TILE,y:5*TILE},{x:31*TILE,y:6*TILE},{x:5*TILE,y:27*TILE},{x:11*TILE,y:30*TILE},{x:24*TILE,y:29*TILE},{x:31*TILE,y:27*TILE},{x:4*TILE,y:17*TILE},{x:31*TILE,y:17*TILE}]
export const tavern={x:12*TILE,y:11*TILE}; export const shop={x:25*TILE,y:11*TILE}
export const tavernDoor={x:tavern.x+36,y:tavern.y+66}; export const shopDoor={x:shop.x+36,y:shop.y+66}
export const riverX=34*TILE
export const outsideSpots:Point[]=[{x:17*TILE,y:17*TILE},{x:21*TILE,y:18*TILE},{x:15*TILE,y:22*TILE},{x:25*TILE,y:19*TILE},{x:30*TILE,y:22*TILE},{x:32*TILE,y:14*TILE},{x:8*TILE,y:15*TILE},{x:10*TILE,y:23*TILE},{x:28*TILE,y:25*TILE},{x:32*TILE,y:32*TILE}]
