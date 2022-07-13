/*
 * @Author: johnhom1024 924358746@qq.com
 * @Date: 2022-06-22 20:44:49
 * @LastEditors: handsome_anthony
 * @LastEditTime: 2022-07-13 12:53:09
 * @FilePath: /mac-cli/src/utils/logger.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import chalk from 'chalk';

export function log(...args: any) {
  console.log(...args);
}

export function logInfo(msg: string) {
  console.log(
    chalk.bgBlue.black(' Info ') + ' ' +
    msg
  );
}

export function logSuccess(msg: string) {
  console.log(
    chalk.bgGreen.black(' Success ') + ' ' +
    msg
  );
}

export function logWarn(msg: string, logBlock = false) {
  if (logBlock) log('\n\n');

  console.log(
    chalk.bgYellow.black(' Warn ') + ' ' +
    chalk.yellow(msg)
  );

  if (logBlock) log('\n\n');
}