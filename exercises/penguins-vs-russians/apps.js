class Parties {
    constructor(name, population){
        this.name = name;
        this.population = population;
    }
}

everyoneAlive = true

const penguin = new Parties('Penguins', 1000000);
const russia = new Parties('Russians', 1000000)

let notParty = penguin

function chooseParty(){
    let random = Math.floor(Math.random() * 2)
    // console.log(random)
    if(random === 0){
        notParty = penguin
        return russia
    } else {
        notParty = russia
        return penguin
    }
}

partyHit = function(party){
    let attack = Math.round(Math.random() * (520000 - 400000) + 400000)
    notParty.population -= attack
    console.log(`\nThe ${party.name}'s nuke hit the ${notParty.name} for ${attack} damage!`)
    console.log(`The ${notParty.name}'s population is ${notParty.population}`)
}
notPartyHit = function(party){
    let attack = Math.round(Math.random() * (720000 - 600000) + 600000)
    party.population -= attack
    console.log(`The ${notParty.name}'s nuke hit the ${party.name} for ${attack} damage!`)
    console.log(`The ${party.name}'s population is ${party.population}`)
}

partyMiss = function(party){
    console.log(`\nThe ${party.name}'s nuke missed the ${notParty.name} and instead landed in the ocean`)
}

notPartyMiss = function(party){
    console.log(`The ${notParty.name}'s nuke missed the ${party.name} and instead landed in the ocean`)
}

let toggle = "p"

const myInterval = setInterval(()=>{
    function sendNuke(party, onHit, onMiss){
        party = chooseParty()
        let partyChance = Math.floor(Math.random() * 2)
        let notPartyChance = Math.floor(Math.random() * 2)
        if(party.population <= 0) {
            console.log(`The ${notParty.name} destroyed the ${party.name}!`)
            everyoneAlive = false
            return
        } else {
            if(partyChance === 0){
                partyHit(party)
            } else {
                partyMiss(party)
            }
        }
        if(notParty.population <= 0){
            console.log(`The ${party.name} destroyed the ${notParty.name}!`)
            everyoneAlive = false
            return
        } else {
            if(notPartyChance === 0){
                notPartyHit(party)
            } else {
                notPartyMiss(party)
            }
        }
    }
    sendNuke()
    if(everyoneAlive === false){
        clearInterval(myInterval)
    }
}, 700)