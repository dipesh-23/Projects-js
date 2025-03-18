function times() {
	const time = new Date();

	let hour = time.getHours();
	const merediem = hour > 12 ? "PM" : "AM";
	hour = hour % 12;
	if (hour < 12) {
		hour = hour.toString().padStart(2, "0");
	} else {
		hour = 12;
	}

	const minutes = String(time.getMinutes()).padStart(2, "0"); // Ensure 2-digit format
	const seconds = String(time.getSeconds()).padStart(2, "0"); // Ensure 2-digit format

	const string = `${hour}:${minutes}:${seconds} ${merediem}`;
	document.getElementById("clock").textContent = string;
}

times(); // Call immediately to display time
setInterval(times, 1000); // Update every second
