//hw - ex 7

function calculateVolumeAndArea(lengthLine) {
	let result;
	if (lengthLine <= 0 || !Number.isInteger(lengthLine) || lengthLine == null || isNaN(lengthLine)) {
		result = "При вычислении произошла ошибка";
	} else {
		let volume = lengthLine * lengthLine * lengthLine;
		let area = lengthLine * lengthLine * 6;
		result = `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
	}

	return console.log(result);
}

calculateVolumeAndArea(5);



function getCoupeNumber(int) {
	let result;
	if (!isNaN(int) && Number.isInteger(int) && int >= 1 && int <= 35) {
		if (int >= 1 && int <= 4) {
			result = 1;
		} else if (int >= 5 && int <= 8) {
			result = 2;
		} else if (int >= 9 && int <= 12) {
			result = 3;
		} else if (int >= 13 && int <= 16) {
			result = 4;
		} else if (int >= 17 && int <= 20) {
			result = 5;
		} else if (int >= 21 && int<= 24) {
			result = 6;
		} else if (int >= 25 && int <= 28) {
			result = 7;
		} else if (int >= 29 && int <= 32) {
			result = 8;
		} else {
			result = 9;
		}
	} else if (int < 0 || !Number.isInteger(int)) {
		result = "Ошибка. Проверьте правильность введенного номера места";
	} else if (int === 0 || int > 36) {
		result = "Таких мест в вагоне не существует";
	}

	return console.log(result);
}

getCoupeNumber(33);