function doTask(){
    return new Promise((resolve,reject)=>{
        reject();
        resolve();
    })
}

let promise = doTask();

promise.then((res)=>{
    console.log("Resolve is executed");
})
.catch((err)=>{
    console.log("Reject is printed because reject was called first");
})


/* JA Promise.all JA */

function promise1(){
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
         resolve("1nd Promise")
       }, 1000);
    })
}

let prom1=promise1();

function promise2(){
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
         resolve("2nd Promise")
       }, 2000);
    })
}

let prom2=promise2();

const promises = [prom1,prom2];
Promise.all(promises).then((value)=>{
    console.log(value);
})
.catch((err)=>{
    console.log(err);
})

/* Async and sync differentiation */

console.log("start");
function test(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ //makes promise asynchronous so first start then Synchronous and end
            for(let i=0;i<5;i++)
            {
                console.log("Asynchronous code"+i);
            }
        },1000);
        for(var i=0;i<5;i++) //synchronous
        {
            console.log(i);
        }
        console.log("Synchronous code because when callback is executed it returns the callback() and blocks the execution until code is executed");
    })
}
test();
console.log("end");



