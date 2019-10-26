var shopper = {
    name: "Jane",
    money: 38.43,
    shopping: true,
    groceryCart: [apples, bananas, bread, milk, cereal, eggs, rice],
    getMoney: function() {
        return shopper.name + " has $" + shopper.money + " to spend today."
    },
}

console.log(shopper.getMoney())



    // addToCart: function() {
    //     for (var i = 0; i <groceryCart.length; i++)
    //     console.log(groceryCart[i])
    //     console.log(groceryCart.length)

    // }