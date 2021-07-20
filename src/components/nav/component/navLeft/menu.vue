<template>
    <div class="menu-container">
        <template v-for="v in state.menuList" >
            <el-submenu :index="v.name" v-if="v.children&&v.children.length>0" :key="v.name"  class="theme-bg">
                <template v-slot:title>
                    <i class="iconfont theme-color" :class="v.meta.icon"></i>
                    <span class="theme-color">{{v.meta.name}}</span>
                </template>
                <el-menu-item-group>
                    <my-nav :menuList="v.children"></my-nav>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item :key="v.name" :index="v.name" @click="gotoRoute(v.name)" v-else  class="theme-bg">
                <i class="iconfont theme-color" :class="v.meta.icon"></i>
                <span class="theme-color">{{v.meta.name}}</span>
            </el-menu-item>
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'my-nav',
    props:{
        menuList:{
            type:Array,
            default:()=>[]
        }
    },
    setup(props:any) {
        let state=reactive({
            menuList:props.menuList
        });
        let router=useRouter();
        let gotoRoute=(name:any)=>{
            router.push({ name })
        }
        return {
            state,
            gotoRoute
        }
    },
})
</script>
