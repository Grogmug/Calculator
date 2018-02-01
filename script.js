function addNumbers() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var result = a + b;
    document.getElementById("result").setAttribute("value", result);
}
function subNumbers() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var result = a - b;
    document.getElementById("result").setAttribute("value", result);
}
function multiNumbers() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var result = a * b;
    document.getElementById("result").setAttribute("value", result);
}
function divNumbers() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var result = a / b;
    document.getElementById("result").setAttribute("value", result);
}