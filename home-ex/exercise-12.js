const someString = 'This is some strange string';

function reverse(str) {
    let newStr = "";
    if (typeof(str) !== "string") {
        return "Ошибка!";
    } else {
        for (let i = str.length - 1; i >= 0; i--) {
        newStr += `${str[i]}`;
        }
    }
    
    return newStr;
}
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = "Доступные валюты:\n"
    
    if (arr.length === 0) {
        return "Нет доступных валют";
    } else {
        for (let val in arr) {
            if (arr[val] === missingCurr) {
                continue;
            } else {
                str += `${arr[val]}\n`
            }
        } 
    }
    return str;
}