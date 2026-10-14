import {getDb} from '../db';
import {products,settings} from '../db/schema';
import {sampleProducts,initialSettings,type Settings} from './catalog';
export async function catalog(){const rows=await getDb().select().from(products);const map=new Map(sampleProducts.map(p=>[p.id,p]));rows.forEach(p=>map.set(p.id,p));return [...map.values()];}
export async function config():Promise<Settings>{const rows=await getDb().select().from(settings);const saved=rows.find(x=>x.id==='store');return saved?{...initialSettings,...JSON.parse(saved.value)}:initialSettings;}
export function safeMutation(req:Request){const origin=req.headers.get('origin');return !!origin&&origin===new URL(req.url).origin;}
export function fail(message:string,status=400){return Response.json({error:message},{status});}
