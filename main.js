var pizza = {
    crust: "Thin",
    cheese: "Mozzarella",
    sauce: "Marinara",
    addToppings: function() {
        console.log('Please add pepperoni and sausage');
    }
}


function orderPizza() {
    console.log(pizza.crust),
        console.log(pizza.cheese),
        console.log(pizza.sauce);
}