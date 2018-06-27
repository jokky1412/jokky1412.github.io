//var randomNumber = randomFrom(1,10);	//产生一个随机数
var flag = 1;	//全局变量，控制开始和停止

function btnStart() {
	flag = 1;
	if (flag==1) {

			var count=9; 
			var originalArr=new Array;//原数组 
			//给原数组originalArr赋值 
			for (var i=0;i<=count-1;i++){ 
				originalArr[i]=i; 
			} 
			//alert("originalArr: " + originalArr);
			originalArr.sort(
				function() { 
					return 0.5 - Math.random(); 
				}
			);
			// Math.random() 返回介于 0 ~ 1 之间的一个随机数。
			// 


			document.getElementById("para").innerHTML = originalArr;
			document.getElementById("index").innerHTML = (originalArr[0]+"，"+originalArr[1]+"，"+originalArr[2]); 
			document.getElementById("retc"+originalArr[0]).style.backgroundColor = "red";
			document.getElementById("retc"+originalArr[1]).style.backgroundColor = "red";
			document.getElementById("retc"+originalArr[2]).style.backgroundColor = "red";

			document.getElementById("retc"+originalArr[3]).style.backgroundColor = "#fea600";
			document.getElementById("retc"+originalArr[4]).style.backgroundColor = "#fea600";
			document.getElementById("retc"+originalArr[5]).style.backgroundColor = "#fea600";
			document.getElementById("retc"+originalArr[6]).style.backgroundColor = "#fea600";
			document.getElementById("retc"+originalArr[7]).style.backgroundColor = "#fea600";
			document.getElementById("retc"+originalArr[8]).style.backgroundColor = "#fea600";
			document.getElementById("retc"+originalArr[9]).style.backgroundColor = "#fea600";



	}

}

function btnStop() {
	flag = 0;
	if(flag==0)
		for (var i = 0; i <= 8; i++) {
			document.getElementById("retc"+i).style.backgroundColor = "#fea600";
		}

	//document.getElementById("retc1").style.backgroundColor = "#fea600";

}