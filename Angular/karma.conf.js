const path = require("path");
const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
	config.set({  	
		frameworks: ['jasmine-ajax', 'jasmine'],

		files: [
			'app/tests/index.js'
		],

		preprocessors: {
			'app/tests/index.js': 'webpack'
		},

		webpack: {
			isparta: {
				embedSource: true,
				noAutoWrap: true,
				babel: webpackConfig.module.loaders.filter(loader => {
					return loader.loader == "babel";
				}).pop().query
			},

			module: {
				preLoaders: [{
					test: /\.js$/,
					exclude: [
						path.resolve('app/tests/'),
						path.resolve('node_modules/')
					],
					loader: 'babel'
				}, {
					test: /\.js$/,
					include: path.resolve('app/'),
					exclude: /(tests)/,
					loader: 'isparta'
				}],

				loaders: webpackConfig.module.loaders								//Same trick here - I think's it's more pretty than copy-paste or 2-3-100500 webpack configs
			}
		  
		},

		reporters: [ 'progress', 'coverage' ],

		coverageReporter: {
			type: 'text'
		},

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		plugins: [
			'karma-chrome-launcher',
			'karma-coverage',
			'karma-jasmine',
			'karma-jasmine-ajax',
			'karma-webpack',
		]
	})
}
