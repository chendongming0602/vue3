<template>
  <router-view/>
  <SET />
</template>
<script lang="ts">
import { defineComponent, nextTick, onMounted } from 'vue'
import SET from "@/components/set/set.vue";
export default defineComponent({
  setup(props) {
    let theme=window.localStorage.getItem("theme");
    theme&&window.document.documentElement.setAttribute("data-ming",theme);
  },
  components:{SET}
})
</script>

<style lang="scss">
  *{
    margin: 0;
  }
  
</style>
