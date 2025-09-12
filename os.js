const os = require('node:os');
console.log(os.platform());
console.log(os.type())
console.log(os.release())
console.log(os.homedir())
//架构
console.log(os.arch())
//获取cpu线程
console.log(os.cpus())
//内存
// console.log(os.totalmem())
// 获取网络信息
console.log('networkInterfaces>>',os.networkInterfaces())