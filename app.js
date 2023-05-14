var result = document.getElementById("result").value
function get_num(num){

   document.getElementById("result").value+=num
}
function clearresult(){
    document.getElementById("result").value=""
}
function getresult(){
    document.getElementById("result").value = eval (document.getElementById("result").value)
}
function clear_num(){
    document.getElementById('result').value = document.getElementById('result').value.slice(0, result.length - 1);
}
