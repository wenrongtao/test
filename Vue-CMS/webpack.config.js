var path=require('path')

//导入在内存中生成HTML页面的插件
//所以HTML页面不用再引入script文件
var htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports={
	entry:path.join(__dirname,'./src/main.js'),//入口，表示webpack打包哪个文件
	output:{//输出文件相关配置
		path:path.join(__dirname,'./dist'),
		filename:'bundle.js'
	},
	plugins:[
	   new htmlWebpackPlugin({
		template:path.join(__dirname,'./src/index.html'),//会根据指定页面路径生成内存中的页面
		filename:'index.html'//指定生成页面的名称
	   }),
	   new VueLoaderPlugin()
	],
	module:{
	    rules:[
		    {test:/\.css$/,use:['style-loader','css-loader']},
		    {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
		    {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=59701&name=[hash:8]-[name].[ext]'},
		    {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
		    /*{test:/\.js$/,use:'babel-loader',exclude:/node_modules/}*/
		    {test:/\.vue$/,use:'vue-loader'}
		]
	}
	/*resolve:{
		alias:{
			"vue$":"vue/dist/vue.js"
		}
	}*/
}	
	

