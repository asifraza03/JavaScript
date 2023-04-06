console.log('hello kese ho sare');





// let wadda =new Promise (
//     function(resolve,reject){
//         setTimeout(()=>{
//             console.log("my name is asif");
//         },1000);
//         resolve(7000);
//     }
// )



// wadda.then(()=>{
//     let wadda4 = 5;
    
//     return wadda4;
// }).then((value) => console.log(value));





//----ASYNC FUNCTION-----//


//async function is return in the form of argument 

// async function abcd(){
//     return "asif raza";
// }

// console.log(abcd());








 async function utility(){
    let delhiKaMosam = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("delhi me bohtot garmi hai ");

        },3000);
    });



    let hydKaMosam = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("hyd ka cool hai  ");

        },3000);
    });



    let mumbaiKaMosam = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("mumbai meh barish hai  ");

        },4000);
    });


    let dM =delhiKaMosam;
    let hM = hydKaMosam;
    let mB =mumbaiKaMosam;
    return [dM,hM,mB];

// the promise are running parallely if you want to run one by one you have to use AWAIT KEYWORD->
// dM =  await delhiKaMosam



 }




//------------FATCH API--------??????
//try MDN 



//-------------CLOSURE---------////
//ry MDN

//nested function
//CLusure

//reference stored NOT COPY 


///HOMEWORK-----
//clases and module.





















