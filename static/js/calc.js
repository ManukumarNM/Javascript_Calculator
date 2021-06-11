var numKeys = [];
var opns = [];
var res = document.querySelector("#resultArea");
var clrBtn = document.querySelector("#clrTxt");
var delBtn = document.querySelector("#del");
var equBtn = document.querySelector("#equ");
var decPoint = document.querySelector("#poi");
var calMod = document.querySelector('#cal5');
var calPow = document.querySelector('#cal4');
var opnSyms = ["+", "-", "*", "/","**","//"];

for(var i=0;i<=9;i++){
	(function(i){
    	qs = "#num" + i;
		numKeys.push(document.querySelector(qs));
		numKeys[i].addEventListener("click", function(){
			res.textContent += i;
		});
  	}(i));
}

for(var i=0;i<=5;i++){
	(function(i){
    	qs = "#cal" + i;
		opns.push(document.querySelector(qs));
		opns[i].addEventListener("click", function(){
			res.textContent += opnSyms[i];
		});
  	}(i));
}

clrBtn.addEventListener("click", function(){
	res.textContent = "";
});

delBtn.addEventListener("click", function(){
    res.textContent = res.textContent.substring(0, res.textContent.length - 1);
});

decPoint.addEventListener("click", function(){
	res.textContent += ".";
});

equBtn.addEventListener("click", function(){
	try{
		res.textContent = eval(res.textContent);
	}
	catch(e){
		res.textContent = "Invalid Syntax";
	}
});