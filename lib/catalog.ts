export type Product={id:string;name:string;category:string;description:string;price:number;image:string;active:boolean};
export type Settings={pickup:string;deliveryFee:number;deliveryEnabled:boolean;orderingEnabled:boolean};
export const initialSettings:Settings={pickup:'',deliveryFee:0,deliveryEnabled:false,orderingEnabled:false};
export const categories=['Todos','Cervejas','Destilados','Vinhos','Sem álcool','Combos'];
export const sampleProducts:Product[]=[
 {id:'heineken',name:'Heineken Long Neck',category:'Cervejas',description:'330 ml • Pilsen • Puro malte',price:899,image:'/bottles/green.svg',active:true},
 {id:'corona',name:'Corona Extra',category:'Cervejas',description:'330 ml • Lager • Leve e refrescante',price:999,image:'/bottles/clear.svg',active:true},
 {id:'black',name:'Johnnie Walker Black Label',category:'Destilados',description:'1 L • Blended Scotch • 12 anos',price:18990,image:'/bottles/whisky.svg',active:true},
 {id:'gin',name:'Gin Tanqueray',category:'Destilados',description:'750 ml • London Dry Gin',price:11990,image:'/bottles/gin.svg',active:true},
 {id:'wine',name:'Vinho Cabernet Sauvignon',category:'Vinhos',description:'750 ml • Tinto seco',price:4990,image:'/bottles/wine.svg',active:true},
 {id:'energy',name:'Energético',category:'Sem álcool',description:'250 ml • Original • Para dar um gás',price:1090,image:'/bottles/can.svg',active:true},
];
export const money=(cents:number)=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(cents/100);
