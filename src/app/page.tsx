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
  function LançarDado(i:number){
    const number = Math.floor(Math.random()*6+1)
    if (i == 0) {
      setValueRound({player_01: number, player_02: Number(valueRound?.player_02)})
      setIsRound({player_01: true, player_02: isRound.player_01})
      if( isRound.player_01 && isRound.player_01){
        if (valueRound.player_01 > valueRound.player_02) {
          setIsRound({player_01: false, player_02: false})
          setPointRound({player_01: pointRound.player_01+1, player_02: pointRound.player_02})
          return number 
          // sucessText.player_01
        }
        else if (valueRound.player_01 == valueRound.player_02) {
          return "EMPATE!!"
        } 
        else{
          setIsRound({player_01: false, player_02: false})  
          setPointRound({player_01: pointRound.player_01, player_02: pointRound.player_02+1})
          
          return sucessText.player_02

        }
      }
      else {
        return null 
      }
    }
    else{
      setValueRound({player_01: Number(valueRound?.player_01), player_02:number})
       setIsRound({player_01: true, player_02: isRound.player_01})
      if( isRound.player_01 && isRound.player_01){
        if (valueRound.player_01 < valueRound.player_02) {
          setIsRound({player_01: false, player_02: false})
          setPointRound({player_01: pointRound.player_01, player_02: pointRound.player_02+1})

          return sucessText.player_02

        }
        else{
          setIsRound({player_01: false, player_02: false})  
          setPointRound({player_01: pointRound.player_01+1, player_02: pointRound.player_02})
            
          return sucessText.player_01

        }
      }else{
        return null 
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
        ()=>{
          let Response= LançarDado(0)
          setTimeout(()=>{
            if ( Response != null) alert(Response)
              
          },2000)
          
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
    
          ()=>{
          let Response= LançarDado(1)
          setTimeout(()=>{
            if ( Response != null) alert(Response)
          },3000)
          
        }
        
      }
      >Lançar dado</button>
      </div>
    </main>
    </div>
  );
}
