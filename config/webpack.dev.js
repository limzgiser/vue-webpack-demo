const base = require('./webpack.base.js')
const merge = require('webpack-merge')
module.exports = merge(base, {
    mode: 'development', //production   development
    devServer: {
        port: 4201,
        open: true,

    },
})