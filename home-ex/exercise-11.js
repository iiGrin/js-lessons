const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = `Семья состоит из: `;
    if (arr.length === 0) {
        return 'Семья пуста';
    } else {
        for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]} `;
        }
    }
    
    return str;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach((val) => {
		console.log(val.toLowerCase());
	});
}

