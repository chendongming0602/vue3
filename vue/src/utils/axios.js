import axios from "axios";
const request=({url,method="GET",data={}}={})=>{
    return new Promise((resolve,reject)=>{
        let datas={params:{...data}}
        if(method==="POST") datas={...{data}};
        axios({
            url,
            method,
            ...datas
        }).then(res=>{
            let data=res.data;
            if(data.code===0) return reject(data)
            resolve(data.data)
        }).catch(err=>{
            reject(err)
        })
    })
};
export {
    request
}