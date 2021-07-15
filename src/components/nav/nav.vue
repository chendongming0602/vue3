<template>
    <div>
        <NAVTOP ></NAVTOP>
        <NAVLEFT class="sidebar"></NAVLEFT>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import NAVTOP from "./component/navTop/navTop.vue";
import NAVLEFT from "./component/navLeft/navLeft.vue";
export default defineComponent({
    setup() {
        
    },
    components:{
        NAVTOP,
        NAVLEFT
    }
})
</script>
