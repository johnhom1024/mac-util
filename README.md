# mac-util

一个基于Mac上使用的工具命令行应用，可以帮助Mac用户快速地配置macOS系统。

这个CLI应用可以一键**开启任何来源**，或者安装`oh-my-zsh`以及与zsh相关的插件例如`zsh-autosuggestions`和`zsh-syntax-highlighting`，后续会支持更多的设置。


## 安装`mac-util`

全局安装`mac-util`：

```shell
yarn global add mac-util 
# 或者 npm install -g mac-util
```

现在你可以在命令行中直接输入`mac-util`。

## CLI 使用

### init

在命令行中输入：

```shell
mac-util init
```

之后会出现一系列选项：

```shell
➜ ~ mac-util init
? 选择你要进行的操作 (Use arrow keys)
❯ 1. 开启任何来源
  2. 关闭任何来源
  3. 安装oh-my-zsh
  4. 卸载oh-my-zsh
  5. NVM变量添加
  6. 安装zsh-autosuggestions插件
  7. 安装zsh-syntax-highlighting插件
```

你只需要通过方向键上下移动光标到需要设置的选项，然后按下回车键确认即可。CLI会自动帮你执行对应的操作。

例如我选中了`安装zsh-autosuggestions`，按下回车之后的执行效果如下：

```shell
➜  ~ mac-util init
? 选择你要进行的操作 6. 安装zsh-suggestions插件
开始安装 zsh-autosuggestions
运行命令：git clone https://github.91chi.fun/https://github.com/zsh-users/zsh-autosuggestions.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
Cloning into '/Users/bigdog/.oh-my-zsh/custom/plugins/zsh-autosuggestions'...
安装zsh-autosuggestions成功...
更改~/.zshrc文件，写入zsh-autosuggestions...
完成
➜  ~
```

enjoy yourself!