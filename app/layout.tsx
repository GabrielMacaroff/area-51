import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Area 51 | Sua próxima rodada está aqui',description:'Bebidas, bons encontros e uma experiência de outro mundo. Conheça a Adega Area 51.',icons:{icon:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
