<template>
    <div class="box">
        <div class="inp">
            <div>
                账号：<input type="" v-model="state.num" placeholder="随便输">
            </div>
            <div>
                密码：<input type="" v-model="state.pwd" placeholder="随便输">
            </div>
            <button @click="submit">登录</button>
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue';
import {login} from "@/api/user/login";
import {TOKEN,TIME} from "@/store/type";
import {ElMessage} from "element-plus";
export default {
    name:"login",
    setup(){
        const state=reactive({
            num:"",
            pwd:""
        })
        const submit=async function(){
            try{
                let res=await login();
                this.$store.commit(TOKEN,res.token);
                this.$store.commit(TIME,new Date().getTime());
                ElMessage.success({message:"登录成功"});
                this.$router.push("/")
            }catch(err){
                ElMessage.error('登录出错');
            }
            // this.$router.push("/")
        }
        return {
            state,
            submit
        }
    }
}
</script>
<style scoped>
    .box{
        width: 100%;
        height: 100vh;
        background: #4CB8C4;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #3CD3AD, #4CB8C4);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to left, #3CD3AD, #4CB8C4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
