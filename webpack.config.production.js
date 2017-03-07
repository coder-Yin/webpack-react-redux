var path = require('path');
var webpack = require('webpack');
var SpritesmithPlugin = require('webpack-spritesmith');
var fs = require('fs');
var ip = require('ip');
const localIp = ip.address();

// 引入css 单独打包插件
let ExtractTextPlugin = require("extract-text-webpack-plugin");
// 设置生成css 的路径和文件名，会自动将对应entry入口js文件中引入的CSS抽出成单独的文件
let packCSS = new ExtractTextPlugin('[name]/bundle.css', {allChunks: true} );
let packSASS = new ExtractTextPlugin('[name]/bundle.css', {allChunks: true} );


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
      new webpack.HotModuleReplacementPlugin(),
      packCSS,
      packSASS
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
  // devtool: 'cheap-module-eval-source-map',
  entry: getEntries(getPages()),
  output: {
      path: path.join(__dirname, "dist/"),
      filename: "[name]/bundle.js",
      // chunkFilename: "app/[name]/bundle[id][hash:5].js",
      publicPath: "http://"+localIp+":3000/",
      pathinfo: true
  },
  plugins: getPlugins(),
  resolve: {
    modulesDirectories: ["node_modules"]
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
        loader: packCSS.extract('css'),
        include: __dirname
      },
      {
        test: /\.scss$/,
        loader: packSASS.extract(['css', 'px2rem', 'sass?outputStyle=compact'])
      },
      {
        test: /\.scss\?p6$/,
        loader: packSASS.extract(['css', 'px2rem?remUnit=37.5', 'sass?outputStyle=compact'])
      },
      {
        test: /\.scss\?p5$/,
        loader: packSASS.extract(['css', 'px2rem?remUnit=32', 'sass?outputStyle=compact'])
      },
      {
        test: /\.png$/,
        loaders: [
          'file?name=i/[hash].[ext]'
        ]
      }
    ]
  }
}
