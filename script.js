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

function createMessage() {
	newMessage.innerHTML = input.value;
	input.value = "";
}
function deliverMessageClick() {
	if (checkInputLength()) {
		createMessage();
	} else {
		alert("Please write a message");
	}
}

function deliverMessageKey(event) {
	if (checkInputLength() && event.keyCode === 13) {
		createMessage()
	} else if (checkInputLength() === false && event.keyCode === 13) {
		alert("Please write a message");
	}
}

button.addEventListener("click", deliverMessageClick);
input.addEventListener("keypress", deliverMessageKey);
