<template>
    <div>
        <el-menu
            :collapse="false"
            background-color="#304156"
            text-color="#eee"
            active-text-color="#4dbcff"
            :default-active="''"
        >
            <MENU :menuList="state.sidebarMenu"></MENU>
        </el-menu>
    </div>
</template>
<script lang="ts">
import {useStore,mapGetters} from "vuex";
import { defineComponent, reactive ,computed} from "vue";
import MENU from "./menu.vue";

export default defineComponent({
    setup() {
        const store=useStore();
        // console.log(store)
        let state = reactive({
            sidebarMenu: computed(()=>store.getters.GET_MENU),
        });
        store.dispatch("FETCH_PERMISSION")
        return {
            state,
        };
    },
    components: {
        MENU,
    },
});
</script>
