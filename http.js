const http = require('node:http');
const url = require('node:url');

http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);
    if (req.method === 'POST') {
        if (pathname === '/api/post') {
            let data = '';
            req.on('data', (chunk) => {
                data += chunk
                console.log('d>>', data)
            })
            req.on('end', () => {
                res.setHeader('Content-Type', 'application/json;charset=utf-8')
                res.statusCode = 200
                res.end(data)
            })

        } else {
            res.setHeader('Content-Type', 'application/json;charset=utf-8')
            res.statusCode = 404
            res.end('Not Found')
        }

    } else if (req.method === 'GET') {
        if (pathname === '/api/get') {
            console.log(query.a)
            res.end('get success  ')

        }

    }

}).listen(98, () => {
    console.log('server is running on port 98')
})