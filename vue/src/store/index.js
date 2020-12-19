import Vuex from 'vuex'
import user from "./modules/user";
import {LEFTNAV} from "./type";
import {navData} from "@/api/router";
export default Vuex.createStore({
  state: {
    leftNav:[]
  },
  getters:{
    [LEFTNAV]:state=>state.leftNav
  },
  mutations: {
    [LEFTNAV]:(state,value)=>state.leftNav=value
  },
  actions: {
    [LEFTNAV]:async ()=>{
      let res=await navData();
      console.log(res)
    }
  },
  modules: {
    user
  }
});
