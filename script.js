const input = document.getElementById("input");
const button = document.getElementById("button");
const newMessage = document.getElementById("delivered-message");

function checkInputLength() {
	if (input.value.length > 0) {
		return true;
	} else {
		return false;
	}
}
function deliverMessageClick() {
	if (checkInputLength()) {
		newMessage.innerHTML = input.value;
		input.value = "";
	} else {
		alert("Please write a message");
	}
}

function deliverMessageKey(event) {
	if (checkInputLength() && event.keyCode === 13) {
		newMessage.innerHTML = input.value;
		input.value = "";
	} else if (checkInputLength() === false && event.keyCode === 13) {
		alert("Please write a message");
	}
}

button.addEventListener("click", deliverMessageClick);
input.addEventListener("keypress", deliverMessageKey);
