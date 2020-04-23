import React from "react";
import {observer,inject} from "mobx-react";

//import stores from "../../stores";
import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure";

import NoDataView from "../common/NoDataView";
//const userStore=stores.userStore;


@inject('userStore')
@observer
class UsersPage extends React.Component{
    
    componentDidMount(){
        this.doNetWorkCalls();
    }
    
    getUserStore=()=>{
        return this.props.userStore
    }
    
    doNetWorkCalls=()=>{
        this.getUserStore().getUsersAPI();
    }
    renderUserList=()=>{
        const {users}=this.getUserStore();
        if(users.length===0){
            return <NoDataView/>;
        }
        return users.map(userName=><div key={Math.random()}>{userName}</div>);
    }
    
    render(){
        const {getUserApiStatus,getUserApiError}=this.getUserStore();
        return(
            
<LoadingWrapperWithFailure
            apiStatus={getUserApiStatus}
            apiError={getUserApiError}
            onRetryClick={this.doNetWorkCalls}
            renderSuccessUI={this.renderUserList}
            />
            );
    }
}

export default UsersPage;
/**/


