<template>
    <div class="concat-box">
        <div class="git theme-all">GitHub地址入口：<a href="http://" target="_blank" rel="noopener noreferrer">点击进入（点个star）</a></div>
        <div class="git theme-all">码云地址入口：<a href="http://" target="_blank" rel="noopener noreferrer">点击进入（点个star）</a></div>
        <div class="git theme-all">公众号地址入口：<a href="http://" target="_blank" rel="noopener noreferrer">点击进入</a></div>
        <hr>
        <div class="info">
            <div>
                <div>扫一扫添加微信好友</div>
                <img src="../../assets/img/wx.jpg" alt="微信">
            </div>
            <div>
                <div>扫一扫关注公众号</div>
                <img src="../../assets/img/gzh.jpg" alt="公众号">
            </div>
        </div>
        <a href="http://" target="_blank" rel="noopener noreferrer"><div class="hint">欢迎大家一起Fork、Pull Request、Star</div></a>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>
<style lang="scss" scoped>
    .concat-box{
        width: 70vw;
        margin: 0 auto;
        padding: 50px;
        .git{
            padding: 10px 20px;
            border-radius: 5px;
            width: fit-content;
            margin-bottom: 20px;
            font-weight: 600;
            a{
                color: rgb(250, 45, 45);
            }
        }
        .info{
            display: flex;
            align-items: center;
            justify-content: space-around;
            text-align: center;
            margin-top: 20px;
            img{
                width: 300px;
                height: 300px;
            }
            div{
                font-size: 20px;
                font-weight: 600;
            }
        }
        .hint{
            text-align: center;
            color: rgb(247, 77, 77);
            margin-top: 50px;
        }
    }
</style>
