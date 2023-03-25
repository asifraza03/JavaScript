// function call invoke
asif();

// function  declare
function asif(){
    console.log('yuns tunner always front runners  ');
}

// function assignment(named function)
let stand =function addition(){

    console.log("addition naam hai  mera ");

}

// addition(); -> for  these call its not working
// for call->call stand

stand();
let jump = stand();

// anonymous function
let stand2 = function (){
    console.log("ye substraction hai ");

}
stand2();

let jump2 = stand2();

function sum() {
  let total = 0;
  for (let value of arguments) 
  total = total + value;
  return total;
}

let raza = sum(1, 2,3,3,3,3,3,3,);
console.log(raza);


//rest oeprator


function rest(num,value,...args)
{
    console.log(args);
}


rest(1,2,2,3,3,4,5,6);




//------DEFAULT PRAMETER--//TIMER?(36.10 JAVABASIC-4)
function value(x,y,z=10)
{
    return x*y*z/100;
}
console.log(value(100,200,));




//GETTER SETTER
//getter -access properties
//setter-change or mutate properties

let person = {
    fname : "asif",
    lname : "raza",

    get fullName(){
        return `${person.fname} ${person.lname}`;
    },
    set fullName(value){
        let part = value.split(' ');
        this.fname = part[0];
        this.lname = part[1];

 
    }
};


person.fullName = "Rahul Kumar";
console.log(person.fullName);



//-----TRY & CATCH (error HANDLING )-----
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







