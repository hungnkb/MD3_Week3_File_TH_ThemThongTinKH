const http = require('http');
const fs = require('fs');
const qs = require('qs');

const server = http.createServer((req, res) => {
    if (req.method == "GET") {
        fs.readFile('./templates/create.html', 'utf-8', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        })
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            let name = qs.parse(data).name;
            fs.writeFile('./data/data.txt', name, err => {
                if(err) {
                    console.log('error');
                    return res.end();
                }
                console.log(data)
                return res.end(data)
            }) 
        })
        req.on('error', () => {
            console.log('error')
        })
    }
})
server.listen(8080, () => {
    console.log('Server is running localhost:8080');
})