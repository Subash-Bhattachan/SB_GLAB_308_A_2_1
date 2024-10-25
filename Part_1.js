const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
    }

    // creating a loop to access each item in Robin's inventory

    for (let i = 0; i < adventurer.inventory.length; i++) { // .length method will only work in array not on object

        console.log(adventurer.inventory[i]); // to print out all the items in inventory
    }



    const adventurer1 = {
        name: "Robin",
        health: 10,
        inventory: ["sword", "potion", "artifact"],
        companion: {
            name: "Leo",
            type: "Cat"
        }
        }

    // now giving Roman's friend Leo a friend of his own    

    const adventurer2 = {
        name: "Robin",
        health: 10,
        inventory: ["sword", "potion", "artifact"],
        companion: {
            name: "Leo",
            type: "Cat",
            companion: {
                name: "Frank",
                type: "Flea",
                belongings: ["small hat", "sunglasses"]
            }
        }
        }


console.log(adventurer2.companion.companion.belongings);


const adventurer3 = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            belongings: ["small hat", "sunglasses"]
        }
    },
    roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
    }
    }

    // calling the method 'roll'
    adventurer3.roll();   // keeps changing the output with every compile
    adventurer3.roll(3);
    adventurer3.roll(4);