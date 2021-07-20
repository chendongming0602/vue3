<template>
    <div class="set-box">
        <icons name="set" className="set-svg" class="theme-all"></icons>
        <div class="set-item">
            <div class="set-th">
                <div class="set-th-title theme-all">目前主题</div>
                <div class="th-1" @click="colorChange(1)">切换主题1</div>
                <div class="th-2" @click="colorChange(2)">切换主题2</div>
                <div class="th-3" @click="colorChange(3)">切换主题3</div>
                <div class="th-more" @click="colorChange(4)">更多主题</div>
                <hr />
            </div>
            <!-- <div>
                联系我们
            </div> -->
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
    setup() {
        const router=useRouter();
        const colorChange = (i: number) => {
            if(i==4) return router.push("/color");
            window.document.documentElement.setAttribute(
                "data-ming",
                `theme${i}`
            );
            //通过本地缓存进行处理刷新
            window.localStorage.setItem("theme", `theme${i}`);
        };
        return { colorChange };
    },
});
</script>
<style lang="scss" scoped>
@mixin th {
    width: 130px;
    line-height: 30px;
    border-radius: 5px;
    margin: 10px auto;
    cursor: pointer;
    font-size: 14px;
}
.set-box {
    position: fixed;
    top: 50%;
    right: -165px;
    transform: translate(0, -50%);
    z-index: 999999999;
    display: flex;
    align-items: center;
    text-align: center;
    transition: 0.5s;
    cursor: pointer;
    .set-svg {
        width: 60px;
        height: 60px;
        border-radius: 10px;
    }
    .set-item {
        padding: 15px;
        background: #dedede;
        border-radius: 5px;
        margin-left: 10px;
    }
    .set-th-title {
        font-size: 16px;
        text-align: center;
        padding: 5px;
        border-radius: 20px;
        width: 130px;
        line-height: 30px;
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
    .th-more {
        font-size: 14px;
        cursor: pointer;
        padding-bottom: 5px;
    }
}
.set-box:hover{
    right: 10px;
}
</style>
