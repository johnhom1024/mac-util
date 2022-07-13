/*
 * @Date: 2022-03-07 17:09:33
 * @Author: handsome_anthony
 * @LastEditors: handsome_anthony
 * @Description: 
 */
import { program } from 'commander';

import init from './order/init';

program
  .command('init')
  .description('初始化macOS系统的一些配置')
  .action(() => {
    init();
  })

program
  .version(`${process.env.npm_package_version}`, '-v --version')
  .usage('mac-util <command> [option]');

program.parse(process.argv);
