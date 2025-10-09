let meyveler = [
    "elma", "armut", "domates", "karpuz", "kiraz", "portakal", "muz",
    "çilek", "şeftali", "nar", "kivi"
];

console.log(meyveler[0]); //elma
console.log(meyveler[1]); //armut
console.log(meyveler[meyveler.length - 1]); //kivi
console.log(meyveler[-1]); // undefined
console.log(meyveler[100]); // undefined
// external loop
for (let i = 0; i < meyveler.length; i++) {
    console.log(meyveler[i]);
}

for (let i in meyveler) {
    console.log(meyveler[i]);
}

for (let meyve of meyveler) {
    console.log(meyve);
}
// internal loop
meyveler.forEach(meyve => console.log(meyve)); // lambda expression/arrow function
meyveler.forEach(function (meyve) { // traditional function
    console.log(meyve);
});
console.log("5-letter fruits");
for (let meyve of meyveler) {
    //if (meyve.match(/^[a-zA-ZöçşüğıİÜĞÇÖ]{5,6}$/)){
    if (meyve.match(/^\\w{5,6}$/)){
        console.log(meyve);
    }
}