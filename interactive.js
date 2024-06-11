let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")
let number = document.getElementById("number")

const btn = document.getElementById("btn")
 
btn.addEventListener("click", function() {
    length.innerHTML = `${number.value} meters = ${(number.value*3.281).toFixed(3)} feet | ${number.value} feet = ${(number.value/3.281).toFixed(3)} meters`
    volume.innerHTML = `${number.value} liters = ${(number.value*0.264).toFixed(3)} gallons | ${number.value} gallons = ${(number.value/0.264).toFixed(3)} liters`
    mass.innerHTML = `${number.value} kilos = ${(number.value*2.204).toFixed(3)} pounds | ${number.value} pounds = ${(number.value/2.204).toFixed(3)} kilos`
})

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/