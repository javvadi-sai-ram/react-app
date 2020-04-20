import {observable,action} from "mobx";
import Cell from "./gridModel";
class GameStore{
    @observable level=0;
    @observable toplevel=0;
    @observable currentLevelGridCells=[];
    @observable selectedCellsCount=0;
    @observable isGameCompleted=false;
     @observable cells=3
    
    @action.bound
    onCellClick(isHidden){
        {isHidden?this.incrementSelectedCellCount():this.goToIntialLevalAndUpdateCells()}
    }
    
    
   @action.bound
    setGridCells(){ 
        for(let n=1;n<=this.cells*this.cells;n++){
            const cell=new Cell({id:Math.random()*100000,isHidden:false});
            this.currentLevelGridCells.push(cell);
        }
        for(let n=0;n<this.cells;n++){
            this.currentLevelGridCells[n].isHidden=true;
        }
        this.shuffleData();
    }
    shuffleData=()=>{
        let currentIndex=this.currentLevelGridCells.length;    
         while (0 !== currentIndex) {
         let randomIndex = Math.floor(Math.random() * currentIndex);
             currentIndex -= 1;
             let temporaryValue = this.currentLevelGridCells[currentIndex];
            this.currentLevelGridCells[currentIndex] = this.currentLevelGridCells[randomIndex];
             this.currentLevelGridCells[randomIndex] = temporaryValue;
  }
  console.log(this.currentLevelGridCells);
    }
    @action.bound
    goToNextLevelAndUpdateCells(){
        this.cells=this.cells+1;
        this.level=this.level+1;
        this.resetSelectedCellsCount();
        this.setGridCells();
    }
    
    @action.bound
    goToIntialLevalAndUpdateCells(){
        clearTimeout(this.timer);
        setTimeout(()=>{
            this.resetGame();
        },1000);
    }
    
    @action.bound
    resetSelectedCellsCount(){
        this.selectedCellsCount=0;
    }
    
    @action
    incrementSelectedCellCount(){
        this.selectedCellsCount=this.selectedCellsCount+1;
        if(this.selectedCellsCount===this.cells){
            this.timer=setTimeout(()=>{
            this.currentLevelGridCells=[];
            this.goToNextLevelAndUpdateCells();
            },500);
        }
    }
    
    @action.bound
    onPlayAgainClick(){
        this.resetGame();
    }
    
    @action.bound
    resetGame(){
        this.setTopLevel();
        this.currentLevelGridCells=[];
        this.cells=3;
        this.level=0;
        this.resetSelectedCellsCount();
        this.setGridCells();
    }
    
    @action.bound
    setTopLevel(){
        if(this.toplevel<this.level){
            this.toplevel=this.level;
        }
    }
    
}

const gameStore=new GameStore();


export default gameStore;