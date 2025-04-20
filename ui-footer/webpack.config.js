const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const DotenvFlow = require('dotenv-flow-webpack');
const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sharedModules = require('./sharedModules');

module.exports = (env) => {
	return {
		entry: './src/index',
		cache: false,
		mode: 'development',
		devtool: 'source-map',
		optimization: {
			minimize: false,
		},
		output: {
			publicPath: 'http://localhost:9003/',
		},
		resolve: {
			extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
			modules: ['node_modules', './src'],
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		},
		devServer: {
			port: 8080,
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader: require.resolve('babel-loader'),
					options: {
						presets: [
							require.resolve('@babel/preset-react'),
							require.resolve('@babel/preset-typescript'),
						],
					},
				},
				{
					test: /\.(css|s[ac]ss)$/i,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
				{
					test: /\.(png|woff|woff2|eot|ttf|svg)$/,
					type: 'asset/inline',
				},
			],
		},
		plugins: [
			new ModuleFederationPlugin({
				name: 'footerUi',
				library: { type: 'var', name: 'footerUi' },
				filename: 'remoteEntry.js',
				remotes: {
					common: 'designSystem',
				},
				exposes: {
					'./footerUi': './src/App',
				},
				shared: sharedModules,
			}),
		],
	};
};
