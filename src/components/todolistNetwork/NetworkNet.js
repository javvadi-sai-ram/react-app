import React from "react";


class NetworkError extends React.Component{
    render(){
        return(
        <div>
        <div className="network">Network Error</div>
        <button className="refresh-data" onClick={this.props.fetchingData}>Retry</button>
        </div>
            );
    }
}


export default NetworkError;
