'use strict';
window.onload = function () {
	document.getElementById('4').onclick = function () {
        opelbox("1", "2", "3");
		return false;
	};
    document.getElementById('8').onclick = function () {
        opelbox("5", "6", "7");
		return false;
	};
   document.getElementById('12').onclick = function () {
        opelbox("9", "10", "11");
		return false;
	};
};

function opelbox(id, id2, id3) {
	var div3 = document.getElementById(id3),
        div2 = document.getElementById(id2),
        div = document.getElementById(id);
	if (div.style.visibility !== 'visible') {
        div.style.visibility = "visible";
        div2.style.visibility = "visible";
        div3.style.visibility = "visible";
	} else {
        div.style.visibility = "hidden";
        div2.style.visibility = "hidden";
        div3.style.visibility = "hidden";
	}
}
