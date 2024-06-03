const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];


function sortStudentsByGroups(arr) {
    let group = [];
    arr.sort();

    for (let i = 0; i < 3; i++) group.push(arr.splice(0, 3));
        group.push(`Оставшиеся студенты: ${!arr.length ? `-` : arr.join(", ")}`);


    return group;
}

sortStudentsByGroups(students);