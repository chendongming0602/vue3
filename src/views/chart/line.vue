<template>
    <div>
        <div
            ref="myEchart"
            style="width:800px;height:700px;margin:20px auto"
            id="main"
        ></div>
        <div style="text-align:center;padding:10px">
            详细说明/文档：<a
                href="https://echarts.apache.org/examples/zh/editor.html?c=line-stack"
                target="_blank"
                rel="noopener noreferrer"
                >点击进入</a
            >
           
        </div>
        <div style="text-align:center;padding:10px"><a target="_blank" href="https://www.makeapie.com/explore.html#sort=rank~timeframe=all~author=all">更多示例</a></div>
    </div>
</template>
<script lang="ts">
import { defineComponent ,ref,onMounted} from "vue";
import * as echarts from "echarts";
export default defineComponent({
    setup() {
        let option = {
            title: {
                text: "折线图堆叠",
            },
            tooltip: {
                trigger: "axis",
            },
            legend: {
                data: [
                    "邮件营销",
                    "联盟广告",
                    "视频广告",
                    "直接访问",
                    "搜索引擎",
                ],
            },
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true,
            },
            toolbox: {
                feature: {
                    saveAsImage: {},
                },
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                    name: "邮件营销",
                    type: "line",
                    stack: "总量",
                    data: [120, 132, 101, 134, 90, 230, 210],
                },
                {
                    name: "联盟广告",
                    type: "line",
                    stack: "总量",
                    data: [220, 182, 191, 234, 290, 330, 310],
                },
                {
                    name: "视频广告",
                    type: "line",
                    stack: "总量",
                    data: [150, 232, 201, 154, 190, 330, 410],
                },
                {
                    name: "直接访问",
                    type: "line",
                    stack: "总量",
                    data: [320, 332, 301, 334, 390, 330, 320],
                },
                {
                    name: "搜索引擎",
                    type: "line",
                    stack: "总量",
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                },
            ],
        };
         let myEchart = ref();
        onMounted(() => {
            let myChart = echarts.init(myEchart.value);
            myChart.setOption(option);
        });
        return {
            myEchart,
        };
    },
});
</script>
