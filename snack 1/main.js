
const number1 = prompt("Insert number 1")
const number2 = prompt("Insert number 2")


if (number1 < number2) {
    console.log(number2)
} else if (number2 < number1) {
    console.log(number1)
} else {
    console.log(`numbers are equal`)
}

