import {observable} from "mobx";
import {observer} from "mobx-react";


class Cell{
    @observable id;
    @observable isHidden;
    constructor(props){
        this.id=props.id;
        this.isHidden=props.isHidden;
    }
}

export default Cell;