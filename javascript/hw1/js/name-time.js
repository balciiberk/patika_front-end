
let name = prompt('What is your name?');
document.querySelector('#inputName').innerHTML = name;


function dater() {
	let date = new Date;
	let h = date.getHours();
	let m = date.getMinutes();
	let s = date.getSeconds();

	// 3 different methods for 3 of them to exercise all
	if (h < 10) {
	h = '0' + h;
	}

	switch (true) {
		case m<10:
			m = '0' + m
			break;
	}

	s = s < 10 ? '0' + s : s;

	document.querySelector('#times').innerHTML = `${h}:${m}:${s}`; 
}

setInterval(dater,1000)