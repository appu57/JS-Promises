( async function(){
  console.log(1);

  setTimeout(()=>console.log(2),0);
  await new Promise(resolve=> resolve(console.log(3)));
  console.log(4);
})();
//1 3 4 2
//console.log(3) is executed immediately and logs 3 synchronously.new Promise(resolve => resolve(console.log(3))) creates a promise that resolves immediately with the value returned by console.log(3), which is undefined.Since await is used, the execution of the async function is paused until the promise is resolved. However, since the promise resolves immediately, there's no actual pause in this case.