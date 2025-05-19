function append(value) {
    let result = document.getElementById('result');
    result.value += value;
}
function calculate(){
    let result = document.getElementById('result');
    try{
        result.value = eval(document.getElementById('result').value);
    }
    catch{
        result.value = "Error";
    }
}
function clearResult(){
    let result = document.getElementById('result');
    result.value = "";
}
function backspace(){
    let currentValue = document.getElementById('result').value;
    result.value = currentValue.slice(0, -1);
}