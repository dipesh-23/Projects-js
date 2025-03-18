const display = document.getElementById("input");

function appendtodisplay(input) {
	display.value += input;
}

function cleardisplay() {
	display.value = "";
}

function calculate() {
	try {
		display.value = eval(display.value);
	} catch (error) {
		display.value = "Error";
	}
}

function clearletter() {
	display.value = display.value.slice(0, -1);
}
