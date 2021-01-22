const webpack = require("webpack");
const path = require('path'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
const Dotenv = require('dotenv-webpack');

module.exports = { 
    entry: './src/index.js', 
    output: { 
        filename: 'bundle.js', 
        path: path.resolve(__dirname, './public'),
		publicPath: './'
	},
	module: {
		rules: [
		{
			test: /\.(sa|sc|c)ss$/,
			use: [
			/* devMode ? 'style-loader' : */
			MiniCssExtractPlugin.loader,
				'css-loader',
				'sass-loader',
			],
		},
		/*
	    {
	        test: /\.js$/,
	        exclude: /node_modules/,
	        enforce: 'post',
	        use: { 
	            loader: WebpackObfuscator.loader, 
	            options: {
	                rotateStringArray: true
	            }
	        }
	    },
		*/
		{
			test: /\.js|\.jsx$/,
			use: 'babel-loader',
			exclude: /node_modules/,
		},
		{
			test: /\.(png|jpe?g|gif|svg|ico)$/,
			use: [
			{
				loader: 'url-loader',
				options: {
					useRelativePath: true,
					limit: 8 * 1024,
					publicPath: './'
				}
			}
			]
		},
		{
			test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
			use: {
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
				},
			},
		},
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),
		new Dotenv()
	],
	devServer: {
		contentBase: path.resolve(__dirname, './public'),
		historyApiFallback: true,
		port: 8080
	},
    //mode : 'production' 
	mode : 'development'
};