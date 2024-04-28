function asyncTask(){
    return new Promise((res)=>{
        res();
    })
}

const x = asyncTask()
    .then(()=>{
        console.log('First');
    })
    .catch()
    .then(()=>{
        console.log('Second');
    })

//Prints both because in promise if it has only resolve() then in promise call function catch() becomes invalid hence the above code prints both 'first' and 'second'

"###############################################################################################################################################################"


async function check(){
    try{
    const data = await Promise.reject('error');
    console.log(data);
    }catch(err){
      console.log("error",err);
    }
}
check();//error prints console.log in catch because we used try catch ,UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block


// it will throw an error because you're trying to await a rejected promise without wrapping it in a try...catch block or handling the rejection with .catch().
// The await keyword is used to wait for the completion of a Promise. If the Promise is rejected (as in Promise.reject('error')), it will throw an error. The try...catch block allows us to catch and handle this error gracefully.


//When a Promise is rejected, it enters a "rejected" state, and if that Promise is awaited, the await expression will throw an error with the rejection reason. This error can then be caught and handled using a try...catch block.