class Parties {
    constructor(name, population){
        this.name = name;
        this.population = population;
    }
}

everyoneAlive = true

const penguin = new Parties('Penguins', 1000000);
const russia = new Parties('Russians', 1000000)

partyHit = function(party, notParty){
    let attack = Math.round(Math.random() * (520000 - 400000) + 400000)
    notParty.population -= attack
    console.log(`\nThe ${party.name}'s nuke hit the ${notParty.name} for ${attack} damage!`)
    console.log(`The ${notParty.name}'s population is ${notParty.population}`)
}

partyMiss = function(party, notParty){
    console.log(`\nThe ${party.name}'s nuke missed the ${notParty.name} and instead landed in the ocean`)
}

let toggle = "p"

const myInterval = setInterval(()=>{
    if(toggle === 'p'){
        sendNuke(penguin, russia)
        toggle = 'c'
    } else {
        sendNuke(russia, penguin)
        toggle = 'p'
    }

    if(everyoneAlive === false){
        clearInterval(myInterval)
    }
}, 700)

function sendNuke(party, notParty){
    let partyChance = Math.floor(Math.random() * 2)

    if(party.population <= 0) {
        console.log(`The ${notParty.name} destroyed the ${party.name}!`)
        everyoneAlive = false
        return
    } else {
        if(partyChance === 0){
            partyHit(party, notParty)
        } else {
            partyMiss(party, notParty)
        }
    }
}