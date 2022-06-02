function introduction(name) {
    return `Hi, my name is ${name}.`;
}
introduction("Aki");
introduction("Samip");


function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage("Aki", "Ember.js");
introductionWithLanguage("Samip", "React");


function introductionWithLanguage(name, language="Javascript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage("Gracie");

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage("Gracie", "Python");