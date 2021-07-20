<template>
    <div class="icon">
        <div class="title">Elements图标</div>
        <div>
            <i class="el-icon-edit"></i>
            <i class="el-icon-share"></i>
            <i class="el-icon-delete"></i>
            <el-button class="theme-all" type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <div>根据不同class使用不同图标，图标列表：<a href="https://element-plus.gitee.io/#/zh-CN/component/icon" target="_blank" rel="noopener noreferrer">点击选择图标</a> </div>
        <div>图片颜色可使用css样式：<span>color</span> 进行修改。大小可使用css的<span>font-size</span> 进行修改</div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {},
});
</script>
<style scoped lang="scss">
    .icon{
        text-align: center;
        .title{
            font-size: 40px;
            font-weight: 600;
            margin: 20px;
        }
        i{
            margin: 0 10px;
        }
        div{
            margin-top: 20px;
        }
        span{
            color: red;
        }
    }
</style>
