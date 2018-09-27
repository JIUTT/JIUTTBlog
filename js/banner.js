var imgs = document.getElementById("banner").getElementsByTagName("a");

	function showImg(){
		// 获取已经显示的一张
		var showIndex;
		
		for(var i = 0; i< imgs.length; i++){
			var attr = imgs[i].getAttribute("class");
			if(attr!="hide"){
				showIndex = i;
				break;
			}

		}
		// 获取此次方法需要显示的index索引值
		var index;
		if(showIndex+1<=imgs.length-1){
			index = showIndex+1;
		}else{
			index= 0;
		}
		showImage(index);
		showTab(index);
	}
	var inter = setInterval("showImg()",3000);
	function stop(){
		clearInterval(inter);
	}
	function start(){
		inter = setInterval("showImg()",3000);
	}
	// 指定索引值，显示指定的image图片
	function showImage(index){
		// 隐藏全部
		for(var k = 0; k<imgs.length; k++){
			imgs[k].setAttribute("class","hide");
		}
		// 将他的下级元素显示
		imgs[index].setAttribute("class","");	
	}
	// 指定索引值，显示指定的tab
	function showTab(index){
		// 去除所有的悬浮效果
		var tabs = document.getElementById("tabs").getElementsByTagName("li");
		for(var k = 0; k<tabs.length; k++){
			tabs[k].setAttribute("class","");
		}
		// 只显示当前的悬浮效果
		tabs[index].setAttribute("class","li_hover");	
	}
	window.onload= function(){
		for(var i = 0; i< imgs.length; i++){
			imgs[i].onmouseover = function(){
				stop();
			}
			imgs[i].onmouseout = function(){
				start();
			}
		}
		// 对a标签添加鼠标悬浮事件
		var tabs = document.getElementById("tabs").getElementsByTagName("li");
		for(var k = 0; k< tabs.length; k++){
			tabs[k].onmouseover = function(){
				// 当鼠标悬浮时
				// 停止自动播放效果
				stop();
				// 图片显示在指定的一张上面
				var index = listIndexOf(tabs,this);
				showImage(index);
				showTab(index);
			}
			tabs[k].onmouseout = function(){
				// 当鼠标离开时
				// 图片开始播放
				start();
			}
		}
	}
	// 下一个箭头点击事件
	function nextArrow(){
		showImg();
		stop();
		start();
	}
	// 上一个箭头点击事件
	function preArrow(){
		showPreImg();
		stop();
		start();
	}
	function showPreImg(){
		// 获取已经显示的一张
		var showIndex;
		
		for(var i = 0; i< imgs.length; i++){
			var attr = imgs[i].getAttribute("class");
			if(attr!="hide"){
				showIndex = i;
				break;
			}

		}
		// 获取此次方法需要显示的index
		var index;
		if(showIndex-1>=0){
			index = showIndex-1;
		}else{
			index= imgs.length-1;
		}
		showImage(index);
		showTab(index);
	}
	// list专用，获取某个元素在list中的索引值
	// 没查找到，返回-1
	function listIndexOf(list,item){
		for(var i = 0; i< list.length; i++){
			if(list[i] == item){
				return i;
			}
		}
		return -1;
	}