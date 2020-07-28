function Character(name, level, coins, attack, defense) {
    this.name = name;
    this.level = level;
    this.coins = coins;
    this.attack = attack;
    this.defense = defense;
}

Character.prototype.printStats = function () {
    let nick = document.getElementById("nickName");
    let att = document.getElementById("attack");
    let def = document.getElementById("defense");

    nick.innerHTML = this.name;
    att.innerHTML = `Attack: ${this.attack}`;
    def.innerHTML = this.defense;

    console.log(
        "Name: " +
            this.name +
            "\nProfession: " +
            this.level +
            "\nGender: " +
            this.coins +
            "\nAge: " +
            this.attack +
            "\nStrength: " +
            this.defense
    );
    console.log("\n-------------\n");
};

const warrior = new Character("Crusher", 2, 25, 10, 75);

warrior.printStats();
