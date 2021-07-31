function done (DOMelement) {
DOMelement.addEventListener('click', ()=> DOMelement.classList.toggle("checked"))
}

function addCloser (DOMelement) {
DOMelement.innerHTML += `<span class="close">×</span>`
DOMelement.querySelector('span').addEventListener('click', ()=> {
	let index = theList.indexOf(DOMelement.innerHTML.split('<')[0]);
	theList.splice(index, 1);
	saver();
	DOMelement.remove();
	})
}

function newElement() {
	value = document.querySelector('#task').value
	if (value) {
		domUlElement = document.querySelector('#list');
		li = document.createElement('li');
		li.innerHTML = value;
		document.querySelector('#task').value = '';
		domUlElement.append(li);
		theList.push(li.innerHTML)
		saver();
		done(li);
		addCloser(li);
		$('#liveToast').toast('show')
	} else {
		$('#liveToast2').toast('show')
	}
}

function generateList(l) {
		domUlElement = document.querySelector('#list');
		l.forEach(e => {
			li = document.createElement('li');
			li.innerHTML = e;
			domUlElement.append(li);
			done(li);
			addCloser(li);
		})
}

function saver () {
	localStorage.setItem('theList', JSON.stringify(theList))
}



let theList;

if (localStorage.getItem('theList')) {
	theList = JSON.parse(localStorage.getItem('theList'))
} else {
	theList = ['Drink 3 liters of water', 'Do the homeworks', 'Code for 3 hours', 'Cook', 'Read 50 pages of book'];
}

generateList(theList);
//domLiElement = document.querySelectorAll('#list>li');
//domLiElement.forEach(done);
//domLiElement.forEach(addCloser);
saver();