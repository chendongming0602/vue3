<template>
    <div style="padding:20px">
        <vxe-table
            border
            highlight-hover-row
            resizable
            height="400"
            :tooltip-config="{}"
            :menu-config="{}"
            :data="tableData"
            @header-cell-click="headerCellClickEvent"
            @header-cell-dblclick="headerCellDblclickEvent"
            @header-cell-menu="headerCellContextMenuEvent"
            @cell-click="cellClickEvent"
            @cell-dblclick="cellDBLClickEvent"
            @cell-mouseenter="cellMouseenterEvent"
            @cell-mouseleave="cellMouseleaveEvent"
            @cell-menu="cellContextMenuEvent"
            @footer-cell-click="footerCellClickEvent"
            @footer-cell-dblclick="footerCellDblclickEvent"
            @footer-cell-menu="footerCellContextMenuEvent"
            @scroll="scrollEvent"
        >
            <vxe-column
                type="seq"
                title="序号"
                width="60"
                fixed="left"
            ></vxe-column>
            <vxe-column field="name" title="Name" width="300"></vxe-column>
            <vxe-colgroup title="Role" width="300">
                <vxe-column field="role" title="Role" width="300"></vxe-column>
            </vxe-colgroup>
            <vxe-column field="sex" title="Sex" width="300"></vxe-column>
            <vxe-column field="date" title="Date" width="300"></vxe-column>
            <vxe-column
                field="address"
                title="Address"
                fixed="right"
                width="300"
            ></vxe-column>
        </vxe-table>
        <div style="text-align:center;padding:20px;color:red">请按f12查看打印</div>
        <div style="text-align:center;padding:20px">详细说明：<a href="https://xuliangzhan_admin.gitee.io/vxe-table/v4/table/advanced/event" target="_blank" rel="noopener noreferrer">点击进入</a> </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { VxeTableEvents } from "vxe-table";

export default defineComponent({
    setup() {
        const tableData = ref([
            {
                id: 10001,
                name: "Test1",
                role: "Develop",
                sex: "Man",
                age: 28,
                address: "点个star",
            },
            {
                id: 10002,
                name: "Test2",
                role: "Test",
                sex: "Women",
                age: 22,
                address: "需要你的star",
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
                age: 23,
                address: "简洁好用",
            },
            {
                id: 10005,
                name: "Test5",
                role: "Develop",
                sex: "Women",
                age: 30,
                address: "值得分享",
            },
            {
                id: 10006,
                name: "Test6",
                role: "Designer",
                sex: "Women",
                age: 21,
                address: "关注了",
            },
            {
                id: 10007,
                name: "Test7",
                role: "Test",
                sex: "Man",
                age: 29,
                address: "上star",
            },
            {
                id: 10008,
                name: "Test8",
                role: "Develop",
                sex: "Man",
                age: 35,
                address: "必须star",
            },
        ]);

        const headerCellClickEvent: VxeTableEvents.HeaderCellClick = ({
            column,
        }) => {
            console.log(`表头单元格点击${column.title}`);
        };

        const headerCellDblclickEvent: VxeTableEvents.HeaderCellDblclick = ({
            column,
        }) => {
            console.log(`表头单元格双击${column.title}`);
        };

        const headerCellContextMenuEvent: VxeTableEvents.HeaderCellMenu = ({
            column,
        }) => {
            console.log(`表头单元格右键 ${column.title}`);
        };

        const cellClickEvent: VxeTableEvents.CellClick = ({ column }) => {
            console.log(`单元格点击${column.title}`);
        };

        const cellDBLClickEvent: VxeTableEvents.CellDblclick = ({ column }) => {
            console.log(`单元格双击${column.title}`);
        };

        const cellMouseenterEvent: VxeTableEvents.CellMouseenter = ({
            column,
        }) => {
            console.log(`单元格鼠标进入${column.title}`);
        };

        const cellMouseleaveEvent: VxeTableEvents.CellMouseleave = ({
            column,
        }) => {
            console.log(`单元格鼠标离开${column.title}`);
        };

        const cellContextMenuEvent: VxeTableEvents.CellMenu = ({ row }) => {
            console.log(`单元格右键行 ${row.name}`);
        };

        const footerCellClickEvent: VxeTableEvents.FooterCellClick = ({
            column,
        }) => {
            console.log(`表尾单元格点击${column.title}`);
        };

        const footerCellDblclickEvent: VxeTableEvents.FooterCellDblclick = ({
            column,
        }) => {
            console.log(`表尾单元格双击${column.title}`);
        };

        const footerCellContextMenuEvent: VxeTableEvents.FooterCellMenu = ({
            column,
        }) => {
            console.log(`表尾单元格右键 ${column.title}`);
        };

        const scrollEvent: VxeTableEvents.Scroll = ({
            scrollTop,
            scrollLeft,
        }) => {
            console.log(
                `滚动事件scrollTop=${scrollTop} scrollLeft=${scrollLeft}`
            );
        };

        return {
            tableData,
            headerCellClickEvent,
            headerCellDblclickEvent,
            headerCellContextMenuEvent,
            cellClickEvent,
            cellDBLClickEvent,
            cellMouseenterEvent,
            cellMouseleaveEvent,
            cellContextMenuEvent,
            footerCellClickEvent,
            footerCellDblclickEvent,
            footerCellContextMenuEvent,
            scrollEvent,
        };
    },
});
</script>
<style lang="scss" scoped></style>
