关于dom节点的选取大家肯定不陌生,从js的编程很大一部分是dom节点的选取,总结一下常用的dom节点的选取的操作:
总结目录:
1.原生js
2.jquery选取
3.Angular选取
4.react选取

下面是案例总结:
1.原生js选取dom节点有一下几种方式:
(1) document.getElementById("Id名");本操作是调用id名进行节点选取.
(2) document.getElementsByClassName("class名");本操作是调用class类名进行dom节点的选取,（但是要注意该选择返回的是一个dom节点集合,并不能做任何实际的操作,如果想对某一个节点进行操作,标注其键值.例子:document.getElementsByClassName("item")[0])
	特别有意思的是对每一个elem集合添加监听事件时候要用一个闭包来实现事件的完美执行.
	例子:
	html:
		<button class="btn">点击</button>...20个...<button class="btn">点击</button>
	JS:
		window.onload=function(){
			var btns=document.getElementsByClassName("btn");
			for (var i=0,j=btns.length;i<j;i++) {
				(function(){
					var num=i;
					btns[num].onclick=function(){
						console.log(num);
					}
				})()
			}
		}
	另外setTimeout和setinterval的是延迟执行也需要的闭包.
	classNamede的选取方式在iE8之前是不支持的,当然这个现在应该不考虑了.
 (3) document.getElementsByTagName("标签名");该操作是用标签名进行dom节点的选取,其注意项和获取class一样
 (4) document.getElementsByName("name名");
 (5) document.querySelector("css3选择器");该方法返回文档中匹配指定css选择器的一个元素。
 (注意：querySelector()仅仅返回匹配指定选择器的第一个元素，如果想返回其他元素需要使用querySelectorAll()方法)
	例子:
	html:
	<p id="queryEle" class="example" >第一个p</p>
	<p>第二个p</p>
	<h1>我是h1</h1>
	<h2>我是h2</h2>

	js:
	var str1=document.querySelector("p").innerHTML;
	var str2=document.querySelector("#queryEle").innerHTML;
	var str3=document.querySelector(".example").innerHTML;
	var str4=document.querySelector("p.example").innerHTML;
			document.querySelector("h1,h2").style.backgroundColor="red";
	console.log(str1,str2,str3,str4);

	输出的结果:第一个p，第一个p，第一个p，第一个p
						我是h1和我是h2的背景色为红色
	(6) document.querySelectorAll("css3选择器");该方法是返回文档中匹配指定css选择器的元素列表;
	(注意:querySelector是返回选择器的第一个元素,querySelectorAll是返回选择器的所有元素)
	例子:
	html:
	<p>1</p>
	<p>2</p>
	<p>3</p>

	js:
	var str1=document.querySelector("p").innerHTML;
	var str2=document.querySelectorAll("p")[0].innerHTML;
	var str3=document.querySelectorAll("p")[1].innerHTML;
	console.log(str1,str2,str3);

	输出的结果:1,1,2


……^jQuery在现在的开发总越来越被淡出
2.jQuery选取dom节点的常用方法
 (1)jQuery里边的css3选择器的用法,用以下几个案例来加以解释。
 @1.常规
	$("*") 所有元素
	$("#lastName") id="lastName"的元素
	$(".lastName") class="lastName"的元素
	$("p") 所有p元素
	$("p,div,li") 搜有的p div li元素
	@2.加:的伪劣选择
	$("p:last") 最后一个p元素
	$("p:first") 第一个p元素
	$("p:even") 所有的索引为偶数的p元素(索引是从0开始为偶数1为奇数以此类推)
	$("p:odd")  所有的奇数元素


3.Angular的dom选择机制。
===其实angular的dom选择机制是值得一谈的它是先检查你的项目是否引用了jQuery如果引用了就优先使用jQuery的选择器，如果没用引用则使用angular自身的jQLite方法

下面是总结的angulardom操作的api

addClass()-为每个匹配的元素添加指定的样式类名
after()-在匹配元素集合中的每个元素后面插入参数所指定的内容，作为其兄弟节点
append()-在每个匹配元素里面的末尾处插入参数内容
attr() - 获取匹配的元素集合中的第一个元素的属性的值
bind() - 为一个元素绑定一个事件处理程序
children() - 获得匹配元素集合中每个元素的子元素，选择器选择性筛选
clone()-创建一个匹配的元素集合的深度拷贝副本
contents()-获得匹配元素集合中每个元素的子元素，包括文字和注释节点
css() - 获取匹配元素集合中的第一个元素的样式属性的值
data()-在匹配元素上存储任意相关数据
detach()-从DOM中去掉所有匹配的元素
empty()-从DOM中移除集合中匹配元素的所有子节点
eq()-减少匹配元素的集合为指定的索引的哪一个元素
find() - 通过一个选择器，jQuery对象，或元素过滤，得到当前匹配的元素集合中每个元素的后代
hasClass()-确定任何一个匹配元素是否有被分配给定的（样式）类
html()-获取集合中第一个匹配元素的HTML内容
next() - 取得匹配的元素集合中每一个元素紧邻的后面同辈元素的元素集合。如果提供一个选择器，那么只有紧跟着的兄弟元素满足选择器时，才会返回此元素
on() - 在选定的元素上绑定一个或多个事件处理函数
off() - 移除一个事件处理函数
one() - 为元素的事件添加处理函数。处理函数在每个元素上每种事件类型最多执行一次
parent() - 取得匹配元素集合中，每个元素的父元素，可以提供一个可选的选择器
prepend()-将参数内容插入到每个匹配元素的前面（元素内部）
prop()-获取匹配的元素集中第一个元素的属性（property）值
ready()-当DOM准备就绪时，指定一个函数来执行
remove()-将匹配元素集合从DOM中删除。（同时移除元素上的事件及 jQuery 数据。）
removeAttr()-为匹配的元素集合中的每个元素中移除一个属性（attribute）
removeClass()-移除集合中每个匹配元素上一个，多个或全部样式
removeData()-在元素上移除绑定的数据
replaceWith()-用提供的内容替换集合中所有匹配的元素并且返回被删除元素的集合
text()-得到匹配元素集合中每个元素的合并文本，包括他们的后代
toggleClass()-在匹配的元素集合中的每个元素上添加或删除一个或多个样式类,取决于这个样式类是否存在或值切换属性。即：如果存在（不存在）就删除（添加）一个类
triggerHandler() -为一个事件执行附加到元素的所有处理程序
unbind() - 从元素上删除一个以前附加事件处理程序
val()-获取匹配的元素集合中第一个元素的当前值
wrap()-在每个匹配的元素外层包上一个html元素


例子:
html:
<div id="testID" class="test1">
    <img id="testID2" class="test2" alt="" src="some-image.gif" />
</div>

js:
angular.element("#testID2").find(".test2").remove("test3");
(*dom节点的的选取,要注意选取的位置)
