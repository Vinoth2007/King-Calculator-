function appendValue(value){
    document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function calculate(){
    try{
        document.getElementById("display").value =
        eval(document.getElementById("display").value);
    }catch{
        document.getElementById("display").value = "Error";
    }
}

function squareRoot(){
    let x = eval(display.value);
    display.value = Math.sqrt(x);
}

function square(){
    let x = eval(display.value);
    display.value = Math.pow(x,2);
}

function cube(){
    let x = eval(display.value);
    display.value = Math.pow(x,3);
}

function power(){
    appendValue("**");
}

function sin(){
    display.value =
    Math.sin(eval(display.value)*Math.PI/180);
}

function cos(){
    display.value =
    Math.cos(eval(display.value)*Math.PI/180);
}

function tan(){
    display.value =
    Math.tan(eval(display.value)*Math.PI/180);
}

function log(){
    display.value =
    Math.log10(eval(display.value));
}
