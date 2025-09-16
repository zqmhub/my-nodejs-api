#!/usr/bin/env node
import { program } from 'commander'
import inquire from 'inquirer'
import fs from 'fs'
import { checkPath, downloadTemp } from './utils.js'
let json = fs.readFileSync('./package.json', 'utf-8')

json = JSON.parse(json)

program.version(json.version)

program.command('create <project>').alias('ctr').description('create a new project').action((project) => {
    inquire.prompt([

        {
            name: 'project',
            message: 'project name',
            type: 'input',
            default: project
        },
        {
            name: 'isTs',
            message: '是否支持TS',
            type: 'confirm',

        }]).then((answers) => {
            if (checkPath(answers.projectName)) {
                console.log('文件已经存在')
                return
            }
            if (answers.isTs) {
                downloadTemp('ts', answers.projectName)
            } else {
                downloadTemp('js', answers.projectName)
            }
        })
})

program.parse(process.argv)




