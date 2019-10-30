const addForm = document.addForm

addForm.addEventListener('submit', function(){
    event.preventDefault()
    const add1 = addForm.add1.value
    const add2 = addForm.add2.value
    const addEquals = parseInt(add1) + parseInt(add2)

    document.getElementById("results").innerHTML = `<h2>${add1} + ${add2} = ${addEquals}</h2>`
})

subForm.addEventListener('submit', function(){
    event.preventDefault()
    const subtract1 = subForm.subtract1.value
    const subtract2 = subForm.subtract2.value
    const subEquals = parseInt(subtract1) - parseInt(subtract2)

    document.getElementById('results').innerHTML = `<h2>${subtract1} - ${subtract2} = ${subEquals}</h2>`
})

multForm.addEventListener('submit', function(){
    event.preventDefault()
    const multiply1 = multForm.multiply1.value
    const multiply2 = multForm.multiply2.value
    const multEquals = parseInt(multiply1) * parseInt(multiply2)
    console.log(multiply1)

    document.getElementById('results').innerHTML = `<h2>${multiply1} * ${multiply2} = ${multEquals}</h2>`
})