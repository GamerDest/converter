/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/ 
const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const feet = document.getElementById("conv-feet")
const gal = document.getElementById("conv-gal")
const pnd = document.getElementById("conv-pnd")
const headerEl = document.getElementById("header-el")
btnEl.addEventListener("click", function(){
    convert(inputEl.value)
    easter(inputEl.value)
})
function convert(value){
    feet.textContent = `${inputEl.value} meters ≈ ${(inputEl.value * 3.281).toFixed(2)} feet | ${inputEl.value} feet ≈ ${(inputEl.value /  3.281).toFixed(2)} meters`
    gal.textContent = `${inputEl.value} liters ≈ ${(inputEl.value * 0.264).toFixed(2)} gallons | ${inputEl.value} gallons ≈ ${(inputEl.value * 3.78541).toFixed(2)} liters`
    headerEl.innerHTML = ""
    pnd.textContent = `${inputEl.value} kilos ≈ ${(inputEl.value * 2.205).toFixed(2)} pounds | ${inputEl.value} pounds ≈ ${(inputEl.value * 0.45359237).toFixed(2)} kilos`
}

function easter(num){
    if (num == 21){
        headerEl.innerHTML = `<h2>What's Nine Plus Ten?</h2><p>You found EASTER-EGG🎉</p>`
    } else if (num == 42){
        headerEl.innerHTML = `<h3>Life, The universe, Everything.</h3><p>You found an EASTER-EGG🎉</p>`
    }else if (num == 69){
        headerEl.innerHTML = `<h3>Haha... funny number</h3><p>You found an EASTER-EGG🎉</p>`
    }
}