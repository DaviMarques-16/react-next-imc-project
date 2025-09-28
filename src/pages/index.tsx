//import Image from "next/image";
//import { Geist, Geist_Mono } from "next/font/google";

//contexto global (escopo)
const nome = 'Davi'
let canal ='Dazuzin'

function retnome(){ //função padrão
  return nome
}

const arrowfunction = ()=> {
  return canal
}

const show = (artista: string, local: string)=> {
  return `O Show será Taycabana: ${artista} em ${local}`
}

function Topo(){
  return(
    <div className="flex justify-evenly items-center bg-zinc-300 
    h-[100px]">
      <div>i can do it</div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl">{canal}</div>
        <div className="subtituloTopo">Hi, i have a question</div>
        <div>{nome}</div>
      </div>
      <div>Cruel Summer</div>
    </div>
  )
}


//contexto local à função (escopo)
export default function Home() {
  //Cada componente importa somente uma tag (ex: a div)
  return (
    <div>
        <Topo/> {/* componente */}
        <div>Evermore</div>
        <div>Midnights</div>
        <div>THE TORTURED POETS DEPARTMENT</div>
        <div>The Life Of a Showgirl</div>
        <div>{show("Taylor Swift", "Copacabana")}</div>
    </div>
  );
}
