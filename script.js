const numbers = [67, 80, 65, 79, 86, 66, 75, 71, 81, 69, 90, 79, 68, 65, 73, 88];
const letter = [];

function convert() {
    for (var i = 0; i < numbers.length; i++) { 
    letter += numbers[i];
    
    var num = String.fromCharCode(numbers); //(numbers[13]);
    //document.getElementById("answer").innerHTML = num;
    }
}
