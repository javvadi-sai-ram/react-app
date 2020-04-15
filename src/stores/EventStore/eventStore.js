//import React from "react";
import {observable,action} from "mobx";
import EventModel from "./EventModel";





class EventStore{
    eventId=0
    @observable listOfEvents=[];
    
    @action.bound onChangeEventName(event){
        this.eventName=event.target.value;
       // console.log(this.eventName)
    }
    @action.bound onChangeEventLocation(event){
        this.eventLocation=event.target.value;
    }
    
    @action.bound onAddEvent(){
       let DuplicateListOfEvents=this.listOfEvents.slice(0);
           const eventModel=new EventModel({id:this.eventId++,name:this.eventName,Location:this.eventLocation});
           DuplicateListOfEvents.push(eventModel);
           this.listOfEvents=DuplicateListOfEvents;
    }
    @action.bound
    onDeleteEvent(item){
        let DuplicateListOfEvents=this.listOfEvents.filter(eachObj=>eachObj.id!==item.id);
        this.listOfEvents=DuplicateListOfEvents;
    }
}



const eventStores=new EventStore()


export default eventStores;