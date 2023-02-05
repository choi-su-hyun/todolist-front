export function getDate() {
	const today = new Date();
	let month = today.getMonth() + 1;
	month = month > 9 ? month : `0${month}`;
	let date = today.getDate();
	date = date > 9 ? date : `0${date}`;
	let week = ['일', '월', '화', '수', '목', '금', '토'];
	let day = week[today.getDay()];
	let hour = today.getHours();
	hour = hour > 9 ? hour : `0${hour}`;
	let minutes = today.getMinutes();
	minutes = minutes > 9 ? minutes : `0${minutes}`;
	let seconds = today.getSeconds();
	seconds = seconds > 9 ? seconds : `0${seconds}`;

	let todayData = {
		year: today.getFullYear(),
		month: month,
		date: date,
		day: day,
		hours: hour,
		minutes: minutes,
		fullDate: `${today.getFullYear()}년 ${month}월 ${date}일 ${day}요일 ${hour}:${minutes}:${seconds}`,
	};
	return todayData;
}
