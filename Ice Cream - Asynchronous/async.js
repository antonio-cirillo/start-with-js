/*
    * Place order: 2 seconds
    * Cut the fruit: 2 seconds
    * Add water and ice: 1 second
    * Start the machine: 1 second
    * Select container: 2 seconds
    * Select toppings: 3 seconds
    * Serve ice cream: 2 seconds    
*/

let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let is_shop_open = false;

let toppings_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(() => console.log("which topping would you love?"));
        }, 3000);
    });
}

function time(ms) {
    return new Promise((resolve, reject) => {
        if(is_shop_open) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("our shop is closed"));
        }
    });
}

async function kitchen() {
    try {
        await time(2000);
        console.log(`${stocks.fruits[0]} was selected.`);
        console.log("start the production");
        await time(2000);
        console.log("the fruit has been chopped.");
        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`)
        await time(1000);
        console.log("the machine was started.");
        await time(2000);
        console.log(`${stocks.holder[0]} was selected.`);
        await time(3000);
        console.log(`${stocks.toppings[0]} was selected.`);
        await time(2000);
        console.log("ice cream was served.");
    } catch(error) {
        console.log("customer has left", error);
    } finally {
        is_shop_open = false;
        console.log("day ended, shop is closed");
    }
}

kitchen();