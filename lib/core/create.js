const program = require('commander')
const { createProjectAction } =require('./action')
const createCommands = () => {
    program
        // 默认指令就是 realx create了 [...ohter] 不定长的参数
        .command('create <project> [...other]')
        .description('clone a repository into a folder')
        .action(createProjectAction)
          
}

module.exports = {
    createCommands
}