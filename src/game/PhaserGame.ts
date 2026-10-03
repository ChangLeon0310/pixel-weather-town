import Phaser from 'phaser'
import { MainScene } from './scenes/MainScene'
export function createGame(parent:HTMLElement){return new Phaser.Game({type:Phaser.AUTO,parent,width:960,height:720,backgroundColor:'#18253a',pixelArt:true,roundPixels:true,physics:{default:'arcade',arcade:{debug:false}},scale:{mode:Phaser.Scale.RESIZE,autoCenter:Phaser.Scale.CENTER_BOTH},scene:[MainScene],render:{antialias:false,pixelArt:true}})}
