"use client"
const a = "@/Assets/cross.png" 
import img from "@/Assets/cross.png"
import Image from "next/image";
import RangeDado from "@/Components/RangeDado";
import styles from "./page.module.css";
import { useState } from "react";
export default function Home() {

  const sucessText = {player_01:"PLAYER 2 GANHOU", player_02:"PLAYER 1 GANHOU"}
  const [isRound, setIsRound]= useState<{player_01:boolean, player_02:boolean}>({player_01: false, player_02: false})
  const [valueRound, setValueRound] = useState<{player_01:number, player_02:number}>({player_01: 1, player_02:1});
  const [pointRound, setPointRound] = useState<{player_01:number, player_02:number}>({player_01: 0, player_02:0});
  function LancarDado(){
    if(isRound.player_01 && isRound.player_02){
      if (valueRound.player_01 > valueRound.player_02){
         setPointRound({player_01: pointRound.player_01+1, player_02: pointRound.player_02})
        setIsRound({player_01: false, player_02: false})
         if (pointRound.player_01 == 4) {
          alert("FIM DE JOGO O PLAYER 1 VENCEU")
          const confim = confirm("Recomeçar o jogo?")
          if (confim) {
            location.reload()
          }
        }

        }else if(valueRound.player_01 < valueRound.player_02){
         setPointRound({player_01: pointRound.player_01, player_02: pointRound.player_02+1})
        setIsRound({player_01: false, player_02: false})
         if (pointRound.player_02 == 4) {
          alert("FIM DE JOGO O PLAYER 2 VENCEU")
          const confim = confirm("Recomeçar o jogo?")
          if (confim) {
            location.reload()
          }
        }
    
      }else{
        setIsRound({player_01: false, player_02: false})
      
      }
    }

  }

  return (
    <div className="__contender">
      <div className="count">
        <h2>{pointRound.player_01} x {pointRound.player_02}</h2>
      </div>
    <main className="contender">
      <div className="ContenderPlayerOne">
      <h1 className="textDado">
        Jogador 1:
      </h1>
      <div className="imgContender">
      <RangeDado range={valueRound.player_01.toString()}></RangeDado>
      </div>
      <button id="ButtonPlayer"type="button"
      onClick={
        async ()=>{
          await setValueRound({player_01: Math.floor(Math.random()*6+1), player_02: valueRound.player_02})
          await setIsRound({player_01: true, player_02: isRound.player_02})
          LancarDado()
          
        }
      }
      >Lançar dado</button>

      </div>

      <div className="ContenderPlayerOne">

      <h1 className="textDado">
        Jogador 2:
      </h1>
      <div className="imgContender">
      <RangeDado range={valueRound.player_02.toString()}></RangeDado>
      </div>
      <button id="ButtonPlayer"type="button"
      onClick={
    
          async ()=>{
          setIsRound({player_02: true, player_01: isRound.player_01})
          await setValueRound({player_01: valueRound.player_01, player_02: Math.floor(Math.random()*6+1)})
          LancarDado()

        }

        
      }
      >Lançar dado</button>
      </div>
    </main>
    </div>
  );
}
