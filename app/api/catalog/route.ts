import {catalog,config} from '../../../lib/server';
export async function GET(){return Response.json({products:(await catalog()).filter(p=>p.active),settings:await config()},{headers:{'Cache-Control':'no-store'}})}
