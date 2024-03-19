---
lang: zh-CN
title: 前端框架模板下载cli
---

### 前期准备工作
- gitlab/github/gitee项目准备以及对应的项目读取权限

1. npm link安装cli命令
2. commander写入命令
```js
program
  .command("create <app-name>")
  .description("创建一个新项目")
  .option("-f, --force", "如果创建的目录存在则直接覆盖")
  .action(async (name, options) => {
    await checkVersion();
    require("../lib/create")(name, options);
  });
```
3. 监听命令，处理各项命令的操作，比如创建一个工程 x-cli create xxx
 - 获取仓库目录
 - 选择版本
 - 下载模版
```js
const downloadGitRepo = require("download-git-repo");
const util = require("util");
this.downloadGitRepo = util.promisify(downloadGitRepo); // 异步化下载函数
```
  - 安装依赖