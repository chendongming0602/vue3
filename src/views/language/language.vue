<template>
    <div class="lang">
        <div class="title">{{ $t("title") }}</div>
        <div>{{ $t("hint") }}</div>
        <el-button class="theme-all" @click="changeLang(1)">{{$t("btnZh")}}</el-button>
        <el-button class="theme-all" @click="changeLang(2)">{{$t("btnEn")}}</el-button>
        <div style="font-size:30px">使用说明：</div>
        <div>通过@/utils/language.js 配置自己所需要的语言</div>
        <div>i18n 的官方文档：<a target="_blank" href="https://kazupon.github.io/vue-i18n/zh/started.html#html">https://kazupon.github.io/vue-i18n/zh/started.html#html</a></div>
        <div style="font-size:14px">《本模板对左边导航栏未使用国际化，需要的可自行配置》</div>
    </div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";

export default defineComponent({
    setup() {
        // @ts-ignore //忽略提示
        const { proxy } = getCurrentInstance();
        const changeLang = (i: number) => {
            proxy.$i18n.locale=i==1?"zh-CN":"en-US"
        };
        return { changeLang };
    },
});
</script>
<style scoped lang="scss">
.lang {
    text-align: center;
    div {
        margin: 20px;
        font-size: 20px;
    }
    .title {
        font-size: 40px;
    }
}
</style>
