/*
 * interface类用来检测接口是否定义
 */
var Interface = function(name, methods){
	if (arguments.length != 2) {
		throw new Error("你传入Interface的参数只有"+arguments.length+"个，但是Interface需要两个参数!");
	}
	this.name = name;
	this.methods = [];
	for (var i = 0, len = methods.length; i < len; i++) {
		if (typeof methods[i] !== "string") {
			throw new Error ("输入的接口名字必须为字符串形式");
		}
		this.methods.push(methods[i]);
	}
}
Interface.ensureImplements = function(obj){
	if (arguments.length < 2) {
		throw new Error("你传入Interface的参数只有" + arguments.length + "个，但是Interface需要两个参数!");
	}
	for (var i = 1, len = arguments.length; i < len; i++) {
		var interface = arguments[i];
		if(interface.constructor !== Interface){
			throw new Error("Function Interface.ensureImplements expects arguments two and above to be instances 0f Interface.");
		}
		for (var j = 0, methodsLen = interface.methods.lenth; j<methodsLen; j++) {
			var method = interface.methods[j];
			if(!object[method] || typeof object[method] !== "function") {
				throw new Error("Function Interface.ensureImplements:object does not implement the" + interface.name + "interface.Method" + method + "was not found.");
			}
		}
	}
};
