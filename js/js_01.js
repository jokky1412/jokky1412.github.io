var flag = 0;	//全局变量，控制开始和停止
var timer;	//计时器定义
function loopRetcColor() {
	//只在没有开始循环的时候开始循环
	if (flag == 0) {
		flag = 1;
		clearInterval(timer);	//每次循环开始前必须清零计时器
		timer = setInterval("btnStart()",1000);		//每秒循环
	}
	if (flag == 1){
		//若正在循环，则不再一次执行setInterval语句。否则会对计时器进行加速
	}
}
function btnStart() {
	if (flag == 1){
		var COUNT = 9;	//随机数范围
		var originalArr = new Array;	//原数组 
		//给原数组originalArr赋值 
		for (var i = 0; i <= COUNT - 1; i++){ 
			originalArr[i] = i; 
		}
		//从原数组取出一个数, 然后让原数组的这个位置赋值为null
		//下一次取数时判断是否为null, 如果是null就不取
		var Arr = new Array;
		for (var num, i = 0; i < COUNT; i++){ 
			do{
				num = Math.floor(Math.random()*COUNT); 
			} while(originalArr[num] == null); 
			Arr[i] = originalArr[num];
			originalArr[num] = null; 
		}
		// 给方块填色
		document.getElementById("Arr").innerHTML = "Arr: " + Arr;

		//给3个矩形生成的随机颜色
		for(var i = 0; i <= 2; i++){
			document.getElementById("retc"+Arr[i]).style.backgroundColor = randomHexColor();
		}
		//其余矩形颜色不变
		for(var i = 3; i <= 8; i++){
			document.getElementById("retc"+Arr[i]).style.backgroundColor = "#fea600";
		}
	}
}

function randomHexColor() {
	var r = Math.floor(Math.random() * 256); //随机生成256以内r值
	var g = Math.floor(Math.random() * 256); //随机生成256以内g值
	var b = Math.floor(Math.random() * 256); //随机生成256以内b值
	return `rgb(${r},${g},${b})`; //返回rgb(r,g,b)格式颜色
}

function btnStop() {
	clearInterval(timer);
	if (flag == 1) {
		flag = 0;
	}
	if(flag == 0) {
		for (var i = 0; i <= 8; i++) {
			document.getElementById("retc" + i).style.backgroundColor = "#fea600";
		}
	}
}