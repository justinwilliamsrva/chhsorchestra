function Character(
    name,
    level,
    image,
    coins,
    facility,
    intonation,
    shifting,
    bowControl,
    rhythm,
    musicality
) {
    this.name = name;
    this.level = level;
    this.image = image;
    this.coins = coins;
    this.facility = facility;
    this.intonation = intonation;
    this.shifting = shifting;
    this.bowControl = bowControl;
    this.rhythm = rhythm;
    this.musicality = musicality;

    this.attack = facility + intonation + shifting;
    this.defense = bowControl + rhythm + musicality;
    this.totalScore = this.attack + this.defense + coins;
}

Character.prototype.printStats = function () {
    let nick = document.getElementById("nickName");
    let att = document.getElementById("attack");
    let def = document.getElementById("defense");
    let img = document.getElementById("image");
    let coin = document.getElementById("coins");
    let fac = document.getElementById("facility");
    let inton = document.getElementById("intonation");
    let shift = document.getElementById("shifting");
    let bow = document.getElementById("bowControl");
    let rhythm = document.getElementById("rhythm");
    let music = document.getElementById("musicality");

    nick.innerHTML = this.name;
    img.innerHTML = `<img src=${this.image}>`;
    att.innerHTML = `Attack: ${this.attack}`;
    def.innerHTML = `Defense: ${this.defense}`;
    coin.innerHTML = `Coins: ${this.coins}`;
    fac.innerHTML = `Facility: ${this.facility}`;
    inton.innerHTML = `Intonation: ${this.intonation}`;
    shift.innerHTML = `Shift: ${this.shifting}`;
    bow.innerHTML = `Bow: ${this.bowControl}`;
    rhythm.innerHTML = `Rhythm: ${this.rhythm}`;
    music.innerHTML = `Musicality: ${this.musicality}`;

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

const warrior = new Character(
    "Crusher",
    2,
    "data:image/jpeg;base64,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",
    25,
    10,
    75,
    75,
    75,
    75,
    75,
    75
);

warrior.printStats();
