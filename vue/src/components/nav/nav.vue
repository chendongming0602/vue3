<template>
    <div>
        <el-row class="tac">
            <el-col :span="12">
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                text-color="#fff"
                active-text-color="#ffd04b"
                background-color="#545c64"
                @close="handleClose">
                    <div v-for="(t,i) in judge" :key="i">
                        <el-submenu  v-if="t.children&&t.children.length>0" :index="t.name">
                            <template #title>
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                            </template>
                            <el-menu-item-group :index="t.name"  > 
                                <navs  :judge="t.children"></navs>
                            </el-menu-item-group>
                          
                        </el-submenu>
                        <el-menu-item index="2" v-else>
                            <i class="el-icon-menu"></i>
                            <template #title>{{t.meta.name}}</template>
                        </el-menu-item>
                    </div>
                </el-menu>
            </el-col>
         </el-row >
    </div>
</template>
<script>
import {reactive} from "vue";
export default {
    name:"navs",
    props:{
        judge:{
            type:()=>Array,
            default:[]
        }
    },
    setup(){
        const state=reactive({
            name:10
        });
        return {
            state
        }

    },
}
</script>

<style>

</style>
