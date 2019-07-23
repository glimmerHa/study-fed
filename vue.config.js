'use strict'
const path = require('path');
const _ = require('lodash');

const port = process.env.port || process.env.npm_config_port || 8121 // dev port

module.exports = {
    baseUrl:'/',
    devServer: {
        port:port,
        open:true,
        overlay: {
            warnings: false,
            errors: true
        },
    },
    configureWebpack: {
        // 设置默认路径映射
        resolve: {
            alias: {
                // 相对位置：模块间共用的组件
                '~': path.join(__dirname, 'src')
            }
        },
    }
}