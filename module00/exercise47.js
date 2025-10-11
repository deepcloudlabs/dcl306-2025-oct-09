console.log("1. Start");
setTimeout(function(){
    console.log("5/6. setTimeout(): timer queue");
},0);
setImmediate(()=>{
    console.log("5/6. setImmediate: timer queue");
})
Promise.resolve().then(() =>{
   console.log("4. Microtask")
});
process.nextTick(()=>{
    console.log("3. process.nextTick()");
})
console.log("2. End");