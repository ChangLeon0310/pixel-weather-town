import type { NPC, Point } from '../../types/world'
const names=['阿強','小花','阿德','小玲','阿明','小美','阿宏','小芸','阿福','小芳','阿哲','小晴','阿凱','小雨','阿俊','小萱','阿良','小梅','阿豪','小安']
const colors=[0xdd6b5d,0x5b8bd0,0xe1a64b,0x8d6ccf,0x50a67b,0xd76b9a,0x60a9a6,0xbf7657]
export function createNPCs(homes:Point[]):NPC[]{return names.map((name,i)=>({id:`npc-${i+1}`,name,homeId:`house-${i%homes.length}`,mood:55+Math.floor(Math.random()*35),x:homes[i%homes.length].x,y:homes[i%homes.length].y+16,state:'SLEEP',destination:'home',color:colors[i%colors.length]}))}
