/**
 *原型连方法封装 1
 * */
var Anim1 = function() {
	this.name = "Anim1";
}
Anim1.prototype.start = function() {
	alert(this.name + "开始函数")
}
Anim1.prototype.stop = function() {
	alert(this.name + "结束函数")
}
//var myAnim1 = new Anim1();
//myAnim1.start();
//myAnim1.stop();
/**
 * 原型连方法封装 2
 * */
var Anim2 = function() {
	this.name = "Anim2";
}
Anim2.prototype = {
	start: function() {
		alert(this.name + "开始函数")
	},
	stop: function() {
		alert(this.name + "结束函数")
	}
}

//var myAnim2 = new Anim2();
//myAnim2.start();
//myAnim2.stop();

/**
 *链式语法 
 * */
Function.prototype.method=function(name,fn){
	this.prototype[name]=fn;
	return this;
}
var Anim3=function(){
	this.name="Anim3";
}
Anim3
.method('start',function(){
	alert(this.name + "开始函数")
})
.method('stop',function(){
	alert(this.name + "结束函数")
})
//var myAnim3 = new Anim3();
//myAnim3.start();
//myAnim3.stop();

/**
 * 自启函数的运行的多种方法不一一列举
 * 原理就是将一个函数变成一个表达式
 */
(function(){
	var foo=10;
	var bar=2;
	alert(foo*bar+"自启方法1");
}())
!function(){
	var foo=10;
	var bar=2;
	alert(foo*bar+"自启方法2");
}()
+function(){
	var foo=10;
	var bar=2;
	alert(foo*bar+"自启方法3");
}()
-function(){
	var foo=10;
	var bar=2;
	alert(foo*bar+"自启方法4");
}()
*function(){
	var foo=10;
	var bar=2;
	alert(foo*bar+"自启方法5");
}()
/function(){
	var foo=10;
	var bar=2;
	alert(foo*bar+"自启方法6");
}()
&function(){//&&是不起作用的
	var foo=10;
	var bar=2;
	alert(foo*bar+"自启方法7");
}()
|function(){
	var foo=10;
	var bar=2;
	alert(foo*bar+"自启方法8");
}()
||function(){
	var foo=10;
	var bar=2;
	alert(foo*bar+"自启方法9");
}()
^function(){
	var foo=10;
	var bar=2;
	alert(foo*bar+"自启方法10");
}()