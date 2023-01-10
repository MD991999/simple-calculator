function display(num){
    result.value+=num
}
function allClear(){
    result.value=''
}
function output(){
    // console.log(result.value)
    // console.log(typeof(result.value))
    // in js the values that we access from the html is of the form of string
result.value=eval(result.value)
}
function Backspace(){
    result.value=result.value.slice(0,-1)
}