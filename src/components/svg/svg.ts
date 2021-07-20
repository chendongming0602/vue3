// import Vue from 'vue';
// Vue.component("svg-icon", SvgIcon);
const req = require.context("@/assets/icons", false, /\.svg$/);
const requireAll = (requireContext:any) => requireContext.keys().map(requireContext);
requireAll(req);
/*
    第一步
    npm install svg-sprite-loader svgo svgo-loader --save-dev
    
    第二步 在config.js中添加
    const path = require("path");
    function resolve(dir) {
    return path.join(__dirname, dir);
    }

    module.exports = {
    chainWebpack: config => {
        // 清除svg默认配置对./src/icons文件夹的处理
        config.module
        .rule("svg")
        .exclude.add(resolve("src/assets/icons")) // icons存放地（svg放的地方）
        .end()
        
        // 添加新的rule处理./src/icons文件夹的svg文件
        config.module
        .rule("svg-sprite")
        .test(/\.svg$/)
        .include
        .add(resolve("src/assets/icons"))
        .end()
        .use("svg-sprite-loader")
        .loader("svg-sprite-loader")
        .options({
            symbolId: "icon-[name]",
            include: ["src/assets/icons"]
        })
        .end()
        .before("svg-sprite-loader")
        .use("svgo-loader")
        .loader("svgo-loader")
        .options({
            plugins: [
            {removeAttrs: {attrs: "path:fill"}}
            ]
        })
        .end()
        }
    }

    第三步 将components/svg/index.js 引入main.js中

    第四步 
    <svg-icon name="paizhao"></svg-icon>  name为assets/icons中的某个图标文件名字

    第五步
    要想改颜色，需要找到对应的svg文件将所有的fill表示颜色的删除，然后就可通过class的color更改

    提示：
    注意各个文件的路径，涉及文件都是component/svg文件夹
    具体文档：https://zhuanlan.zhihu.com/p/158743768
*/ 