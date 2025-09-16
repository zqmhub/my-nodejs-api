// console.log(globalThis)
const cwd = process.cwd()

console.log('当前工作目录>>', cwd)

/**
 * @param {string} msg
 * @description 控制台打印
*/
function clog(msg) {
    console.log(msg)
}

clog(process.argv[2])

clog(process.env.NODE_ENV)
/**
 * @param{number} a
 * @param{number} b
 * @return {number}
 * @description 计算两个数的和
*/
function sum(a, b) {
    return a + b
}
clog(sum(1, 24))

clog(process.env)