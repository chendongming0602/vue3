<template>
    <div>
        <div
            ref="myEchart"
            style="width:800px;height:700px;margin:20px auto"
            id="main"
        ></div>
        <div style="text-align:center;padding:10px">
            详细说明/文档：<a
                href="https://echarts.apache.org/examples/zh/index.html#chart-type-bar"
                target="_blank"
                rel="noopener noreferrer"
                >点击进入</a
            >
        </div>
        <div style="text-align:center;padding:10px"><a target="_blank" href="https://www.makeapie.com/explore.html#sort=rank~timeframe=all~author=all">更多示例</a></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import * as echarts from "echarts";
export default defineComponent({
    setup() {
        let state = reactive({});
        let option = {
            xAxis: {
                type: "category",
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: "bar",
                    showBackground: true,
                    backgroundStyle: {
                        color: "rgba(180, 180, 180, 0.2)",
                    },
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
