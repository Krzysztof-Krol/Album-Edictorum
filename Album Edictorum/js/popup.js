// Display list from localstorage.
var i = 0;
for (i = 0; i < localStorage.length; i++){
	var taskID = localStorage.key(i);
	var newLi = document.createElement('li');
	newLi.setAttribute('id', taskID);
	displayCheckList = document.getElementById('checklist');
	newContent = document.createTextNode(localStorage.getItem(taskID));
	newLi.appendChild(newContent);
	displayCheckList.appendChild(newLi);
}

// Add item to list.
document.getElementById('tbtn').addEventListener('click', newTemp);
function newTemp() {
	var message = document.getElementById('tempInput').value;
	if (message === '') {
		alert('Please write an edict content, Sir.');
	}
	else {
		var taskID = new Date().getTime();
		localStorage.setItem(taskID, message);
		var newLi = document.createElement('li');
		newLi.setAttribute('id', taskID);
		displayCheckList = document.getElementById('checklist');
		newContent = document.createTextNode(message);
		newLi.appendChild(newContent);
		displayCheckList.appendChild(newLi);
	}
	location.reload();
}

// Remove li element on click.
function congratulations() {
	var image = document.createElement('img');
	image.setAttribute('src', 'img/gz.png');
	image.setAttribute('class', 'gz');
	document.getElementById('content').appendChild(image);
}
var liElements = document.getElementsByTagName('li');
function removing() {
	if (liElements.length === 1) {
		this.remove();
		localStorage.removeItem(this.id);
		congratulations();
	}
	else {
		this.remove();
		localStorage.removeItem(this.id);
	}
}
for (i = 0; i < liElements.length; i++) {
	liElements[i].addEventListener('click', removing);
}


// Clear All button.
document.getElementsByClassName('clearAll')[0].addEventListener('click', clearAll);
function clearAll() {
	localStorage.clear();
	location.reload();
}
