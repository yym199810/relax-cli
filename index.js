#!/usr/bin/env node
const program = require('commander');
const { createCommands } = require('./lib/core/create');
const helpOptions = require('./lib/core/help')
// 动态版本号  修改指令 如果想默认的-V也可以 把下面注释解开也就是再写一遍
program.version(require('./package.json').version, '-v, --version')
// program.version(require('./package.json').version)

// 帮助可选项指令
helpOptions();

// 创建其他指令
createCommands();



// 解析
program.parse(process.argv)