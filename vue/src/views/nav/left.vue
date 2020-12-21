<template>
    <div>
        我是导航
        <leftNav :judge="state.judge"></leftNav>
    </div>
</template>
<script>
import {judge} from "@/router/judge.js";
import leftNav from "@/components/nav/nav.vue";
import { reactive } from 'vue';
export default {
    name:"left",
    components:{
        leftNav
    },
    setup(){
        const state=reactive({
            judge
        });
        return {
            state
        }
    }
}
</script>

