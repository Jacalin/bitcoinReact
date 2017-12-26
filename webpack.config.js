var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");

var config = {
  entry: SRC_DIR + "/app/index.js", //root file
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  module:{
    loaders:[
      {
        test:/\.js?/, // which files should you look at
        include: SRC_DIR,
        loader:"babel-loader",
        query:{
          presets:["react", "es2015", "stage-2"]
        }
      }

    ]
  }

}

module.exports = config;
