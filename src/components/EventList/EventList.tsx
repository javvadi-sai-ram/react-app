import React from "react";
import {observer} from "mobx-react";

import Event from "./Event";
import EventModel from "../../stores/EventStore/EventModel";


//import {EventStores} from "../../stores/EventStore/eventStore.js";

//import {EventName,EventLocation,EventAdder,AddEventbutton} from "./eventlistcss.js";

type EventListProps={
    onDeleteEvent:Function,
    displayList:any,
    object:any
}

@observer
class EventList extends React.Component<EventListProps>{
   render(){
            return(
                <div>
                {this.props.displayList.map((item:EventModel)=><Event key={item.id} object={item} onDeleteEvent={this.props.onDeleteEvent}/>)}
                </div>
                )
        
   }
}
export default EventList;