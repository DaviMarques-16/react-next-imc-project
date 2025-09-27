//import Image from "next/image";
//import { Geist, Geist_Mono } from "next/font/google";

//contexto global (escopo)
const nome = 'Davi'
let canal ='Dazuzin'

function retnome(){
  return nome
}

//contexto local à função (escopo)
export default function Home() {
  //Cada componente importa somente uma tag (ex: a div)
  return (
    <div>
        <div>Evermore</div>
        <div>Midnights</div>
        <div>THE TORTURED POETS DEPARTMENT</div>
        <div>The Life Of a Showgirl</div>
        <div>{nome}, {canal}, {retnome()}</div>
    </div>
  );
}
