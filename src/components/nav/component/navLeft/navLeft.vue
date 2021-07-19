<template>
    <div>
        <el-menu
            :collapse="false"

            text-color="#eee"
            active-text-color="#4dbcff"
            :default-active="state.currentMenu"
            class="theme-bg"
            id="menu"
        >
            <MENU :menuList="state.sidebarMenu"></MENU>
        </el-menu>
    </div>
</template>
<script lang="ts">
import {useStore} from "vuex";
import { defineComponent, reactive ,computed} from "vue";
import MENU from "./menu.vue";

export default defineComponent({
    setup() {
        const store=useStore();
        // console.log(store)
        let state = reactive({
            sidebarMenu: computed(()=>store.getters.GET_MENU),
            currentMenu: computed(()=>store.getters.GET_CURRENTMENU),
            isSidebarNavCollapse: computed(()=>store.getters.getIsSidebarNavCollapse),
        });
        
        return {
            state,
        };
    },
    components: {
        MENU,
    },
});
</script>
