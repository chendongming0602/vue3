import {TOKEN,TIME} from "../type";
export default{
    state:{
        token:"my is token",
        time:1608284240275
    },
    getters:{
        [TOKEN]:state=>state.token,
        [TIME]:state=>state.time
    },
    mutations:{
        [TOKEN](state,value){state.token=value},
        [TIME](state,value){state.time=value},
    }
}