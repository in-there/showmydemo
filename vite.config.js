export  default {
    // 设置根目录
    root: './src',
    base: './',
    server: {
        port: 3000,
        open: true,
        cors: true,
    },
    esbuild: {
        target: 'es2015',
    },

}