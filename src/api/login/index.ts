import axios from "@/utils/request";
export const loginApi=()=>{
    return axios({
        path:"/users"
    })
}