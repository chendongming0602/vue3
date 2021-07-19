<template>
    <div class="color-box">
        <div class="title ">主 题 切 换</div>
        <div class="color-show ">
            <div class="color-title">主题切换展示</div>
            <div class="theme-all">背景/字体颜色：都统一</div>
            <div class="theme-bg" style="color:#fff">只统一： 背景</div>
            <div class="theme-color" style="background:#999">
                只统一： 字体颜色
            </div>
        </div>
        <div class="th-1 " @click="colorChange(1)">点击切换主题1</div>
        <div class="th-2" @click="colorChange(2)">点击切换主题2</div>
        <div class="th-3" @click="colorChange(3)">点击切换主题3</div>
        <div class="th-4" @click="colorChange(4)">点击切换主题4</div>
        <div class="th-5" @click="colorChange(5)">点击切换主题5</div>
        <div class="color-hint">
            <div>主题使用说明：</div>
            <div>
                通过需要进行主题管理的元素中添加指定css进行切换
            </div>
            <div>1、需要统一 背景颜色和字体颜色，css中添加：theme-all</div>
            <div>2、需要统一 背景颜色，css中添加：theme-bg</div>
            <div>3、需要统一 字体颜色，css中添加：theme-color</div>
            <div style="color:red">《需要自定义主题：@/styles/color 文件夹中可进行自定义》</div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
    setup() {
        const colorChange = (i: number) => {
            window.document.documentElement.setAttribute(
                "data-ming",
                `theme${i}`
            );
            //通过本地缓存进行处理刷新
            window.localStorage.setItem("theme",`theme${i}`);
        };
        return {
            colorChange,
        };
    },
});
</script>
<style scoped lang="scss">
@mixin th {
    width: 150px;
    line-height: 40px;
    border-radius: 5px;
    margin: 20px auto;
    cursor: pointer;
}
.color-box {
    text-align: center;
    .title {
        font-size: 40px;
        font-weight: 600;
        padding: 20px;
    }

    .th-1 {
        background: #304156;
        color: #fff;
        @include th;
    }
    .th-2 {
        background: #409eff;
        color: #fff;
        @include th;
    }
    .th-3 {
        background: #a16bfe;
        color: #f7b765;
        @include th;
    }
    .th-4 {
        background: #121317;
        color: #9dfcf4;
        @include th;
    }
    .th-5 {
        background: #f5ccf6;
        color: #fff;
        @include th;
    }
    .color-show {
        display: flex;
        div {
            width: 200px;
            line-height: 80px;
            margin: 20px auto;
            border-top: 2px solid #666;
            border-bottom: 2px solid #666;
        }
        .color-title {
            border: none;
            font-size: 30px;
        }
    }
}
.color-hint {
    width: 50vw;
    margin: 60px auto;

    div {
        line-height: 30px;
        text-align: left;
        margin: 10px;
    }
    div & :nth-child(1) {
        text-align: center;
        font-size: 20px;
        font-weight: 600;
    }
}
</style>
