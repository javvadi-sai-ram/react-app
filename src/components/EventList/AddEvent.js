import React from "react";
import eventStores from "../../stores/EventStore/eventStore.js";
import {EventName,EventLocation,EventAdder,AddEventbutton} from "./eventlistcss.js";
import {observer} from "mobx-react";




@observer
class AddEvent extends React.Component{
    render(){
        return(
            <EventAdder>
              <EventName type="text" onChange={eventStores.onChangeEventName} placeholder="EventName"></EventName>
              <EventLocation type="text" onChange={eventStores.onChangeEventLocation} placeholder="Event Location"></EventLocation>
              <AddEventbutton onClick={eventStores.onAddEvent}>add Event</AddEventbutton>
            </EventAdder>
            );
    }
}

export default AddEvent