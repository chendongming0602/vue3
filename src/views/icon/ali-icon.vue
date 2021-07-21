<template>
    <div class="svg-box">
       <div class="title">阿里图标</div>
        <icons name="glasses" className="icon-svg"></icons>
        <icons name="fan" className="icon-svg"></icons>
        <icons name="watermelon" className="icon-svg"></icons>
        <icons name="beverages" className="icon-svg"></icons>
        <icons name="ship" className="icon-svg"></icons>
        <div class="hint-title">使用说明：</div>
        <div class="hint">
            <div>1、进入阿里巴巴图标库进行选择自己图标，并且复制图标的svg代码《<a href="https://www.iconfont.cn/" target="_blank" rel="noopener noreferrer">点击进入阿里巴巴图标库</a> 》</div>
            <div>2、在@/assets/icons中创建后缀：.svg文件，将复制的svg代码粘贴进去（文件名请使用英文）</div>
            <div>3、在需要使用的页面中：</div>
            <div class="code-editor"><codeEditor v-model:value="state.code" scene="look" ></codeEditor></div>
            <div>属性name对应@/assets/icons中创建的文件名</div>
            <div>属性className自定义样式名，可通过该样式进行修改图标大小和颜色</div>
            <div>4、详细说明可移步到@/components/svg/svg.ts进行查看</div>
        </div>
        
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import codeEditor from '@/components/codeEditor/codeEditor.vue'
export default defineComponent({
    setup() {
        let state=reactive({
            code:'<icons name="文件名" className="样式名"></icons>'
        });
        return {
            state
        }
    },
    components:{codeEditor}
})
</script>
<style scoped lang="scss">
    .svg-box{
        text-align: center;
        .title{
            font-size: 40px;
            margin: 20px;
        }
        .hint{
            width: 40vw;
            margin:10px auto;
            text-align: left;
        }
        .hint-title{
            font-size: 24px;
            margin: 20px;
        }
        .code-editor{
            height: 50px;
            overflow: hidden;
        }
        div{
            margin-top: 10px;
        }
    }
    .icon-svg{
        width: 8rem;
        height: 8rem;
    }
  
</style>