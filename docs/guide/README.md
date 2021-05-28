---
title: 介绍
---

## 前言

框架是基于ET5.0 在原有基础上优化新增了一些组件功能模块。

+ Odin可视化数据配置
+ UI自动绑定生成!
+ AB包自动生成代码引用

:cat:[原版ET地址](https://github.com/egametang/ET)

:smirk:[表情包地址](https://www.webfx.com/tools/emoji-cheat-sheet/)

## 文件夹说明

+ ### ET外部文件夹

  ```
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

+ ### 客户端

  ```
  ├─Bundles 所有项目需要使用的预制件
  │     ├─Independent 热更代码和配置数据的预制件
  │     └─Project  项目的预制件
  │          ├─Common 通用预制件
  │          └─UI  UI预制件
  ├─DemoTest 测试用的文件夹 所有测试脚本以及测试场景放这里
  ├─Editor 编辑器脚本
  ├─Hotfix 热更代码
  │   ├─Base 热更的基础代码
  │   ├─Module 模块功能
  │   ├─Project 项目代码
  │   └─Entity 实体类
  ├─Model 本地代码
  │   ├─Base 本地的基础代码
  │   ├─Component 组件类
  │   ├─Entity 实体类
  │   ├─Helper 一些通用的静态类
  │   ├─ILBinding CLR绑定 自动生成的代码
  │   ├─Module 模块代码
  │   └─Extension 扩展方法类
  ├─OPS 代码混淆插件
  ├─Res 资源文件如 模型，贴图，材质，动画等
  └─ThirdParty  第三方插件
          ├─Demigiant  DotweenPro
          ├─Google.Protobuf 数据传输
          ├─MongoDB 数据库
          ├─UITool 一些UI的通用工具
          ├─HighlightPlus 高亮后处理
          └─ILRuntime 代码热更
  ```

+ ### 服务端

  ```
  ├─App 服务器入口
  │     ├─Program.cs 服务器入口代码
  ├─Hotfix 热更代码
  │   ├─Handler 数据接收处理类
  │   ├─Module 模块功能
  │   └─Helper 静态工具类
  ├─Model 本地代码
  │   ├─Base 本地的基础代码
  │   ├─Component 组件类
  │   ├─Entity 实体类
  │   ├─Helper 一些通用的静态类
  │   └─Module 模块代码
  └─ThirdParty  第三方插件
          ├─KcpLib  通讯协议
          └─MongoDBDriver 数据库
  ```

## 快速开始

+  ### 创建ET脚本

  <img :src="$withBase('/image/project/createETscripts.png')" alt="mixureSecure">

  + Component 创建组件脚本

     创建完成后会自动生成模板脚本，目前会自动生成Awake Start Update 3个常用函数

        using ETModel;
        using System.Collections;
        using System.Collections.Generic;
        namespace ETHotfix
        {
            [ObjectSystem]
            public class SampleComponentAwakeSystem : AwakeSystem<SampleComponent>
            {
                public override void Awake(SampleComponent self)
                {
                    self.Awake();
                }
            }
        
            [ObjectSystem]
            public class SampleComponentStartSystem : StartSystem<SampleComponent>
            {
                public override void Start(SampleComponent self)
                {
                    self.Start();
                }
            }
        
            [ObjectSystem]
            public class SampleComponentUpdateSystem : UpdateSystem<SampleComponent>
            {
                public override void Update(SampleComponent self)
                {
                    self.Update();
                }
            }
        
            public class SampleComponent : Component
            {
                internal void Awake()
                {
                    //Do SomeThing.....
                }
        
                internal void Start()
                {
                    //Do SomeThing.....
                }
        
                internal void Update()
                {
                    //Do SomeThing.....
                }
            }
        }

  + Event 事件类

        using ETModel;
        using System.Collections;
        using System.Collections.Generic;
        using UnityEngine;
        
        namespace EventArgType 
        {
            public struct ScriptName 
            {
                //事件脚本需要传的参数
            }
        }
        
        namespace ETHotfix
        {
            public partial class EventIdType
            {
                public const string ScriptName = "ScriptName"; 事件的名称
            }
        
            [Event(EventIdType.ScriptName)]
            public class ScriptName : AEvent<EventArgType.ScriptName>
            {
                public override void Run(EventArgType.ScriptName arg)
                {
                     //事件的执行
                }
            }
        }