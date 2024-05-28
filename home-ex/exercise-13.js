const shoppingMallData = {
    shops: [
        {
            width: 5,
            length: 5
        },
        {
            width: 5,
            length: 5
        },
        {
            width: 5,
            length: 5
        },
        {
            width: 5,
            length: 5
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 45000
}

function isBudgetEnough(data) {
    let width = 0,
    length = 0;
    data.shops.forEach((shop) => {
        width += shop.width;
    });
    data.shops.forEach((shop) => {
        length += shop.length;
    });

    // let area = 0;
    // data.shops. forEach((shop) => {
    //     area += shop.width * shop.length;
    // });

    let area = width * length / 4;
    let volume = area * data.height;

        if (data.budget >= (volume * data.moneyPer1m3)) {
            console.log("Бюджета достаточно");
        } else {
            console.log("Бюджета недостаточно");
        }
}

isBudgetEnough(shoppingMallData);