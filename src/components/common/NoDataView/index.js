import React from "react";

import { NoDataViewContainer, NoDataViewText } from "./styledComponents";

class NoDataView extends React.Component {
  defaultprops={
    color:"black"
  }
  render() {
    return (
      <NoDataViewContainer>
        <NoDataViewText color={this.props.color}>No data found!</NoDataViewText>
      </NoDataViewContainer>
    );
  }
}

export default NoDataView;
