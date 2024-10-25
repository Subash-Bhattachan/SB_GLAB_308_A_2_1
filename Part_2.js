class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }

// adding roll method to the Character class
roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)


  }
}



const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin) // to check that we are recreating Robin using the Character class
// this results to something similar object as in Part 1 but also different 
// The difference is the creation of empty inventory and keyword "Character" in the beginning of every new character

// calling the method roll() to many nested objects i.e. companions here
robin.roll(4);
robin.companion.roll(5);
robin.companion.companion.roll(42);




