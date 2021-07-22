<template>
    <div class="text-box">
        <div  id="text"><p>喜欢并且点了个star</p></div>
        <div style="text-align:center;padding:20px">更多配置说明：<a href="https://www.wangeditor.com/doc/pages/01-%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8/" target="_blank" rel="noopener noreferrer">点击进入</a> </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import E from 'wangeditor';
export default defineComponent({
    setup() {
        onMounted(()=>{
            const editor = new E('#text');
            // 图片上传服务器链接（此处仅模拟）
            editor.config.uploadImgServer = '/upload-img';
            // 修改后的回调
            editor.config.onchange = function (newHtml:string) {
                console.log("change 之后最新的 html", newHtml);
            };
            editor.create();

            // 更多配置 说明：https://www.wangeditor.com/doc/pages/01-%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8/
        })
        return {}
    },
})
</script>
<style lang="scss" scoped>
.text-box{
    padding: 30px;
}
</style>