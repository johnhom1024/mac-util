/*
 * @Date: 2022-03-07 17:09:33
 * @Author: handsome_anthony
 * @LastEditors: handsome_anthony
 * @Description: 
 */
import { program } from 'commander';

import pkg from '../package.json';

program
  .version(`${pkg.version}`, '-v --version')
  .usage('<command> [option]');

program.parse(process.argv);
