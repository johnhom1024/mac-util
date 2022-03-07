/*
 * @Date: 2022-03-07 17:51:05
 * @Author: handsome_anthony
 * @LastEditors: handsome_anthony
 * @Description: 初始化macOS的配置
 */

import { prompt } from 'inquirer';
import * as shell from 'shelljs';

async function init(): Promise<void> {
  const options = [
    {
      value: 1,
      name: '1. 开启任何来源'
    },
    {
      value: 2,
      name: '2. 安装oh-my-zsh'
    }
  ]
  const selected = await prompt([
    {
      type: 'list',
      name: 'option',
      message: '选择你要进行的操作',
      choices: options,
    }
  ])

  console.log(selected);
  switch (selected.option) {
    case 1:
      openAnySource();
      break;
  
    default:
      break;
  }
}

// 开启任何来源
async function openAnySource(): Promise<void> {
  try {
    await shell.exec('sudo spctl --master-disable', {
      shell: true,
    });
    
  } catch (error) {
    throw new Error(error);
  }
}


export default init;