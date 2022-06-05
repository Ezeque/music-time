const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: '/music-time',
    transpileDependencies: true,
    publicPath: process.env.NODE_ENV === 'production' ? 'music-time' : '/'
})