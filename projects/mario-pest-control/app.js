const form = document.inputForm

// const bButton = document.getElementById("booButton")

form.addEventListener('submit', function() {
    event.preventDefault();
    const gInput = form.goombaInput.value;
    const kInput = form.kTroopaInput.value;
    const sInput = form.spinyInput.value;
    const bInput = form.booInput.value;

    // const twoTotal = parseInt(gInput) + parseInt(kInput)

    const total = (parseInt(gInput) * 2) + (parseInt(kInput) * 4) + (parseInt(sInput) * 7) + (parseInt(bInput) * 50)
    
    console.log(total)
    document.getElementById('results').innerHTML = `<span>${total}</span>`

})

// bButton.addEventListener("submit", function () {
//     console.log("Button pushed")
//     event.preventDefault()
    // let gInput = document.getElementsByName("goombaInput").value;
    // let kInput = document.getElementsByName("kTroopaInput").value;
    // let sInput = document.getElementsByName("spinyInput").value;
    // let bInput = document.getElementsByName("booInput").value;

    // let sum = (parseInt(gInput) + parseInt(kInput) + parseInt(sInput) + parseInt(bInput))
//     document.getElementById("spanTotal").textContent = `Total: worked`

// })