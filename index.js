const http = require('https');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const openPage = url => {
    console.log('Starting');
    const resPromise = new Promise((resolve, reject) => {
        var result = http.get(url, (res) => {
            console.log(res.statusCode);
            if (res.statusCode == 200) {
                // console.log(res.headers);
                var allData, count = 0;
                res.on('data', (data) =>{allData += data; count += 1});
                res.on('end', () => {
                    console.log(allData);
                    const dom = new JSDOM(allData);
                    resolve(dom);
                    // console.log(dom.window.document.body.querySelectorAll('input[type=submit]')[0].getAttribute('value'));
                    // console.log(dom.window.document.body.querySelectorAll('input[type=submit]')[1].getAttribute('value'));
                });
            } else {
                reject({
                    statusCode: res.statusCode,
                });
            }
            
        });
        
    });
 
    return resPromise;
}

const test = async () => {
    //const futureData = openPage('https://google.com');
    // futureData
    //    .then(dom => console.log(dom.window.document.body.children.length))
    //    .catch(err => console.dir(err));
    try {
        const dom = await openPage('https://www.google.com');
        console.log(dom.window.document.body.querySelectorAll('input[type=submit]')[0].getAttribute('value'));
    } catch (err) {
        console.log('Error!');
        console.dir(err);
    }
}

test();