import AuthService from "../services/AuthServices.js";
import AuthStore from "./AuthStore/";


const authService=new AuthService();
const authStore=new AuthStore(authService);


export default authStore;