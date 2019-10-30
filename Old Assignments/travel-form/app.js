const form = document.travelForm

form.addEventListener('submit', function() {
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const myAge = form.age.value
    const myGender = form.gender.value
    const myDestination = form.destination.value
    const myDiet = form.diet
    const dietArr = []
    for(let i = 0; i < myDiet.length; i++) {
        if(myDiet[i].checked) {
            dietArr.push(myDiet[i].value)
        }
    }

    alert(`First name: ${firstName}
        Last Name: ${lastName}
        Age: ${myAge}
        Gender: ${myGender}
        Destination ${myDestination}
        Dietary restrictions: ${dietArr.join(', ')}`)
})