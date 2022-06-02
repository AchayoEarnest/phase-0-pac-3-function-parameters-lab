function introduction(name) {
    console.log(`Hi, my name is ${name}!`);
}
introduction("Aki");


function introductionWithLanguage(name, language){
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introductionWithLanguage("Aki", "Ember.js");


function introductionWithLanguage(name, language){
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introductionWithLanguage("Aki", "javascript");

function introductionWithLanguage(name, language = "Javascript"){
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introductionWithLanguage("Aki", "React");