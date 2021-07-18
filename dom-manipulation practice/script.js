let input1 = document.getElementById("inputText1")
let input2 = document.getElementById("inputText2")

let num1 = 0
let num2 = 0


input1.onchange = (e) => {
    num1 = e.target.value
    parseInt(num1)
}

input2.onchange = (e) => {
    num2 = e.target.value
    parseInt(num2)
}

function calculate(num1, num2){
    
}
