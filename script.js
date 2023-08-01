
function calculate(){
    let val = document.getElementById("input-value");
    let result = document.getElementById("result");
    let input = document.getElementById("input");
    let output = document.getElementById("output");

    val.addEventListener("keyup",calculate);
    input.addEventListener("change",calculate);
    output.addEventListener("change",calculate);
    
    let inputValue = input.value;
    let outputValue = output.value;
    
/*************** calculation of celsius  ********************/
if(inputValue === "celsius" && outputValue === "fahrenheit"){
    result.value=Number((val.value*9) /5)+32;
} else if(inputValue === "celsius" && outputValue === "celsius"){
    result.value = val.value;
}

/************** calculation of fahrenheit ******************/
if(inputValue === "fahrenheit" && outputValue === "celsius"){
    result.value=Number((val.value - 32) * 5) / 9;
} else if(inputValue === "fahrenheit" && outputValue === "fahrenheit"){
    result.value = val.value;
}
}


/*********************  Reset    *********************************** */
function resetform(){
    document.getElementById("myForm").reset();
}