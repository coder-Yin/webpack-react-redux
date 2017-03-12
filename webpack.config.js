let webpackDevConfig = require('./webpack.config.dev.js');
let webpackProductionConfig = require('./webpack.config.production.js');
let env = 'dev';
let webpackConfig = env === 'dev' ? webpackDevConfig : webpackProductionConfig;
module.exports = webpackConfig;
