<template>
    <div class="menu-container">
        <template v-for="v in state.menuList">
            <el-submenu :index="v.name" v-if="v.children&&v.children.length>0" :key="v.name">
                <template v-slot:title>
                    <i class="iconfont" :class="v.meta.icon"></i>
                    <span>{{v.meta.name}}</span>
                </template>
                <el-menu-item-group>
                    <my-nav :menuList="v.children"></my-nav>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item :key="v.name" :index="v.name" @click="gotoRoute(v.name)" v-else>
                <i class="iconfont" :class="v.meta.icon"></i>
                <span >{{v.meta.name}}</span>
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

            console.log(name)
            router.push({ name })
        }
        return {
            state,
            gotoRoute
        }
    },
})
</script>
