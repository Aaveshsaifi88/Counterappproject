/* // getting the html element */
const decrementbtn= document.getElementById("decrementbtn");
const incrementbtn = document.getElementById("incrementbtn")
const resetbtn= document.getElementById("resetvalue")
const displayvalue = document.getElementById("displayvalue");

//decrement butto click
decrementbtn.addEventListener("click",() => {
    const value =Number (displayvalue.innerText)
    if (value > 0){
        displayvalue.innerText=value-1;  }
    else {
        alert("Negative value are not allowed")
    }
});

//Increment button clickkk

incrementbtn.addEventListener("click" ,() =>{
    const value = Number(displayvalue.innerText)
    if(value >=10){
        alert("10+ values are not allowed")  
    }
    else{
        displayvalue.innerText=value+1;
    }
});
//for reset button

resetbtn.addEventListener("click",()=>{
    displayvalue.innerText=0;

});

