(function() {


	var strFn=function(str) {
		this.str=str;
	}

	strFn.prototype={
		/**
		 * [字符串去空格方法]
		 * @type  {[str]} type [有两个值 ends表示去除两端的空格，all表示去除所有额空格]
		 */
		clearSpace:function (type) {
			type=type||"ends";
			if (type=="ends") {
		 		this.str.replace(/(^\s*)|(\s*$)/g, "");
		 		return this;
		 	}

		 	if (type=="all") {
			 	this.str.replace(/\s/g, "")
			 	return this
		 	}
		},

	}
	var arrFn=function(arr){
		this.arr=arr
	}
	arrFn.prototype={
		/**
		 * [将一个素组的某个元素插入某个位置]
		 * @index1  {[num]} index1 [要挪动的元素的键值]
		 * @index2  {[num]} index2 [要查到的位置]
		 */
		swapItems:function( index1, index2){
		  this.arr[index1] = this.arr.splice(index2, 1, arr[index1])[0];
			return this;
		},
		/**
		 * [数组去重]
		 * @return {[type]} [description]
		 */
		clearRepeat:function(){
			var arr=this.arr;
			var n=[];
			for(i=0;i<arr.length;i++){
				if(n.indexOf(arr[i])==-1){
					n.push(arr[i])
				}
			}
			this.arr=arr;
			return this;
		}

	}




})()
