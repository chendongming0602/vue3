import axios from "@/utils/request";
export const loginApi=()=>{
    return axios({
        path:"/users"
    })
}
export const upApi=(data:any)=>{
    return axios({
        path:"/users",
        method:"POST",
        data
    })
}