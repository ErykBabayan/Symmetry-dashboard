const clock = document.getElementById("clock");
const dateDisplay = document.getElementById("date");
const interval = 1000;

let hours;
let minutes;

setInterval(() => {
	const date = new Date();

	const dayName = date.toLocaleString("default", { weekday: "short" }); // getting name day representation of current day
	let currentDay = date.getDate();
	let currentMonth = date.getMonth() + 1;

	if (date.getDate() < 10) {
		currentDay = "0" + date.getDate();
	}
	if (date.getMonth() < 10) {
		currentMonth = "0" + (date.getMonth() + 1);
	}

	dateDisplay.textContent = `${dayName.toLocaleUpperCase()} ${currentDay}.${currentMonth}.${date.getFullYear()} `;

	hours = "0" + date.getHours();
	minutes = "0" + date.getMinutes();
	currentTime = `${date.getHours()} : ${date.getMinutes()}`;

	//adds a 0 before hours/mins if they are less than 10 ( for better visuals)
	if (date.getHours() < 10) {
		currentTime = `${hours} : ${date.getMinutes()}`;
	}
	if (date.getMinutes() < 10) {
		currentTime = `${date.getHours()} : ${minutes}`;
	}
	if (date.getHours() < 10 && date.getMinutes() < 10) {
		currentTime = `${hours} : ${minutes}`;
	}

	clock.textContent = currentTime;
}, interval);
