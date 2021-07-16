<template>
    <div class="home-box">
        <div>模拟后端给的路由数据在：permission.ts</div>
        <div>本地路由在：dynamic-router.ts</div>
        <div>路由结构处理在：actions.ts</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>
<style lang="scss" scoped >
    .home-box{
        text-align: center;
        font-size: 20px;
        div{
            margin: 100px;
        }
    }
</style>
