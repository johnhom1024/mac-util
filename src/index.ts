/*
 * @Date: 2022-03-07 17:09:33
 * @Author: handsome_anthony
 * @LastEditors: handsome_anthony
 * @Description: 
 */
import { program } from 'commander';

import init from './order/init';
import pkg from '../package.json';

program
  .command('init')
  .description('初始化macOS系统的一些配置')
  .action(() => {
    init();
  })

program
  .version(`${pkg.version}`, '-v --version')
  .usage('mac-cli <command> [option]');

program.parse(process.argv);
