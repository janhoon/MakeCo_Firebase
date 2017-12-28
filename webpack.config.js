module.exports = {
	entry: './app/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		modules: [
			__dirname,
			'node_modules',
			'app/components'
		],
		alias: {
			reducers: 'app/reducers/reducers.jsx',
			actions: 'app/actions/actions.jsx',
			configureStore: 'app/store/configureStore.jsx'
		},
		extensions: ['.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	}
};
