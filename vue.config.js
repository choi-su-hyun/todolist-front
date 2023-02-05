const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	devServer: {
		client: {
			overlay: false,
		},
		proxy: {
			'/api': {
				target: 'http://localhost:3000/api',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '',
				},
			},
		},
	},
	outputDir: '../todo-server/todo-server/public',
});
