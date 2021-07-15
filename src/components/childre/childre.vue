<template>
    <div>
        <div>我是childre</div>
    </div>
</template>
<script lang="ts">
import { defineComponent, inject, reactive } from 'vue'

export default defineComponent({
    setup(props,{emit}) {
        let state:any=reactive({
            name:"我是子组件"
        })
        // emit("childreEvent",state)
    },
})
</script>
