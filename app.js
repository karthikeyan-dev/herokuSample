const request = require('request')
const express = require('express')
const app = express();
const PORT = 3000;

var options = {
    url: 'https://gateway-lon.watsonplatform.net/discovery/api/v1/environments/system/collections/news-en/query?version=2018-12-03&deduplicate=false&highlight=true&passages=true&passages.count=5&natural_language_query=weather',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Basic YXBpa2V5Oncxclk0aFdaZUZvZUgzLVc4TXBrUV9ManVqSGJsLVh3OHBlRW9BU0lLVzNI'
    }
};

// function callback(error, response, body) {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     //console.log(response);
//     console.log(body);
// }
// request(options, callback);

app.get('/app', function (req, res) {
    request(options, (error, response, body) => {
        if(error){
            res.send(error);
            return;
        }
        res.send(body);
    });
})

app.listen(PORT, () => console.log(`Express sample app listening on port ${PORT}!`))
