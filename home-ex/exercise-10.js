const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            ruby: '30%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {        
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `
        });
        
        return str;
    }
};





function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}


function showProgrammingLangs(plan) {
    let str = "";
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        let val = programmingLangs[key]
        str += `Язык ${key} изучен на ${val}\n`
    }
    
    return str;
}