import type { WorldState } from '../../types/world'
import { createNews } from '../../game/systems/NewsSystem'
export function NewsPanel({state}:{state:WorldState}){return <aside className="news panel"><header><span>PIXEL TOWN TIMES</span><small>{state.dateKey}</small></header>{createNews(state).map((x,i)=><p key={i}>{x}</p>)}</aside>}
