//---------------function call---------
function raza(){
    console.log("my name is asif ");
}

raza();



//------Function using let----------
let jumpKar= function addition(){
    console.log('this is my addition department');
}
jumpKar();




//----------We an use without FUnction name(Anonymous FUnction )---
let kurkure = function(){
    console.log('this is subtraction department');
}


kurkure();


//------Addition Using Function------
function sum()
{
    let total=0;
    for(let value of arguments)
       total+=value;
       return total;
}
let stand = sum(1,2,3,3,3,3,3,3,3,3,3,3);
console.log(stand);




//---function with rest Operator------
//rest operator is use for list down int the form of array
function rest(num,value,...arg)
{
    console.log(arg);
}
rest(1,2,3,4,5,6,7,8,9,0);








//------DEFAULT PRAMETER--//TIMER?(36.10 JAVABASIC-4)
function value(x,y,z=10)
{
    return x*y*z/100;
}
console.log(value(100,200,));



// GETTER SETTER
// getter -access properties
// setter-change or mutate properties


let person = {
    fname : 'asif',
    lname : 'raza',

    get fullName(){
        return `${person.fname} ${person.lname}`;
    },
    set fullName(value){
        let part = value.split(' ');
        this.fname = part[0];
        this.lname = part[1];

    }
}
person.fullName = 'Omar farooq';
console.log(person.fullName);


// -----TRY & CATCH (error HANDLING )-----
let a=1;
try{
    a=string;
}
catch(e){
    alert("error found here");
}


console.log(a);


//------------SCOPE------------//
//let
//{
    //let is only work in "{}" these outside it is not work
    
//}

//var
//{

    //var  is  work in "{}" and ouside also


//}


//const
//{
    //const for only for there function 

//}

///----------------------------///



//------------REDUCING AN ARRAY----------------//


let arr = [15,23,55,8];


let total = 0;
for(let value of arr)
{
    total += value;

}
console.log(total);


let totalSum = arr.reduce((accummulator,currentVAlue) => accummulator+currentVAlue,0);

console.log(totalSum);




