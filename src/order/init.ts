/*
 * @Date: 2022-03-07 17:51:05
 * @Author: handsome_anthony
 * @LastEditors: handsome_anthony
 * @Description: 初始化macOS的配置
 */

import { prompt } from 'inquirer';
import {
  openAnySource,
  closeAnySource,
  installOhmyzsh,
  uninstallOhmyzsh,
  addNVMToZshrc,
  installZshAutosuggestions,
} from '../utils/shellCommand';

async function init(): Promise<void> {
  const options = [
    {
      value: 1,
      name: '1. 开启任何来源'
    },
    {
      value: 2,
      name: '2. 关闭任何来源'
    },
    {
      value: 3,
      name: '3. 安装oh-my-zsh'
    },
    {
      value: 4,
      name: '4. 卸载oh-my-zsh'
    },
    {
      value: 5,
      name: '5. NVM变量添加'
    },
    {
      value: 6,
      name: '6. 安装zsh-suggestions插件'
    }
  ]
  const selectedOption = await prompt([
    {
      type: 'list',
      name: 'value',
      message: '选择你要进行的操作',
      choices: options,
    }
  ])

  try {
    switch (selectedOption.value) {
      case 1:
        openAnySource();
        break;
      case 2:
        closeAnySource();
        break;
      case 3:
        installOhmyzsh();
        break;
      case 4:
        uninstallOhmyzsh();
        break;
      case 5:
        addNVMToZshrc();
        break;
      case 6:
        installZshAutosuggestions();
        break;
      default:
        break;
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message)
    }
  }

}



export default init;