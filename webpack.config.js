const isProduction = process.env.NODE_ENV === "production";

const config = {
	mode: isProduction ? "production" : "development",
	entry: {
		app: "./app/common/scripts/app.js"
	},
	output: {
		filename: "[name].min.js"
	},
	devtool: isProduction ? false : "source-map",
	module: {
		rules: [{
				test: /\.js$/,//files to transform
				exclude: /(node_modules)/,
				use: {//what to use for transformation
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			}
		]
	}
};

module.exports = config;