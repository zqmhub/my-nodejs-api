import fs from 'node:fs';
import fs2 from 'node:fs/promises'

fs.readFile('./i.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

fs2.readFile('./i.txt').then(data => {
    console.log('p>>',data.toString())
}).catch(err => {
    console.log(err)
})