//import {create} from "apisauce";
//import {networkCallWithApisauce} from "../../utils/APIUtils";
//import {apiMethods} from "../../constants/APIConstants";

import usersResponse from "../../fixtures/getUserResponse.json"

class UserFixtureService{
    
            
    
    getUsersAPI(){
         return new Promise((resolve,reject)=>{
             resolve(usersResponse);
         })
    }
}


export default UserFixtureService;


