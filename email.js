import nodemailer from 'nodemailer';
import yaml from 'js-yaml';
import fs from 'node:fs';
import http from 'node:http';
import url from 'node:url';
const mailConfig = yaml.load(fs.readFileSync('./email.yaml', 'utf8'));
const transPort = nodemailer.createTransport({
    service: 'qq',
    port: 4587,
    host: 'smtp.qq.com',

    auth: {
        user: mailConfig.user,
        pass: mailConfig.pass
    }
});


http.createServer((req, res) => {
    const { pathname } = url.parse(req.url)
    if (req.method === 'POST' && pathname === '/send/mail') {
        let mailInfo = ''
        req.on('data', (chunk) => {
            mailInfo += chunk
        })
        req.on('end', () => {
            const body = JSON.parse(mailInfo)
            transPort.sendMail({
                to: body.to,
                from: mailConfig.user,
                subject: body.subject,
                text: body.text
            })
            res.end('send success')
        })
    }
}).listen(3000,()=>{
    console.log('server is running on port 3000')
})
