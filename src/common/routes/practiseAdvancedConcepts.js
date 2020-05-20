import React from "react";
import ViewEditToggle from "../component/viewEditToggle"
import CollapseExpand from "../component/collapseExpand"
import DeviceTypeText from "../component/deviceTypeText"
import DisplayMouseCoordinates from "../component/MouseCoordinates"


class PractiseAdvancedConcepts extends React.Component{
    render(){
        
        return(
            <div>
            <ViewEditToggle/>
            <CollapseExpand/>
            <DeviceTypeText/>
            <DisplayMouseCoordinates/>
            </div>
            );
    }
}

export default PractiseAdvancedConcepts;