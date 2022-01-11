const arr = [-4, 3, -9, 0, 4, 1];

const plusMinus = (arr) => {
	const positiveNum = [],
		negativeNum = [],
		zeroNum = [];
	
	arr.forEach(checkNum)
	
	function checkNum(num) {
		if (!isNaN(num)) {
			if (num > 0) {
				positiveNum.push(num)
			} else if (num < 0) {
				negativeNum.push(num)
			} else {
				zeroNum.push(num)
			}
		}
	}
	
	console.log(positiveNum.length / arr.length)
	console.log(negativeNum.length / arr.length)
	console.log(zeroNum.length / arr.length)
}

plusMinus(arr)