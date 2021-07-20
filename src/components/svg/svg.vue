<template>
    <svg :class="state.className" aria-hidden="true" >
        <use :xlink:href="state.name" />
    </svg>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from "vue";

export default defineComponent({
    props: {
        name: {
            type: String,
            default: "",
        },
        className: {
            type: String,
            default: "",
        },
    },
    setup(props) {
        let state = reactive({
            name: computed(() => `#icon-${props.name}`),
            className: computed(() => {
                if (props.className) {
                    return "svg-icon " + props.className;
                } else {
                    return "svg-icon";
                }
            }),
        });
        return {state}
    },
});
</script>
<style scoped>
  .svg-icon{
    width: 2rem;
    height: 2rem;
    fill: currentColor;
  }
</style>