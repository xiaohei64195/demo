var count = 0;
var oPicUL = document.getElementsByTagName('ul')[0],
	moveWidth = oPicUL.children[0].offsetWidth;
var oI = document.getElementsByTagName('i'),
	oILen = oI.length;
var oBtnleft = document.getElementsByClassName('btn-left')[0],
	oBtnright = document.getElementsByClassName('btn-right')[0],
	oBox = document.getElementsByTagName('div')[0];
var boolen = true;
var realPicNum = oPicUL.children.length - 1;
var timer = window.setInterval(autoMove,3000);
oBtnleft.onclick = function () {
	autoMove(-1);
}
oBtnright.onclick = function () {
	autoMove(1);
}
oBox.onmouseover = function () {
	clearInterval(timer);
}
oBox.onmouseout = function () {
	timer = window.setInterval(autoMove,3000)
}
for (var i = 0; i < oILen; i ++) {
	oI[i].onclick = (function (i) {
		return function () {
			count = i;
			changeCir(count);
			move(oPicUL,{left: -moveWidth * i},function () {
				boolen = true;
			});
		}
	})(i)
}
function autoMove(demo){
	if (boolen) {
		boolen = false;
		if (demo == 1 || !demo) {
			count ++;
			if (count == 6) {
				count = 0;
			}
			changeCir(count);
			move(oPicUL,{left: oPicUL.offsetLeft - moveWidth},function () {
				if (count == 0) {
					oPicUL.style.left = '0px';
				}
				boolen = true;
			});
		}else if (demo == -1) {
			if (oPicUL.offsetLeft == 0) {
				oPicUL.style.left = -moveWidth * realPicNum + 'px';
				count = realPicNum;
			}
			count --;
			changeCir(count);
			move(oPicUL,{left: oPicUL.offsetLeft + moveWidth},function () {
				boolen = true;
			});
		}
	}
}
function changeCir(demo) {
	for (var i = 0; i < oILen; i ++) {
		oI[i].className = '';
	}
	oI[demo].className = 'cir-change';
}




