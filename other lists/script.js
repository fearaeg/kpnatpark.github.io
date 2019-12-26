'use strict';
window.onload = function () {

	document.getElementById('toggler').onclick = function () {
		openbox("box", this);
		return false;
	};
};
function openbox(id, toggler) {
	var div = document.getElementById(id);
	if (div.style.display !== 'block') {
		div.style.display = "block";
		toggler.innerHTML = "Закрыть";
	} else {
		div.style.display = "none";
		toggler.innerHTML = "Открыть";
	}
}
