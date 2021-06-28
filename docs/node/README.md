---
title: 笔记（过程中遇到的问题 暂未分类整理）
---

## GIT

+ #### GITIGNORE不起作用的解决方法

  cmd进入对于的项目文件夹 依次输入

  ```
  git rm -r --cached .
  git add .
  git commit -m 'update .gitignore'
  ```

## C#

#### 数组

+ 乱序

         ```c#
         private List<string> GetRandomData(List<string> data)
         {
             var temp = new List<string>(data);
            
             System.Random random = new System.Random();
            
             foreach (var item in data)
             {
                 int c = random.Next(temp.Count);
                 temp.Insert(c, item);
             }
             return temp;
         }
         ```

#### 枚举

+  1<< 1  代表往左移动一位 表示2的1次方 以此类推
+  |  运算符 需要和flags属性一起用 表示多个状态集合 在设置枚举的值的时候需要用2的n次幂来避免相加后与枚举的值相等 

## Unity

+ #### Animator

  + 当删除某些没有K进动画的模型时  Avatar有可能会使动画失效

## Android

+ #### 读取本地文件 不能使用File.Read等IO的读取方式 需要使用WWW或者WebRequest

  ~~~~ c#
  async Task<byte[]> LoadFile(string path)
  {
      UnityWebRequest request = UnityWebRequest.Get(path);
      await request.SendWebRequest();
      if (!request.isHttpError && !request.isNetworkError)
      {
         return request.downloadHandler.data;
      }
      return null;
  }
  ~~~~


+  #### 如果想要使用File IO去读取文件 需要先复制一份文件到本地文件夹

  ```c#
  async void Start()
  {
      var path = Application.streamingAssetsPath + "/" + "data";
      var savepath = Application.persistentDataPath + "/" + "data";  
      _bytes = await LoadFile(path);
      if (!File.Exists(savepath))
      {
         //创建文件
         var fileSteam= File.Create(savepath);
         fileSteam.Write(_bytes,0,_bytes.Length);
         fileSteam.Close();
      }
      var filestream = File.Open(savepath,FileMode.Open);
  }
  ```

