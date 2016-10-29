/**
 * Created by qingyun2 on 16/10/24.
 */
var http = require('http');
var url = require('url');
var qs = require('querystring');

http.creatServer(function (req,res) {

    var query = url.parse(req.url).query;

    var queryObj = qs.parse(query);

    var resultData = '';

    http.get(queryObj.myUrl,function (request) {
        request.setEnconding('utf8');
        request.on('data',function (result) {
            resultData += result;
        });
        request.on('end',function () {
            var str = queryObj.callback + '('+JSON.stringify(resultData)+')';
            res.end(str);
        });
    }).on('error',function (e) {
        res.end(e.message)
    })



}).listen(5555);
console.log('succeed');