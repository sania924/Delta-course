

// promise 
function savetoDb(data){
    return new Promise((resolve,reject)=>{ // promise syntax 
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            console.log("hello")
            resolve("data saved");
        } 
        else{
            reject("data rejected");
        }
    })
}
// call a function after resove or rejectt a function which
//  function will perform that in then and catch 
savetoDb("apna college") 
.then((result)=>{   //then send a call back 
    console.log("data 1 was resolve ")
    console.log(result)

return savetoDb("hello world");
})
.then((result)=>{
    console.log("data 2 saved");
    console.log(result)

    return savetoDb("sania");
})
.then((result)=>{
    console.log("data3 saved ")
    console.log(result)

})
.catch((error)=>{ //catch send a call back 
    console.log("promise was rejected")
    console.log(error)

})


// asyn and await
let h1=document.querySelector("h1")
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            console.log( `color change to ${color}`);
            resolve("color change")
        },delay)
    })
}
async function demo(){
try{
    await   changeColor("red",1000);
    await  changeColor("green",1000);
    await  changeColor("yellow",1000);
    await  changeColor("blue",1000);
}
catch{
 console.log("error ")   
}
let a=5;
console.log(a+9);
}
demo();
