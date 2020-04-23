import {observable,action} from "mobx";
import {API_INITIAL,API_SUCCESS,API_FAILED,API_FETCHING} from "@ib/api-constants";
import {bindPromiseWithOnSuccess}  from "@ib/mobx-promise";

//import UserService from "../../services/userServices/index.fixture"

class UserStore{
    @observable getUserApiStatus;
    @observable getUserApiError;
    @observable users;
    userService
    
    constructor(userService){
        this.userService=userService;
        this.init();
    }
    
    @action.bound
    init(){
        this.getUserApiStatus=API_INITIAL;
        this.getUserApiError=null;
        this.users=[];
    }
    
    @action.bound
    setUserApiResponse(userResponse){
       this.users=userResponse.map((user)=>user.name) ;
       console.log(this.users);
    }
                                    
    @action.bound
    setUserApiError(error){
        this.setUserApiError=error;
    }
    
    @action.bound
    setUserApiStatus(apiStatus){    
        this.getUserApiStatus=(apiStatus);
    }
    
    @action.bound
    getUsersAPI(){
        const usersPromise=this.userService.getUsersAPI();
      
        return bindPromiseWithOnSuccess(usersPromise)
        .to(this.setUserApiStatus,this.setUserApiResponse)
        .catch(this.getUserApiError);
    }
    
    
    @action
    clearStore(){
        
    }
}

//const userService=new UserService()
//const userStore=new UserStore(userService);

export default UserStore;