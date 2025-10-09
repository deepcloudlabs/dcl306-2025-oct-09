let meyveler = [
    "Elma", "aRmut", "Domates", "karpuz", "kİraz", "portakal", "muz", "İncir",
    "çilek", "şeftali", "nar", "kivi"
];
console.log(meyveler);
meyveler.sort(function(meyve1,meyve2){
    return meyve1.localeCompare(meyve2,"tr");
});
console.log(meyveler);
