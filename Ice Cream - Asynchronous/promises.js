/*
    * Place order: 2 seconds
    * Cut the fruit: 2 seconds
    * Add water and ice: 1 second
    * Start the machine: 1 second
    * Select container: 2 seconds
    * Select toppings: 3 seconds
    * Serve ice cream: 2 seconds    
*/

let is_shop_open = true;

let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if(is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject(console.log("our shop is closed"));
        }
    })
};

order(0000, () => console.log("production has started."))
.then(() => {
    return order(2000, () => console.log("the fruit has been chopped."))
})
.then(() => {
    return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`))
})
.then(() => {
    return order(1000, () => console.log("the machine was started."))
})
.then(() => {
    return order(2000, () => console.log(`${stocks.holder[0]} was selected.`))
})
.then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} was selected.`))
})
.then(() => {
    return order(2000, () => console.log("ice cream was served."))
})
.catch(() => {
    console.log("customer left")
})
.finally(() => {
    console.log("day eneded, shop is close");
    is_shop_open = false;
});