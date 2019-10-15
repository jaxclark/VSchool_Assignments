// PRELIMINARIES
head1 = document.getElementById("header")
head2 = document.getElementById("header")

const h1 = document.createElement("h1");
const subTitle = document.createElement("span");

h1.textContent = "Javascript made this!";
subTitle.innerHTML = '<span class="name">Jax</span> wrote the JavsScript';

head1.appendChild(h1);
head2.appendChild(subTitle);

h1.className = "header";
subTitle.className = "header";


// BRONZE

const messages = document.getElementsByClassName("message");
messages[0].textContent = "You're a cool dude";
messages[1].textContent = "You're a chill dude";
messages[2].textContent = "Bro";
messages[3].textContent = "Bruh";

const clear = document.getElementById("clear-button");

clear.addEventListener("click", function() {
    for (let i = 0; i < messages.length; i++){
        messages[i].textContent = ""
    }
    
})

// SILVER 

const dropDown = document.getElementById("theme-drop-down");

function changeColor(){
    dropDown.addEventListener("change", function(){
        for (let i = 0; i < messages.length; i++){
            messages[i].classList.toggle("theme-two");
        }
    })
    return dropDown
}

changeColor()


// GOLD

const newLeft = document.createElement("div")
const newRight = document.createElement("div")
const bigMessages = document.getElementsByClassName("messages")
const formInput = document.getElementById("input")
const form = document.getElementsByName("message")

form.addEventListener("submit", function(){
    // newLeft.innerHTML = "<div class='message left'></div>"
    newLeft.textContent = formInput.value
    bigMessages.appendChild(newLeft)

})


console.dir(newLeft)
// newMessages()

//create div with class message right and message left
//when submit button clicked, take form value and put into div








// dropDown.addEventListener("change", function(){
//     dropDown.classList.toggle("theme-two");
//     if (dropDown.classList.contains('theme-two')) {
//         e.target.parentElement.style.backgroundColor = e.target.value
//     }
//     return dropDown

// })



// dropDown.addEventListener("change", function(){  ////old code
//     dropDown.classList.toggle("theme-two");
//     for(let i = 0; i < messages.length; i++) {
//         messages[i].classList.toggle("theme-two");
//         if (dropDown.classList === "theme-two") {
//             messages[0].style.backgroundColor = "red" 
//             messages[1].style.backgroundColor = "black" 
//             messages[2].style.backgroundColor = "red" 
//             messages[3].style.backgroundColor = "black" 
//         } else if (dropDown.classList === "theme-one") {
//             messages[0].style.backgroundColor = "lightblue" 
//             messages[1].style.backgroundColor = "burlywood" 
//             messages[2].style.backgroundColor = "lightblue" 
//             messages[3].style.backgroundColor = "burlywood" 
//         }
//     }

// })



    
//     e.target.parentElement.style.backgroundColor = e.target.value

// })
// return dropDown


    // for (let i = 0; i < e.length; i++) {
    //     if(dropDown === "theme-two") {
    //         element.classList.toggle("theme-two");
    //     } else {
    //      element.classList.toggle("theme-one");
//         }
//     }
    
// })


//     if(dropDown === "theme-two") {
//         element.classList.toggle("theme-two");
//         // messages[0].style.backgroundColor = "red" 
//         // messages[1].style.backgroundColor = "black" 
//         // messages[2].style.backgroundColor = "red" 
//         // messages[3].style.backgroundColor = "black" 
//     // } else {

//     }
// })


// const colors = []
// function changeDropDown() {
//     const element = document.getElementById("theme-drop-down");
//     for(let i = 0; )
//     element.classList.toggle("theme-two");
//     dropDown.addEventListener("change", function(e){
//         e.target.parentElement.style.backgroundColor = e.target.value
//     })

// }

// theme.toggle("theme-two")

    // for(let i = 0; i < messages.length; i++) {
    //     messages[i].classList.toggle("theme-two");
    // }