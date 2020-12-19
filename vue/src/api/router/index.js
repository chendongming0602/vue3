import {request} from "@/utils/axios";
export const navData=()=>{
    return request({
        url:"/navData.json",
    })
}