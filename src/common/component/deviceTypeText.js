import React from "react";
import WithScreenSizeDetectors from "../hocs/withScreenSizeDetectors";
import {observer} from "mobx-react"

@observer
class DeviceTypeText extends React.Component{
    render(){
        return(
            <div>
            DeviceType:{this.props.display}
            </div>
            )
    }
}

export default WithScreenSizeDetectors(DeviceTypeText)