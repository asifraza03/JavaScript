const countValue=document.querySelector('#counter');


const increament =() => {
    //get the value from UI
    let value = parseInt(countValue.innerText);
    //update the value from UI
    value = value + 1;
    //set the value on to UI 
    countValue.innerText = value;
}

const  decreament =() => {
    //get the value from UI
    let value = parseInt(countValue.innerText);
    //update the value from UI 
    value  = value - 1;
    //set the value on to UI
    countValue.innerText = value;
}


