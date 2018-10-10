let express = require('express');
let path = require('path');
let bodyParser = require("body-parser");
let app = express();
let webpack = require("webpack");
let webpackHotMiddleware = require("webpack-hot-middleware");
let webpackDevMiddleware = require("webpack-dev-middleware");
let config = require('../webpack.config');

//静态文件配置
app.use('/wwwroot', express.static(path.join(__dirname, 'wwwroot')));
app.use(bodyParser.json());

let compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
    quiet: false,
    noInfo: false,
    publicPath: '/wwwroot/',
    stats: { colors: true }
}))

app.use(webpackHotMiddleware(compiler))

// // 对所有(/)URL或路由返回index.html 
// app.get('/*', function (req, res) {
//     res.sendFile(path.resolve(__dirname, 'dist') + '/index.html');
// });

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
});
