import {observable} from 'mobx';



class Themestore{ 
    @observable boolForColorMode
    constructor(){
        this.boolForColorMode=true;
    }
    updateTheme(){
        if(this.boolForColorMode===true){
            this.boolForColorMode=false;
        }
        else{
            this.boolForColorMode=true;
        }
    }
}

const themeStore=new Themestore();

export default themeStore;