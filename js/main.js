
let octal_number = document.querySelector("#octal_number");
let submit_button = document.querySelector("#btn");

submit_button.addEventListener("click",show_result);

function show_result(){
    let decimal_number = document.querySelector("#decimal_number").value;

    if(decimal_number === ''){
        alert("Please enter a number");
    }
    else if(decimal_number < 0){
        alert("Please enter a positive number");
    }
    else{

    }

    let result = Number(decimal_number).toString(8);
    octal_number.innerHTML = result;
}