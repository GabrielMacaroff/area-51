import {catalog,config,isAdmin} from '../../../lib/server';
export async function GET(){return Response.json({products:(await catalog()).filter(p=>p.active),settings:await config(),admin:await isAdmin()},{headers:{'Cache-Control':'no-store'}})}
