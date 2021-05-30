---
title: 创建UI
---

## 创建UI预制件以及UI脚本

+ 制作预制件

  + 预制件名称需要以Window结尾


<img :src="$withBase('/image/project/chuangke.png')" alt="mixureSecure">

+ 挂载引用（可以不选择这种方式用查找的方式来做）

<img :src="$withBase('/image/project/addreference.png')" alt="mixureSecure">

+ 使用脚本工具生成代码和预制件

  <img :src="$withBase('/image/project/generateuiwindow.png')" alt="mixureSecure">

  + 预制件生成位置

    <img :src="$withBase('/image/project/generatedprefab.png')" alt="mixureSecure">

  + 脚本生成位置

    <img :src="$withBase('/image/project/generatedscript.png')" alt="mixureSecure">

  + ScriptObject数据的生成

    <img :src="$withBase('/image/project/odinuiwindow.png')" alt="mixureSecure">

+ UITemplateWindowComponent_Generated.cs 是用来生成引用脚本的 一般是不建议自己修改的 当有新增或修改引用时需要重新使用工具生成

  ````c#
  using System.Collections.Generic;
  
  namespace ETHotfix
  {
  	[ETModel.ObjectSystem]
  	public class UITemplateWindowComponentAwakeSystem : AwakeSystem<UITemplateWindowComponent>
  	{
  		public override void Awake(UITemplateWindowComponent self)
  		{
  			self.Awake();
  		}
  	}
  	public partial class UITemplateWindowComponent : UIWindowComponent
  	{
  		private UnityEngine.UI.Button Button;
  
  		public void Awake()
  		{
  			var go = GetParent<UI>().GameObject;
  
  			Button=Collector.GetMonoComponent<UnityEngine.UI.Button>("Button");
  
  			this.RegisterEvent();
  		}
  	}
  }
  ````

  

+ UITemplateWindowComponent 是UI窗口的逻辑制作脚本

  ````c#
  using System;
  using UnityEngine;
  using UnityEngine.UI;
  using System.Collections.Generic;
  namespace ETHotfix
  {
  	public partial class UITemplateWindowComponent : UIWindowComponent
  	{
  		private void RegisterEvent()
  		{
  		   ///事件注册 初始化
  		}
  		
  		///具体的业务逻辑
  	}
  }
  
  
  ````




