---
title: 笔记（过程中遇到的问题 暂未分类整理）
---

# GIT

+ #### GITIGNORE不起作用的解决方法

  cmd进入对于的项目文件夹 依次输入

  ```
  git rm -r --cached .
  git add .
  git commit -m 'update .gitignore'
  ```

# C#

## 网络

System.Net.NetworkInformation.Ping 需要调用IDispose接口 否则会造成内存溢出问题

~~~~c#
private void _myPing_PingCompleted(object sender, PingCompletedEventArgs e)
{
    using (sender as System.Net.NetworkInformation.Ping)
    {
        if (PhotonNetwork.connected)
            return;
        if (e.Reply.Status == IPStatus.Success)
        {
            Debug.Log(sender.ToString());
            ipqueue.Enqueue(sender.ToString());
        }
    }
 }

~~~~



## 数组

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

## 枚举

+  1<< 1  代表往左移动一位 表示2的1次方 以此类推
+  |  运算符 需要和flags属性一起用 表示多个状态集合 在设置枚举的值的时候需要用2的n次幂来避免相加后与枚举的值相等 

## 反射

~~~~c#
//获取类型对象所有的子类
private static List<Type> GetAllChildClass(Type baseType)
{
     List<Type> typelist = new List<Type>();
     List<Type> ts = ETModel.Game.Hotfix.GetHotfixTypes();
     foreach (var item in ts)
     {
        if (item.BaseType == baseType)
        {
            typelist.Add(item);
        }
     }
    return typelist;
}

         
//反射复制对象属性
public static object MapperItem(Type targettypeName, object target)
{
   var type = Type.GetType(targettypeName.FullName);
   var result = Activator.CreateInstance(type);
   try
   {
      var targetType = target.GetType();
      var resultType = result.GetType();
      foreach (FieldInfo targetItem in targetType.GetFields())
      {
          foreach (FieldInfo resultItem in resultType.GetFields())
          {
            if (resultItem.Name == targetItem.Name)
            {
              resultItem.SetValue(result, targetItem.GetValue(target));
              break;
            }
          }
       }
    }
    catch (Exception ex)
    {
       Debug.Log(ex.StackTrace);
    }
    return result;
}
~~~~

~~~~c#
 ///遍历List 
 int count = Convert.ToInt32(value.GetType().GetProperty("Count").GetValue(value, null));
 for (int i = 0; i < count; i++)
 {
   object listItem = value.GetType().GetProperty("Item").GetValue(value, new object[] { i });
 }
~~~~

# JOSN

~~~~ c#
//多态 转JSON的时候，传入设置即可  转Object也需要作为参数
Newtonsoft.Json.JsonSerializerSettings settings = new Newtonsoft.Json.JsonSerializerSettings()
{
   TypeNameHandling = Newtonsoft.Json.TypeNameHandling.All
};
~~~~



```c#
//Newtonsoft.Json  基类转子类
public abstract class JsonCreationConverter<T> : JsonConverter
{
	protected abstract T Create(Type objectType, JObject jsonObject);
	public override bool CanConvert(Type objectType)
	{
		return typeof(T).IsAssignableFrom(objectType);
	}

	public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
	{
		var jsonObject = JObject.Load(reader);
		var target = Create(objectType, jsonObject);
		serializer.Populate(jsonObject.CreateReader(), target);
		return target;
	}

	public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
	{
		throw new NotImplementedException();
	}
}
public class JsonBBBConverter : JsonCreationConverter<BBB>
{
	protected override BBB Create(Type objectType, JObject jsonObject)
	{
		var typeName = jsonObject["Type"].ToString().Replace("\"","");
		switch (typeName)
		{
			case "AAA":
				return new AAA();
			case "CCC":
				return new CCC();
			default:
				return null;
		}
	}
}
public class AAA : BBB
{
	public string Name;
}

public class CCC : BBB
{
	public int Age;
}

public class BBB
{
	[JsonProperty("Type")]
	public string JsonType;
}
```



# Unity

## Animator

+ 当删除某些没有K进动画的模型时  Avatar有可能会使动画失效

# Android

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

