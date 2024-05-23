function getTimeFromMinutes(countOfMinutes) {
    let hour = Math.floor(countOfMinutes / 60);
    let minutes = countOfMinutes % 60;
    let timeString = "";

    if (minutes - Math.floor(minutes) !== 0 || countOfMinutes < 0) {
        timeString = "Ошибка, проверьте данные";
    } else if (hour >= 2 && hour <= 4) {
        timeString = `Это ${hour} часа и ${minutes} минут`;
    } else if ( hour === 0 || hour >= 5) {
        timeString = `Это ${hour} часов и ${minutes} минут`;
    } else {
        timeString = `Это ${hour} час и ${minutes} минут`;
    }


    return console.log(timeString);
}

getTimeFromMinutes(15.5);


function findMaxNumber(arg1, arg2, arg3, arg4) {
    if (!arg1 || !arg2 || !arg3 || !arg4 || typeof(arg1) !== "number" || typeof(arg2) !== "number" || typeof(arg3) !== "number" || typeof(arg4) !== "number") {
        return 1;
    } else if (arg1 > arg2 && arg1 > arg3 && arg4) {
        return arg3;
    } else if (arg2 > arg1 && arg2 > arg3 && arg4) {
        return arg2;
    } else if (arg3 > arg1 && arg3 > arg2 && arg3 > arg4) {
        return arg3;
    } else {
        return arg4;
    }
}

findMaxNumber(1, 2, 333, "3333");