import zero from './zero'
export default function convertTime (date) {	
	return {
		year         : zero(date.getFullYear()),
		month        : zero(date.getMonth() + 1),
		day          : zero(date.getDate()),
		hours        : zero(date.getHours()),
		minutes      : zero(date.getMinutes()),
		seconds      : zero(date.getSeconds()),
		milliSeconds : zero(date.getMilliseconds())
	}
}