/**
* 文件用于输出当前git的commitId及文件变动信息至dist/static/gitInfo.txt文件
* 需额外依赖mkdirp模块，vue项目已自带，其他地方使用可能会找不到模块而报错
* @author zhubincong
* @since 2018-12-03 20:02:16
* @lastModified fangbinwei
*/
const fs = require('fs')
const path = require('path')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const mkdirp = require('mkdirp')

const outputPath = 'dist/static'

async function main () {
  try {
    mkdirp.sync(outputPath)
    // 获取最近一次提交记录
    const { stdout: changesStdout } = await exec('git log --name-status -1')
    // 获取文件status信息
    const { stdout: statusStdout } = await exec('git status -s')

    mkdirp.sync(outputPath)

    const gitInfo = fs.createWriteStream(path.join(outputPath, 'gitInfo.txt'), 'utf-8')

    gitInfo.write(`Files' changes:\n${changesStdout}\nFiles' status:\n${statusStdout}`)
    gitInfo.end()
  } catch (err) {
    console.error('# Failed to generate Git commit info, please install Git or commit your changes.')
    console.error(`# error message:
--------------------->
${err.message}
<--------------------`)
  }
}

main()
