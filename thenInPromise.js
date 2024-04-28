Promise.resolve(1) //resolves immediately , and returns 1 because .then() is called in 2nd line
.then(2) //no callback function , ()=>2 so javascript will ignore then(2)
.then(Promise.resolve(3))//will resolve immediately but since no then is attached to Promise.resolve() the outut is not printed
.then(console.log)//until step 3 we had 1 as an output now in the final then , since console.log is a valid callback function console.log will execute and prints 1