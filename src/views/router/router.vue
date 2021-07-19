<template>
    <div class="router">
        <div class="title ">动态路由说明</div>
        <div>@/router/dynamic-router.ts 存放着需要动态的<span>《本地路由》。</span></div>
        <div>@/utils/permission.ts 是模拟后端返回的<span>《动态路由数据》。</span></div>
        <div>
            @/store/actions.ts 中进行了路由处理，将 <span>《本地路由》</span> 与<span>《动态路由数据》</span> 根据属性<span>type</span> 值进行对比。
        </div>
        <div>实际项目中，只需将 @/store/actions.ts 中的 <span>permissionList</span> 数据替换成后端返回的路由数据即可！</div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>
<style scoped lang="scss">
    .router{
        text-align: center;
        div{
            font-size: 20px;
            margin: 40px;
        }
        .title{
            font-size: 40px;
            font-weight: 600;
        }
        span{
            color: red;
        }
    }
</style>
