import UserService from "../services/userServices/index.api";
import TodoServices from "../services/todoServices/index.api";
import UserStore from "./userStore/index";
import TodoStore from "./TodoStoreNetwork/todoStoreNet.js";

import CounterStore from './CounterStore';
const counterStore = new CounterStore();

const userService=new UserService();
const userStore=new UserStore(userService);



const todoService=new TodoServices;
const todoStores=new TodoStore(todoService);


export default {
  counterStore,userStore,todoStores
};
