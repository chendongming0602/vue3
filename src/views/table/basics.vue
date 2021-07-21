<template>
    <div style="padding:20px">
        <vxe-toolbar>
            <template #buttons>
                <vxe-button @click="allAlign = 'left'" class="theme-all">居左</vxe-button>
                <vxe-button @click="allAlign = 'center'" class="theme-all">居中</vxe-button>
                <vxe-button @click="allAlign = 'right'" class="theme-all">居右</vxe-button>
            </template>
        </vxe-toolbar>

        <vxe-table :align="allAlign" :data="tableData1" >
            <vxe-table-column type="seq" width="60" ></vxe-table-column>
            <vxe-table-column field="name" title="Name" ></vxe-table-column>
            <vxe-table-column field="sex" title="Sex"></vxe-table-column>
            <vxe-table-column field="age" title="Age"></vxe-table-column>
        </vxe-table>
        <div style="text-align:center;padding:20px">详细说明：<a href="https://xuliangzhan_admin.gitee.io/vxe-table/v4/table/base/basic" target="_blank" rel="noopener noreferrer">点击进入</a> </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    setup() {
        const allAlign = ref(null);

        const tableData1 = ref([
            {
                id: 10001,
                name: "Test1",
                role: "Develop",
                sex: "Man",
                age: 28,
                address: "vxe-table",
            },
            {
                id: 10002,
                name: "Test2",
                role: "Test",
                sex: "Women",
                age: 22,
                address: "Guangzhou",
            },
            {
                id: 10003,
                name: "Test3",
                role: "PM",
                sex: "Man",
                age: 32,
                address: "Shanghai",
            },
            {
                id: 10004,
                name: "Test4",
                role: "Designer",
                sex: "Women",
                age: 24,
                address: "Shanghai",
            },
        ]);

        return {
            allAlign,
            tableData1,
        };
    },
});
</script>
<style lang="scss" scoped></style>
