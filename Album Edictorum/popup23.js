// Let storedTasksTemp_items to display in #content.
var i;
for (i=0; i<localStorage.length; i++){
	var tempID = 'temp-' + i;
	var newLi = document.createElement('li').setAttribute('id', 'tempID');
		displayCheckList = document.getElementById('checklist');
		newContent = document.createTextNode(localStorage.getItem(tempID));
	newLi.appendChild(newContent);
	displayCheckList.appendChild(newLi);
}

//May input adding items to array works by function.
//najpierw działający input, później przerób na formularz.
document.getElementById('tbtn').addEventListener('click', newTemp);
function newTemp(){

	if (document.getElementById('tempInput').value != ''){
		var tempID = 'temp-' + i;
		var tempMessage = document.getElementById('tempInput').value;
		localStorage.setItem(tempID, tempMessage);
		var newLi = document.createElement('li').setAttribute('id', 'tempID');
		displayCheckList = document.getElementById('checklist');
		newContent = document.createTextNode(localStorage.getItem(tempID));
		newLi.appendChild(newContent);
		displayCheckList.appendChild(newLi);
		i++;
	}
	return false;


	//Clearing up value input after clicked button.
	var input = document.getElementById("tempInput");
	input.value = ''

}


