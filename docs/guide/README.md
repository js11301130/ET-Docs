---
title: 介绍
---

## 前言

框架是基于ET5.0 在原有基础上优化新增了一些组件功能模块。

+ Odin可视化数据配置
+ UI自动绑定生成
+ AB包自动生成代码引用

:octocat:[原版ET地址](https://github.com/egametang/ET) :octocat:

[表情包地址](https://www.webfx.com/tools/emoji-cheat-sheet/)

## ET框架整体文件夹说明

```text
.
├─Config 一些配置文件 服务器和数据库参数以及项目json数据
├─FileServer 资源服务器的打包文件
├─Logs 服务器Log日志
├─Proto 
│   ├─protoc.exe   proto文本转C#工具
│   ├─HotfixMessage.proto 服务器与客户端之间的数据传输结构(可热更)
│   ├─InnerMessage.proto  服务器和服务器之间的数据传输结构
│   └─OuterMessage.proto  服务器与客户端之间的数据传输结构
├─Release 文件打包
├─Server 服务器代码
├─Tools  一些工具的项目工程 如资源服务器，proto2C#等
└─Unity  客户端工程
```

