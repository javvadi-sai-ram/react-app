import React from "react";
import eventStores from "../../stores/EventStore/eventStore.js";
//import {EventName,EventLocation,EventAdder,AddEventbutton} from "./eventlistcss.js";
import {observer} from "mobx-react";
import EventList from "./EventList.js";
import AddEvent from "./AddEvent.js";


     
@observer
class EventApp extends React.Component{
    render(){
        
        return(
            <div>
            <AddEvent/> 
            <EventList displayList={eventStores.listOfEvents} onDeleteEvent={eventStores.onDeleteEvent}/>
            </div>
            );
    }
}

export default EventApp