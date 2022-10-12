const https = require("https");

// Task 1
// https.get('https://mitimes.com/careers/apply/secret', (resp) => {

//     let data = '';

//     resp.on('data', (chunk) => {
//         data += chunk;
//     });

//     resp.on('end',() => {
//         console.log(JSON.parse(data));
//     })
// });
// The answer is 'nice-to-see-you-here-talk-soon'

// Task 2
var postData = JSON.stringify({
    name:'JeremyQin',
    email:'ausjeremyqin@gmail.com',
    job_title:'web_developer',
    final_attempt:true
})

var options = {
    protocol:'https:',
    hostname:'mitimes.com',
    path:'/careers/apply',
    port: 443,
    method:'POST',
    headers:{
        'Content-Type': 'application/json',
        'Content-Length': postData.length,
        'Authorization':'nice-to-see-you-here-talk-soon',
    }
}

var req = https.request(options,resp => {
    // print status code
    console.log('Status: ' + resp.statusCode);

    // console.log('Headers: ' + JSON.stringify(resp.headers));
    resp.setEncoding('utf8');

    let body = '';

    // print body:
    resp.on('data',  (chunk)=> {
        body += chunk;
    });

    //data transfer over
    resp.on('end', () => {
        console.log('Body: ', JSON.parse(body));
    });

    resp.on('error', (e) => {
        console.log('problem with request: ' + e.message);
    });
});

// write request body
req.write(postData);
req.end();