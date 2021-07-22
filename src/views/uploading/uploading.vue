<template>
    <div>
        <UPLOADING
            ref="parent"
            title="模拟自定义上传"
            :count="0"
            :value="{}"
        ></UPLOADING>

        <el-button
            style="width:200px;margin:10px auto;display: block;"
            class="theme-all"
            @click="up"
            >确认上传</el-button
        >


        <!-- 说明 -->
        <div class="up-load">
            <hr>
            <div class="up-title">使用说明</div>
            <div class="up-one">1、导入上传组件，并挂载上传组件：<codeEditor value='import UPLOADING from "@/components/uploading/uploading.vue"; 
components: { UPLOADING },
            '></codeEditor></div>
            <div class="up-one">2、导入上传组件，并挂载上传组件：<codeEditor value=' <UPLOADING ref="parent"title="模拟自定义上传":count="0":value="{}"></UPLOADING>"; '></codeEditor></div>
            <div class="property">
               <div>属性说明</div>
                 <vxe-table :align="allAlign" :data="call" >
                    <vxe-table-column field="name" title="属性名" ></vxe-table-column>
                    <vxe-table-column field="class" title="类型" ></vxe-table-column>
                    <vxe-table-column field="default" title="默认值" ></vxe-table-column>
                    <vxe-table-column field="effect" title="作用"></vxe-table-column>
                    <vxe-table-column field="detail" title="详细"></vxe-table-column>
                </vxe-table>
            </div>
            <div class="up-one">3、通过调用子组件：parent方法触发<codeEditor value=' let { child, isEmpty, stop } = parent.value.parent(); '></codeEditor></div>
             <div class="property">
                 <div>回调说明</div>
                 <vxe-table :align="allAlign" :data="property" >
                    <vxe-table-column field="name" title="回调名字" ></vxe-table-column>
                    <vxe-table-column field="class" title="类型" ></vxe-table-column>
                    <vxe-table-column field="effect" title="作用"></vxe-table-column>
                    <vxe-table-column field="detail" title="详细"></vxe-table-column>
                </vxe-table>
             </div>
            <div style="text-align: center; width:100%"><a   href="https://element-plus.gitee.io/#/zh-CN/component/upload" target="_blank" rel="noopener noreferrer">更多上传示例/文档</a></div>
             <div style="color:red;text-align: center;">上传的axios已封装在组件@/components/uploading/uploading.vue中，可在里面搜：upApi 即可</div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import UPLOADING from "@/components/uploading/uploading.vue";
import codeEditor from '@/components/codeEditor/codeEditor.vue';
import { ElLoading ,ElMessage } from "element-plus";
export default defineComponent({
    setup() {
        const parent = ref();
        
        const up = async () => {
            let { child, isEmpty, stop } = parent.value.parent();
            if(!isEmpty) return ElMessage.error('请选择需要上传的图片');
            const loading = ElLoading.service({
                lock: true,
                text: "上传中....",
                spinner: "el-icon-loading",
                background: "rgba(0, 0, 0, 0.7)",
            });
            // 实现上传
            await child();
            //上传完成
            stop();
            loading.close();
            
        };

        
        const call=ref([
            {
                name:"title",
                class:"String",
                default:"上传图片",
                effect:"顶部标题",
                detail:"非必填项"
            },
            {
                name:"count",
                class:"Number",
                default:"0",
                effect:"可一次性同时上传几张",
                detail:"如果为0，张数无限制。非必填项"
            },
            {
                name:"value",
                class:"Object",
                default:"{}",
                effect:"另外传给后端的参数",
                detail:"非必填项"
            }
        ]);
        const property=ref([
           
            {
                name:"child",
                class:"Function",
                effect:"触发axios上传接口",
                detail:"通过调用child()实现上传接口的调用"
            },
             {
                name:"isEmpty",
                class:"Boolean",
                effect:"目前是否选择了图片",
                detail:"返回false代表用户没有选择图片"
            },
             {
                name:"stop",
                class:"Function",
                effect:"上传完成需要执行的函数",
                detail:"代表上传已经成功"
            }
        ]);
        return {
            up,
            parent,
            call,
            property
        };
    },
    components: { UPLOADING ,codeEditor},
});
</script>
<style lang="scss" scoped>
.up-load{
    width: 50vw;
    margin: 50px auto;
    >div{
        margin-top: 20px;
    }
    .up-title{
        text-align: center;
        font-size: 30px;
        font-weight: 600;
    }
    .up-one{
        height: 70px;
        overflow: hidden;
    }
    .property{
        padding: 0 50px;
        text-align: center;
        >div{
            padding: 10px;
            font-weight: 600;
        }
    }
}
</style>
