import React from "react";
import Navbar from "../Navbar/Navbar.js";
import EmojiCard from "../EmojiCard/EmojiCard.js";
import HowToPlay from "../HowToPlay/HowToPlay.js";
import WinOrLose from "../WinOrLose/WinOrLose.js";


class EmojiGame extends React.Component{
    state={
        theme:"Light",
        score:0,
        topscore:0,
        gameState:"PLAYING",
        emojis:[
            {id:1,isClicked:false,name:"Exploding Head",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png"},
            {id:2,isClicked:false,name:"Grinning Face With Sweat",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png"},
            {id:3,isClicked:false,name:"Smiling Face With Heart-Eyes",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png"},
            {id:4,isClicked:false,name:"Smirking Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png"},
            {id:5,isClicked:false,name:"Thinking Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png"},
            {id:6,isClicked:false,name:"Winking Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png"},
            {id:7,isClicked:false,name:"Grinning Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png"},
            {id:8,isClicked:false,name:"Crying face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png"},
            {id:9,isClicked:false,name:"Astonished",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png"},
            {id:10,isClicked:false,name:"Face With Tears Of Joy",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png"},
            {id:11,isClicked:false,name:"Star-Struck",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png"},
            {id:12,isClicked:false,name:"Winking Face With Tongue",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png"},
            ]
    }
      themeOptions={
      Light:{
        id:"0",
        color:"#fff",
        displayText:"Dark Theme",
        textColor:"black",
        cardColor:"white",
        background:"#ebf8ff",
        red:"red",
        green:"green",
        totalTheme:"white"
      },
        Dark:{
        id:"1",
        color:"#2b3945",
        displayText:"Light Theme",
        textColor:"White",
        cardColor:"#2b6cb0",
        background:"black",
        red:"red",
        green:"green",
        totalTheme:"#00264d",
      }
    }
  
    shuffledData=()=>{
        let shuffledData= this.state.emojis.sort(()=>Math.random()-0.5);
        this.setState({emojis:shuffledData});
    }
    onEmojiClick=(event)=>{
        this.shuffledData();
        this.incrementScore(event);
    }
    incrementScore=(event)=>{
        let scores=0;
        let copiedEmojis=this.state.emojis.slice(0);
        console.log(copiedEmojis);
        let x=copiedEmojis.indexOf(event);
        if(copiedEmojis[x].isClicked===true){
            this.setState({gameState:"LOSE"});
        }
        else if(copiedEmojis[x].isClicked===false){
            scores=this.state.score+1;
            copiedEmojis[x].isClicked=true;
            this.setState({emojis:copiedEmojis,score:this.state.score+1});
        }
         if(scores===12){
            this.setState({gameState:"WON"});
        }
    }
    onPlayAgain=()=>{
        this.resetGame();
        this.setTopGame();
    }
    setTopGame=()=>{
        let {score,topscore}=this.state;
        if(score>topscore){
            this.setState({topscore:score});
        }
    }
    resetGame=()=>{
        let ChangeIsClickedToReset=this.state.emojis.map(item=>{
             (item.isClicked=false)
             return item
        })
        this.setState({emojis:ChangeIsClickedToReset,score:0, gameState:"PLAYING"})
    }
    onChangeTheme=()=>{
       if(this.state.theme==="Light"){
           this.setState({theme:"Dark"})
       }
       else{
           this.setState({theme:"Light"})   
       }
    }
    render(){
        console.log(this.themeOptions[this.state.totalTheme])
        const {emojis,gameState,score,topscore}=this.state;
        return(
            <div>
            <Navbar ScoreUpdate={score} topscore={topscore} onChangeTheme={this.onChangeTheme} theme={this.themeOptions[this.state.theme]}/>
            {gameState==="PLAYING"?
            <EmojiCard emojisDetails={emojis} onEmojiClick={this.onEmojiClick} theme={this.themeOptions[this.state.theme]}/>
            :<WinOrLose ScoreUpdate={score} gameState={gameState} onPlayAgain={this.onPlayAgain}/>}
            <HowToPlay theme={this.themeOptions[this.state.theme]}/>
            </div>
            );
    }
}

export default EmojiGame;