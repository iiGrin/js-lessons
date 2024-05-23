function fib(num) {
    let str = "";
    let a = 0;
    let b = 1;
    if (typeof(num) !== "number" || num <= 0 || !Number.isInteger(num)) {
        return "";
    }
    
    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            str += `${a}`;
        } else {
            str += `${a} `;
            let c = a + b;
            a = b;
            b = c;
        }
    }
    return str;
}