// node系统自带的
const { promisify } = require('util')
// 这样就支持Promise了
const download = promisify(require('download-git-repo'))
const { vueRepo } = require('../config/repo-config')
// 需要把npm的文件克隆到本地的demo文件夹下
const createProjectAction = async (project) => {
    // 1.clone项目
    await download(vueRepo, project, { clone:true })
    // 2.执行npm i
    
    // 3.运行 npm run serve 不同的命令可以判断区分
    // 4.打开浏览器
}
module.exports = {
    createProjectAction
}