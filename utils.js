import fs from 'fs'
import download from 'download-git-repo'
import ora from 'ora'

const spinner = ora('正在下载代码...')

export const checkPath = (path) => {
    return fs.existsSync(path)
}

export const downloadTemp = (branch, project) => {
    spinner.start()
    return new Promise((resolve, reject) => {
        download(`direct:https://gitee.com/chinafaker/vue-template.git#${branch}`, project, { clone: true }, (err) => {
            if (err) {
                reject(err)
                console.log('下载失败>>', err)
            }
            spinner.succeed('下载完成')
            resolve()
        })
    })
}