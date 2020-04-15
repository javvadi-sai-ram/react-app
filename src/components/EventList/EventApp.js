import React from "react";
import {observer} from "mobx-react";
import eventStores from "../../stores/EventStore/eventStore";
import EventList from "./EventList";
import AddEvent from "./AddEvent";


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