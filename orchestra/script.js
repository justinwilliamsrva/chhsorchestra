var person = "";

function Character(
    name,
    team,
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
    this.team = team;
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

    this.level1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.level2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.level3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.level4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.level5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.level6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.level7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.level8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.level9 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.level10 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.challenges = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.raids = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}

const warrior = new Character(
    "Crusher",
    "team1",
    2,
    "data:image/jpeg;base64,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",
    25,
    10,
    50,
    50,
    50,
    50,
    50,
    50
);
const evilhead = new Character(
    "Smash",
    "farts",
    3,
    "data:image/jpeg;base64,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",
    23,
    24,
    124,
    234,
    234,
    345,
    12,
    46
);

Character.prototype.printStats = function () {
    let nick = document.getElementById("nickName");
    let team = document.getElementById("team");
    let att = document.getElementById("attack");
    let def = document.getElementById("defense");
    let img = document.getElementById("image");
    let coin = document.getElementById("coins");
    let level = document.getElementById("level");
    let fac = document.getElementById("facility");
    let inton = document.getElementById("intonation");
    let shift = document.getElementById("shifting");
    let bow = document.getElementById("bowControl");
    let rhythm = document.getElementById("rhythm");
    let music = document.getElementById("musicality");

    nick.innerHTML = this.name;
    team.classList.add(`${this.team}`);
    img.innerHTML = `<img src=${this.image}>`;
    att.innerHTML = `Attack: ${this.attack}`;
    def.innerHTML = `<b>Defense: ${this.defense}</b>`;
    coin.innerHTML = `Coins: ${this.coins}`;
    level.innerHTML = `Level: ${this.level}`;
    fac.innerHTML = `Facility: ${this.facility}`;
    inton.innerHTML = `Intonation: ${this.intonation}`;
    shift.innerHTML = `Shifting: ${this.shifting}`;
    bow.innerHTML = `Bow Control: ${this.bowControl}`;
    rhythm.innerHTML = `Rhythm: ${this.rhythm}`;
    music.innerHTML = `Musicality: ${this.musicality}`;
};
let students = [warrior, evilhead];
let studentsString = ["warrior", "evilhead"];
let personage = "";

function initialPrompt() {
    console.log(typeof localStorage.getItem("person"));

    if (typeof localStorage.getItem("person") == "string") {
        var j = parseInt(localStorage.getItem("person"));
        personage = students[j];
        personage.printStats();
        personage.evaluate();
    } else {
        person = prompt("Please enter your name", "warrior");
        // var password = prompt("What is your password");
        for (i = 0; i < studentsString.length; i++) {
            if (person == studentsString[i]) {
                personage = students[i];

                localStorage.setItem("person", i);
                personage.printStats();
                personage.evaluate();
            }
        }
    }
}
var signout = document.getElementById("signout");
signout.addEventListener("click", function () {
    localStorage.removeItem("person");
    initialPrompt();
});

var level1 = document.getElementById("lvl1");
var assign1 = document.getElementById("assignment");
var currentLevel = document.getElementById("currentLevel");
console.log(personage);
// console.log(students[i].level1[0]);

level1.addEventListener("click", function () {
    currentLevel.innerHTML = `Level 1`;
    assign1.innerHTML = `Assignment 1: ${personage.level1[0]}`;
    console.log(person);
});

Character.prototype.l111 = function (score) {
    switch (score) {
        case 4:
            this.facility = this.facility + 4;
            this.level1[0] = 4;
            console.log(this.level1[0]);
            this.printStats();
            return this.level1[0];
        case 3:
            this.facility = this.facility + 3;
            this.level1[0] = 3;
            this.printStats();
            break;
        case 2:
            this.facility = this.facility + 2;
            this.level1[0] = 2;
            this.printStats();
            break;
        case 1:
            this.facility = this.facility + 1;
            this.level1[0] = 1;
            this.printStats();
            break;
    }
};

var level2 = document.getElementById("lvl2");
level2.addEventListener("click", leval2);

function leval2() {
    currentLevel.innerHTML = `Level 2`;
    assign1.innerHTML = `Assignment 1: ${warrior.level1[1]}`;
}
Character.prototype.evaluate = function () {
    // alert(this.totalScore);
    if (this.totalScore < 5000) {
        level2.removeEventListener("click", leval2);
        level2.classList.add("unworthy");
    }
};

// warrior.l111(4);
// warrior.evaluate();

initialPrompt();
