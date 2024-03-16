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