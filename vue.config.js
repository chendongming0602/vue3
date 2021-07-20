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
