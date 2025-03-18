function Calculate() {
	const principalamt = document.getElementById("principal");
	const rate = document.getElementById("rate");
	const years = document.getElementById("years");
	const totalamt = document.getElementById("total-amount");

	let principal = Number(principalamt.value);
	let year = Number(years.value);
	let rates = Number(rate.value / 100);
	let result = principal * Math.pow(1 + rates / 1, 1 * year);

	if (principal < 0 || isNaN(principal)) {
		principal = 0;
		principalamt.value = 0;
	}

	if (rates < 0 || isNaN(rates)) {
		rates = 0;
		rate.value = 0;
	}

	if (year < 0 || isNaN(year)) {
		year = 0;
		years.value = 0;
	}

	totalamt.textContent = result.toLocaleString("hi-IN", {
		style: "currency",
		currency: "INR",
	});
}
