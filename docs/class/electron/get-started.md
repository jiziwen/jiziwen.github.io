---
lang: zh-CN
title: 项目搭建
---

## 环境准备

- node.js 最好小于18
- vue-cli 最好是最新版
- electron 最好15以上

```bash
yarn global add @vue/cli
```
如需升级vue-cli
```bash
yarn global upgrade --latest @vue/cli
```
然后创建一个vue-cli项目
```bash
vue create hello-world
```
然后
```bash
vue add electron-builder
```
便可自动生成一个elctron项目

执行命令
```json
  "electron:buildwin": "vue-cli-service electron:build --mode development --win --x64", // windows包
  "electron:buildwin-prod": "vue-cli-service electron:build --mode production --win --x64",
  "electron:serve": "vue-cli-service electron:serve --mode development", // mac启动
  "electron:serve-prod": "vue-cli-service electron:serve --mode production",
```
::: warning 注意
electron-builder安装electron最新的是13，如果安装报错，或者需要升级高版本，可自行升级

```bash
yarn add electron@15.3.0
```
:::