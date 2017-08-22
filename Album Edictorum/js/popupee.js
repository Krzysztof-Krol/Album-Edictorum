
var i = 0;
for (i = 0; i < localStorage.length; i++){
	var tempID = 'temp-' + i;
	document.getElementById('checklist').append('<li id="' + tempID + '">' + localStorage.getItem(tempID) + '</li>');
}

document.getElementById('tempform').submit(function (){
	if (document.getElementById('tempInput').value != ''){
		var tempID = 'temp-' + i;
		var tempMessage = document.getElementById('tempInput').value;
		localStorage.setItem(tempID, tempMessage);
		document.getElementById('checklist').append('<li id="' + tempID + '">' + tempMessage + '</li>');
		document.getElementById('tempInput').value('');
		i++;
	}
	return false;
});


