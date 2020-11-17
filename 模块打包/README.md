# CommonJS

CommonJS是Javascript社区提供的包含模块，文件，IO，控制台在内的一系列标准。在Node.js基础上作了一定的调整。CommonJS最初只为服务端服务，直到有了Browserify————一个运行在Node.js环境下的模块打包工具，客户端代码也可以使用CommonJS标准来编写了。不仅如此，我们还可以借助Node.js的包管理器，npm开发者还可以获取其他人的代码。

## 模块

CommonJS规定每个文件都是一个模块。将一个js文件以script标签的形式插入到页面中与封装成CommonJS模块最大的不同在于，前者的声明的变量是在window上，也就是全局作用域上，而CommonJS会形成一个属于模块自身的作用域，所有变量及函数只有自己可以访问。

## 导出

CommonJS导出是以下面进行的

```js
module.exports = {
	name:'luanhanxiao',
	add:function(a,b){
	return a + b;
	}
}
//也可以如下写法
exports.name = 'luanhanxiao';
exports.add = function(a,b){
	return a + b;
}
```

CommonJS模块内部会有一个module对象用于存放当前模块的信息。，直接使用exports是一种简化写法。

## 导入

我们使用require来导入模块，在我们require一个模块时会有两个情况：

* require的模块是第一次被加载。这时会首先执行该模块，然后导出内容。
* require的模块曾被加载过，这时该模块不会再次执行，而是直接导出结果。

我们前面提到，模块会有一个module对象用于存放其信息。这个对象中有一个loaded属性表示该模块是否加载过。它的值默认是false，当模块第一次加载和执行过后会设置为true，后面再次加载到module.loaded为true，则不会执行此代码。

有时我们加载一个模块，不需要获其导出的内容，只是想要通过执行它而产生某种作用，这时我们可以把它的接口直接挂载在全局对象上即可：

```javascript
require('./task.js')
```

另外,require本质是个函数，可以接受表达式,借助这个特性我们可以选择动态的加载指定模块.

```javascript
const moduleName = ['foo.js','bar.js'];
moduleName.forEach(name=>{
  require('./' +name);
}
```

# ES6 Module

