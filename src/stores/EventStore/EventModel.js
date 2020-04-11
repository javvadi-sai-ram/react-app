import React from "react";
import {observable} from "mobx";


class EventModel{
    @observable id;
    @observable name;
    @observable Location;
    
    constructor(props){
        this.id=props.id;
        this.name=props.name;
        this.Location=props.Location;
    }
}


export default EventModel;