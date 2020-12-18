import {request} from "@/utils/axios";
export const login=()=>{
    return request({
        url:"/token.json",
    })
}
