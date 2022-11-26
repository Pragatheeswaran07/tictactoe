import { useState,useEffect } from 'react';
import {Pattern} from './Pattern.js';
import './App.css';
import Square from './component/Square'
function App() {
  const [board,setBoard]=useState(["","","","","","","","",""]);
  const [player,setPlayer]=useState("X");
  const [result,setResult]=useState({winner:"none",state:"none"})
   useEffect(()=>{
    checkwin();
    checkiftie();
    if(player=="X"){
      setPlayer("O")
    }
    else{
      setPlayer("X")
    }

   },[board]);


   useEffect(()=>{
    if(result.state!="none"){
      alert('Game Fineshed!');
      restartgame();
    }

   },[result])







  const chosesquare=(square)=>{
    setBoard(board.map((val,ind)=>{
      if(ind==square && val==""){
        return player;
      }
       return val
    })
    );
  }



const checkwin=()=>{
  Pattern.forEach((currpattern)=>{
  const firstplayer=board[currpattern[0]];
  if(firstplayer=="")return ;
  let foundwinningpattern=true;
  currpattern.forEach((ind)=>{
   if(board[ind]!=firstplayer){
    foundwinningpattern=false;
   }
  }
  );

  if(foundwinningpattern)
  {
   setResult({winner:player,state:"won"})
  }
  }
  );
};


const checkiftie=()=>{
  let filled=true;
  board.forEach((square)=>
  {
    if(square==""){
      filled=false;

    }
  });
  if(filled){
   setResult({winner:"no one",state:"tie"})

  }
};



const restartgame=()=>{
  setBoard(["","","","","","","","",""])
  setPlayer("O")
}


















  return (
     
    <div className="app">
   <div className="box">
    <div className="row">
     <Square val={board[0]} chosesquare={()=>{chosesquare(0)}} />
     <Square val={board[1]} chosesquare={()=>{chosesquare(1)}} />
     <Square val={board[2]} chosesquare={()=>{chosesquare(2)}}/>
    </div>
    <div className="row">
     <Square val={board[3]} chosesquare={()=>{chosesquare(3)}}/>
     <Square val={board[4]} chosesquare={()=>{chosesquare(4)}}/>
     <Square val={board[5]} chosesquare={()=>{chosesquare(5)}}/>

    </div>
    <div className="row">
    <Square val={board[6]} chosesquare={()=>{chosesquare(6)}} />
     <Square val={board[7]} chosesquare={()=>{chosesquare(7)}} />
     <Square val={board[8]} chosesquare={()=>{chosesquare(8)}}/>
    </div>

   </div>
    </div>

  );
}

export default App;
