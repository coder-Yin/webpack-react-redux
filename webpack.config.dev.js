var path = require('path');
var webpack = require('webpack');
var SpritesmithPlugin = require('webpack-spritesmith');
var fs = require('fs');
var ip = require('ip');
var autoprefixer = require("autoprefixer");
const localIp = ip.address();

let ExtractTextPlugin = require("extract-text-webpack-plugin");
// 设置生成css 的路径和文件名，会自动将对应entry入口js文件中引入的CSS抽出成单独的文件
let packCSS = new ExtractTextPlugin('[name]/bundle.css', {allChunks: true} );

function getPages() {
  let pages = ["common"];
  let directories = fs.readdirSync(__dirname+"/src/app");
  for (let dir of directories) {
      if (!dir.startsWith('.')) {
          pages.push(dir);
      }
  }
  return pages;
}

function getEntries(pages) {
    let entries = {};
    for (let page of pages) {
        let key = page === "common" ? page : `app/${page}`;
        let value = page === "common" ? './src/common/index.js' : `./src/${key}/index.js`;
        entries[key] = value;
    }
    return entries;
}

function getPlugins() {
    let spritesmithPlugins = [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ];
    let apps = fs.readdirSync("./src/app/");
    for (let app of apps) {
        let value = `src/app/${app}/icons`;
        let sourcePath = path.join(__dirname,value);
        if (fs.existsSync(sourcePath)) {
          let targetPath =  path.join(__dirname,`src/app/${app}`);
          let obj = new SpritesmithPlugin({
              src: {
                  cwd: sourcePath,
                  glob: '*.png'
              },
              target: {
                  image: path.resolve(targetPath, 'spritesmith/sprite.png'),
                  css: path.resolve(targetPath, 'spritesmith/sprite.scss')
              },
              // 样式文件中调用雪碧图地址写法
              apiOptions: {
                  cssImageRef: "../../spritesmith/sprite.png"
              },
              spritesmithOptions: {
                  padding: 10,
                  algorithm: 'top-down'
              }
          });
          spritesmithPlugins.push(obj);

        }
    }
    return spritesmithPlugins;
}

module.exports = {
  devtool: 'source-map',
  entry: getEntries(getPages()),
  output: {
      path: path.join(__dirname, "dist/mc"),
      filename: "[name]/bundle.js",
      // chunkFilename: "app/[name]/bundle[id][hash:5].js",
      publicPath: "http://"+localIp+":3000/mc",
      pathinfo: true
  },
  plugins: getPlugins(),
  resolve: {
    // modulesDirectories: ["node_modules", "spritesmith"]
    root: ["src/lib", "node_modules"],
    modulesDirectories: ["node_modules", "src/components", "src/lib"],
    extensions: ['', '.js', '.scss']
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src/styles")]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.json$/,
        loaders: [ 'json' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?autoprefixer'],
        include: __dirname
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'px2rem', 'sass']
      },
      {
        test: /\.scss\?p6$/,
        loaders: ['style?sourceMap', 'css?modules&importLoaders=1&localIdentName=[path]_[name]__[local]___[hash:base64:5]&sourceMap', 'px2rem?remUnit=75', 'sass?sourceMap']
      },
      {
        test: /\.scss\?p6_nomodule$/,
        loaders: ['style', 'css', 'px2rem?remUnit=75', 'sass']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loaders: ['file?name=i/[hash].[ext]&limit=2048']
      },
      {
          test: /\.html$/,
          loader: "html?minimize=false"
      }
    ]
  },
  postcss: function() {
    return [autoprefixer];
  }
}
