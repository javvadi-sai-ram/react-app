import React from "react";
import {observable} from "mobx";
import { observer } from "mobx-react";

export type eventModelProps={
    id:number,
    name:string,
    Location:string
}

class EventModel {
    id:number;
    @observable name:string;
    @observable Location:string;
    
    constructor(props:eventModelProps){
        this.id=props.id;
        this.name=props.name;
        this.Location=props.Location;
    }
}


export default EventModel;