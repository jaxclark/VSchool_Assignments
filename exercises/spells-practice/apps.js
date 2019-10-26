const spells = [
{   
    name: "alohamora",
    level: 1
},{
    name: "wingadium leviosa",
    level: 1
},{
    name: "expelliarmus",
    level: 10
},{
    name: "sectum sempra",
    level: 30
},{
    name: "imperio",
    level: 100
}
]
function canCastSpell(spellsArr, playerLevel) {
    console.log(playerLevel)
    for(let i = 0; i < spells.length; i++) {
        if(playerLevel > spells[i].level){
        // console.log(spells[i].name)
            console.log("can cast", spellsArr[i].name)
        }
    }
}
canCastSpell(spells, 5)