/**
 * Created by qingyun on 16/10/8.
 */
// http对象,通过他可以创建服务器,设置端口号
var http = require('http');
// url对象,解析url中的内容
var url = require('url');
// 查询参数对象,可以处理查询参数
var qs = require('querystring');


http.createServer(function (req, res) {


    // 对请求对象的url解析,拿到?后面的查询参数字符串
    var query = url.parse(req.url).query;

    // 把查询参数字符串转化成对象,方便取值
    var queryObj = qs.parse(query);

    console.log(queryObj.myUrl);
    console.log(queryObj.callback);

    var resultData='';
    http.get(queryObj.myUrl, function (request) {
        //  设置编码格式
        request.setEncoding('utf8');
        // 监测到有数据返回,就会回调第二个参数,result是返回的数据
        request.on('data', function (result) {
            console.info();
            console.log(result);
            console.info();
            resultData += result;
        });

        request.on('end', function () {
            //    需要把所有数据包括到回调函数中,返回给前端

            var str = queryObj.callback + "(" + JSON.stringify(resultData) + ")";
            // 请求结束,响应数据(把数据发送给请求者)
            res.end(str);
        });

    }).on('error',function (e) {
        //请求数据失败,将错误信息返回
        res.end(e.message)


    })


}).listen(5555);
console.log('succeed');