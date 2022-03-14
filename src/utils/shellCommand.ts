/*
 * @Date: 2022-03-14 22:28:20
 * @Author: handsome_anthony
 * @LastEditors: handsome_anthony
 * @Description: 导出一些shell命令
 */

import shell from 'shelljs';

export async function closeAnySource(): Promise<void> {
  const command = 'sudo spctl --master-enable';

  try {
    console.log('运行命令：' + command);
    await shell.exec(command, {
      shell: true,
    });
    console.log('已关闭任何来源');
  } catch (error) {
    throw new Error(error);
  }
}

// 开启任何来源
export async function openAnySource(): Promise<void> {
  const command = 'sudo spctl --master-disable';

  try {
    console.log('运行命令：' + command);
    await shell.exec(command, {
      shell: true,
    });
    console.log('已开启任何来源');
  } catch (error) {
    throw new Error(error);
  }
}


// 安装oh my zsh
export async function installOhmyzsh(): Promise<void> {
  // 该命令可能需要终端能够访问github
  const installOhmyzshCommand = 'sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"';
  try {
    console.log('运行命令：' + installOhmyzshCommand);
    await shell.exec(installOhmyzshCommand, {
      shell: true,
    });
    console.log('oh-my-zh安装完成');
    // 询问是否安装ohmyzsh的一些常用插件

  } catch (error) {
    throw new Error(error);
  }
}


// 卸载oh my zsh 
export async function uninstallOhmyzsh(): Promise<void> {
  const uninstallOhmyzshCommand = 'uninstall_oh_my_zsh';

  // 首先判断ohmyzsh是否存在
  try {
    console.log('运行命令：' + uninstallOhmyzshCommand);
    const result = await shell.exec(uninstallOhmyzshCommand);

    if (result.stderr) {
      throw new Error(result.stderr);
    }
    
    console.log('oh-my-zsh卸载完成');
    
  } catch (error) {
    throw new Error(error);
  }
}