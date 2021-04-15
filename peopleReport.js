/**
 * people report keywords: 戴口罩
 */

const request = require('request');
const { mysql } = require('./mysql');
const dateFormat = require('dateformat');

  let defaultOptions = {
    'method': 'POST',
    'url': 'http://search.people.cn/api-search/elasticSearch/search',
    'headers': {
      'Proxy-Connection': 'keep-alive',
      'Pragma': 'no-cache',
      'Cache-Control': 'no-cache',
      'Accept': 'application/json, text/plain, */*',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
      'Content-Type': 'application/json;charset=UTF-8',
      'Origin': 'http://search.people.cn',
      'Referer': 'http://search.people.cn/s/?keyword=%E6%88%B4%E5%8F%A3%E7%BD%A9&st=0&_=1611040261120',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,fr;q=0.7,zh-TW;q=0.6',
      'Cookie': '__jsluid_h=fdde012a758e5582f42a9393ad67f3a8; sso_c=0; sfr=1'
    },
    body: '{"key":"戴口罩","page":126,"limit":100,"hasTitle":true,"hasContent":true,"isFuzzy":true,"type":0,"sortType":2,"startTime":0,"endTime":0}'
  
  };
const requestNews = function () {
    var options = JSON.parse(defaultOptions.body);
    var currentPage = options.page
    request(defaultOptions, function (error, response) {
        if (error) throw new Error(error);
        const data = JSON.parse(response.body);    
        if (data.code == 0) {
            console.log(`got news from page ${currentPage} limit 10 success.`)
            const records = data.data.records;

            records.forEach(record => {
                record.title = record.sourcetitle || record.title
                const insertRecord = [
                    record.id,
                    record.title,
                    record.editor,
                    record.subtitle,
                    record.originUrl,
                    record.url,
                    dateFormat(record.inputTime, 'yyyy-mm-dd HH:MM:ss'),
                    record.originalName,
                    'people report'
                ]
                mysql.query('select * from news where id = ? or title = ?', [record.id, record.title], function (err, rows, fields) {
                    if (err) throw err
                    if (rows.length  < 1) {
                        mysql.query('insert into news (id,title,editor,subtitle,origin_url,url,input_time,original_name,site) values (?,?,?,?,?,?,?,?,?)', insertRecord, function (err, rows, fields) {
                            if (err) throw err
                            console.log(`save news ${record.id} success`)
                        })
                    } else {
                        console.log(`news ${record.title} already exsits.`)
                    }
                })
            });

            options.page++
            defaultOptions.body = JSON.stringify(options)
            setTimeout(function () {
                requestNews()
            }, 1000)
        }
    });
}

mysql.connect()
requestNews()
