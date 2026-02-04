// Create a JavaScript object with properties and a method, and demonstrate how this works inside an object method.

const hero = {
    alias: "Dexter",
    name: "BOB",
    age: 25,
    powers: ["Strength", "Speed"],
    isActive: true,

    address: {
        city: "New York",
        country: "USA"
    },

    heroCall() {
        return `${this.name}, ${this.alias}!`;
    },

    getProfile() {
        return `
Hero Profile
------------
Name: ${this.name}
Alias: ${this.alias}
Age: ${this.age}
City: ${this.address.city}
Status: ${this.isActive ? "Active" : "Inactive"}
Powers: ${this.powers.join(", ")}
        `;
    },

    addPower(power) {
        this.powers.push(power);
    },

    toggleStatus() {
        this.isActive = !this.isActive;
    }
};

console.log(hero.heroCall());
hero.addPower("Invisibility");
hero.toggleStatus();
console.log(hero.getProfile());
