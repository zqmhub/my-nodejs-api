const path = require('path');
console.log(path.join(__dirname, 'public'));
console.log(path.win32.basename('c:\\temp\\myfile.html'));
console.log(path.posix.basename('/temp/myfile.html'));
console.log(path.dirname('c:\\temp\\myfile.html'));

// 扩展名
console.log(path.extname('c:\\temp\\myfile.html'));
// 拼接路径
console.log(path.join('aaa','bbb','/cc'))

console.log(path.resolve(__dirname,'./index.js'))
console.log(path.resolve('/index','/jsdom'))
