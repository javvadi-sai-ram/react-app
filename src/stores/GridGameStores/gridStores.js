import {observable,action} from "mobx";
import Cell from "./gridModel";
class GameStore{
    @observable level=0;
    @observable toplevel=0;
    @observable currentLevelGridCells=[];
    @observable selectedCellsCount=0;
    @observable isGameCompleted=false;
    
    @action.bound
    onCellClick(){
        
    }
    
   @action
    setGridCells(){ 
        
        let cells=3;
        for(let n=1;n<=cells*cells;n++){
            const cell=new Cell({id:n,isHidden:false});
            this.currentLevelGridCells.push(cell);
        }
    }
    
    @action.bound
    goToNextLevelAndUpdateCells(){
        
    }
    
    @action.bound
    foToIntialLevalAndUpdateCells(){
        
    }
    
    @action.bound
    resetSelectedCellsCount(){
        
    }
    
    @action.bound
    incrementSelectedCellCount(){
        
    }
    
    @action.bound
    onPlayAgainClick(){
        
    }
    
    @action.bound
    resetGame(){
        
    }
    
    @action.bound
    setTopLevel(){
        
    }
    
}

const gameStore=new GameStore();


export default gameStore;