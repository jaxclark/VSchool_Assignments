class Person {
    constructor(name, totalCoins, status, hasStar, gameActive){
        this.name = name;
        this.status = status;
        this.totalCoins = totalCoins;
        this.hasStar = hasStar;
        this.gameActive = gameActive
    }
    setName(namePicked){
        if(namePicked === 'Mario'){
            this.name = 'Mario'
        } else {
            this.name = 'Luigi'
        }
    }
    gotHit(){
        if(this.status === 'Small'){
            if(this.hasStar){
                console.log(`Your star protected you!`)
                this.status = 'Small'
                this.hasStar = false
            }else{
                this.status = 'Dead'
                this.gameActive = false
            }
        } else if(this.status === 'Big'){
            this.status = 'Small'
        } else if(this.status === 'Powered Up'){
            this.status = 'Big'
        } else {
            this.gameActive = false
        }
    }
    gotPowerup(){
        if(this.status === 'Small'){
            this.status = 'Big'
        } else if(this.status === 'Big'){
            this.status = 'Powered Up'
        } else{
            this.hasStar = true
            console.log(`You got a star!`)
        }
    }
    addCoin(){
        this.totalCoins++
    }
    print(){
        console.log(' ')
        console.log(`Name: ${this.name}`)
        console.log(`Status: ${this.status}`)
        console.log(`Coins: ${this.totalCoins}`)
        console.log(`Has Star: ${this.hasStar}`)
    }
}

const player = new Person('Mario', 0, 'Big', false, true)

const myInterval = setInterval(()=>{
    function randRange(){
        let random = Math.floor(Math.random() * 4)
        if(random === 0){
            player.gotHit()
        } else if(random === 1){
            player.gotPowerup()
        } else {
            player.addCoin()
        }
    }
    randRange()
    player.setName(player.name)
    player.print()
    if(player.gameActive === false){
        clearInterval(myInterval)
    }
}, 1000)