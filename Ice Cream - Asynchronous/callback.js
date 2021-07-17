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

let order = (fruit_index, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_index]} was selected.`);
        call_production();
    }, 2000);   
};

order(0, () => {
    console.log("production has started.")
    setTimeout(() => {
        console.log("the fruit has been chopped.");
        setTimeout(() => {
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`);
            setTimeout(() => {
                console.log("the machine was started.");
                setTimeout(() => {
                    console.log(`${stocks.holder[0]} was selected.`);
                    setTimeout(() => {
                        console.log(`${stocks.toppings[0]} was selected.`);
                        setTimeout(() => {
                            console.log("ice cream was served.");
                        }, 2000);
                    }, 3000)
                }, 2000);
            }, 1000);
        }, 1000);
    }, 2000);
});