const program = require('commander')
const helpOptions = () => {
    //  增加自己的options
    program.option('-rel --relax', 'hello this is realx')
        .option('-d --dest <dest>', 'a destination folder, 例如: -d /src/components')
        .option('-f --framework <framework>', 'your framework')
        // 自定义监听
        .on('--help', function () {
            console.log(" other options")
        })
}

module.exports = helpOptions;