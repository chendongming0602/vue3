//1.引入vue
// import Vue from 'vue'
//2.引入axios库
import axiosNew from 'axios';
import {config} from '@/utils/config'//引入公用文件
axiosNew.defaults.timeout =3000;//请求超时时间

axiosNew.interceptors.request.use(//请求拦截
    config => {
        // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        // let token =sessionStorage.getItem('token');
        // let token=store.getters.getToken;
        // if (token) {//如果有token给请求头加上
        //     config.headers.common['token'] =token
        // }
        return config
    },

    err => {
        return Promise.reject(err);
    }

)

axiosNew.interceptors.response.use(response => {//相应拦截
    // try{
    //     let {token}=response.data;
    //     if(token){//将登陆的返回的token保存下来
    //         store.dispatch('tokenChange',token);
    //     }
        
    // }catch(err){
    //     console.log("在相应拦截这边其他请求不需要取token",err)
    // };
  
    // if(response.data.code==10001||response.data.code==402){//如果token为空或者过期，跳到登录
    //     store.dispatch('tokenChange',"");
    //     router.push({path:"/login"});
       
    // }
    return response;
}
    ,err=>{
        return Promise.reject(err)
    }
);
// axiosNew.defaults.baseURL=""
const axios=function({path,method="GET",data={}}:any={}){
    return new Promise((resolve,reject)=>{
        let datas:object={params:{...data}}
        if(method==="POST") datas={...{data}};
        axiosNew({
            url:`${config.host}${path}`,
            method,
            ...datas
        }).then(res=>{
            resolve(res.data)
        }).catch(err=>{resolve(-1)})
    })
};
export default axios



