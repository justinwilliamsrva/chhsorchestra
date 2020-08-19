function assignments() {
    switch (person) {
        case "jaden":
            jaden.a1(4, "Wonderufl tone");
            jaden.a2(2, "Wonderful tone");
            jaden.a3(3, "Wonderful tone");
            jaden.a4(3, "Wonderful tone");
            jaden.a5(3, "Great use of bow");
            jaden.a6(2, "Work on intonation ");
            break;
        case "evilhead":
            evilhead.a1(4, "Keep up the great work");
            evilhead.a2(4, "Keep up the great work");
            evilhead.a3(4, "More forte");
            evilhead.a4(4, "Keep up the great work");
            evilhead.a5(4, "Keep up the great work");
            evilhead.a6(4, "Keep up the great work");
            evilhead.a7(4, "Keep up the great work");
            evilhead.a8(4, "Keep up the great work");
            evilhead.a9(4, "Keep up the great work");
            evilhead.a10(4, "Keep up the great work");
            evilhead.b1(4, "Keep up the great work1");
            evilhead.b2(4, "Keep up the great work2");
            evilhead.b3(3, "More forte3");
            evilhead.b4(2, "Keep up the great work4");
            evilhead.b5(1, "Keep up the great work5");
            evilhead.b6(4, "Keep up the great work6");
            evilhead.b7(3, "Keep up the great work7");
            evilhead.b8(2, "Keep up the great work8");
            evilhead.b9(1, "Keep up the great work9");
            evilhead.b10(4, "Keep up the great work10");
            evilhead.c1(4, "Keep up the great work1");
            evilhead.c2(4, "Keep up the great work2");
            evilhead.c3(3, "More forte3");
            evilhead.c4(2, "Keep up the great work4");
            evilhead.c5(1, "Keep up the great work5");
            evilhead.c6(4, "Keep up the great work6");
            evilhead.c7(3, "Keep up the great work7");
            evilhead.c8(2, "Keep up the great work8");
            evilhead.c9(1, "Keep up the great work9");
            evilhead.c10(4, "Keep up the great work10");
            break;
            break;
    }
}

var person = "";

let studentsString = ["jaden", "evilhead"];
let personage = "";
var lvl = document.getElementById("lvl1");
var lvl2 = document.getElementById("lvl2");
var lvl3 = document.getElementById("lvl3");
var lvl4 = document.getElementById("lvl4");
var lvl5 = document.getElementById("lvl5");
var lvl6 = document.getElementById("lvl6");
var lvl7 = document.getElementById("lvl7");
var lvl8 = document.getElementById("lvl8");
var lvl9 = document.getElementById("lvl9");
var lvl10 = document.getElementById("lvl10");
var comment = document.getElementById("comment");
var assign1 = document.getElementById("assignment1");
var assign2 = document.getElementById("assignment2");
var assign3 = document.getElementById("assignment3");
var assign4 = document.getElementById("assignment4");
var assign5 = document.getElementById("assignment5");
var assign6 = document.getElementById("assignment6");
var assign7 = document.getElementById("assignment7");
var assign8 = document.getElementById("assignment8");
var assign9 = document.getElementById("assignment9");
var assign10 = document.getElementById("assignment10");
var currentLevel = document.getElementById("currentLevel");
var upload = document.getElementById("upload");
var instruct = document.getElementById("instruct");
var reward = document.getElementById("reward");
var recording = document.getElementById("recording");
var raidBtn = document.getElementById("raids");

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
    musicality,
    instrument
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
    this.instrument = instrument;

    this.attack = this.facility + this.intonation + this.shifting;
    this.defense = this.bowControl + this.rhythm + this.musicality;
    this.totalScore = this.attack + this.defense + this.coins;

    this.level1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.level1COM = [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
    ];
    this.level2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.level2COM = [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
    ];
    this.level3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.level3COM = [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
    ];
    this.level4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.level4COM = [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
    ];
    this.level5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.level5COM = [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
    ];
    this.level6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.level6COM = [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
    ];
    this.level7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.level7COM = [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
    ];
    this.level8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.level8COM = [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
    ];
    this.level9 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.level9COM = [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
    ];
    this.level10 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.level10COM = [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
    ];
    this.sideQuest = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.sideQuestCOM = [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
    ];
    this.raids = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.raidsCOM = [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
    ];
}

const jaden = new Character(
    "Violin Learning",
    "baroque",
    1,
    "https://media.giphy.com/media/10h3idv6iEAzyo/giphy.gif",
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    "violin"
);
const evilhead = new Character(
    "Smash",
    "romantic",
    1,
    "data:image/jpeg;base64,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",
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    "bass"
);
let students = [jaden, evilhead];

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
    this.attack = this.facility + this.intonation + this.shifting;
    this.defense = this.bowControl + this.rhythm + this.musicality;
    this.totalScore = this.attack + this.defense + this.coins;

    nick.innerHTML = this.name;
    team.classList.remove("heretics");
    team.classList.remove("romantic");
    team.classList.remove("baroque");
    team.classList.remove("century");
    team.classList.remove("classical");
    team.classList.add(`${this.team}`);
    img.innerHTML = `<img src=${this.image}>`;
    att.innerHTML = `<img id="attackPng" src="../assets/Attack-1.png"> ${this.attack}`;
    def.innerHTML = `<img id="defensePng" src="../assets/Defense-1.png"> ${this.defense}`;
    coin.innerHTML = `<img id="coinPng" src="../assets/coin.jpg"> ${this.coins}`;
    level.innerHTML = `<img id="levelPng" src="../assets/LEVEL.png"> ${this.level}`;
    fac.innerHTML = `Facility: ${this.facility}`;
    inton.innerHTML = `Intonation: ${this.intonation}`;
    shift.innerHTML = `Shifting: ${this.shifting}`;
    bow.innerHTML = `Bow Control: ${this.bowControl}`;
    rhythm.innerHTML = `Rhythm: ${this.rhythm}`;
    music.innerHTML = `Musicality: ${this.musicality}`;
};

Character.prototype.evaluate = function () {
    if (this.coins < 22) {
        lvl2.removeEventListener("click", leval2);
        lvl3.removeEventListener("click", leval3);
        lvl4.removeEventListener("click", leval4);
        lvl5.removeEventListener("click", leval5);
        lvl6.removeEventListener("click", leval6);
        lvl7.removeEventListener("click", leval7);
        lvl8.removeEventListener("click", leval8);
        lvl9.removeEventListener("click", leval9);
        lvl10.removeEventListener("click", leval10);
        lvl2.classList.remove("lvl2");
        lvl3.classList.remove("lvl3");
        lvl4.classList.remove("lvl4");
        lvl5.classList.remove("lvl5");
        lvl6.classList.remove("lvl6");
        lvl7.classList.remove("lvl7");
        lvl8.classList.remove("lvl8");
        lvl9.classList.remove("lvl9");
        lvl10.classList.remove("lvl10");
        lvl2.classList.add("invisible");
        lvl3.classList.add("invisible");
        lvl4.classList.add("invisible");
        lvl5.classList.add("invisible");
        lvl6.classList.add("invisible");
        lvl7.classList.add("invisible");
        lvl8.classList.add("invisible");
        lvl9.classList.add("invisible");
        lvl10.classList.add("invisible");
    } else if (this.coins < 62) {
        this.level = 2;
        lvl2.addEventListener("click", leval2);
        lvl3.removeEventListener("click", leval3);
        lvl4.removeEventListener("click", leval4);
        lvl5.removeEventListener("click", leval5);
        lvl6.removeEventListener("click", leval6);
        lvl7.removeEventListener("click", leval7);
        lvl8.removeEventListener("click", leval8);
        lvl9.removeEventListener("click", leval9);
        lvl10.removeEventListener("click", leval10);
        lvl3.classList.remove("lvl3");
        lvl4.classList.remove("lvl4");
        lvl5.classList.remove("lvl5");
        lvl6.classList.remove("lvl6");
        lvl7.classList.remove("lvl7");
        lvl8.classList.remove("lvl8");
        lvl9.classList.remove("lvl9");
        lvl10.classList.remove("lvl10");
        lvl2.classList.add("lvl2");
        lvl2.classList.remove("invisible");
        lvl3.classList.add("invisible");
        lvl4.classList.add("invisible");
        lvl5.classList.add("invisible");
        lvl6.classList.add("invisible");
        lvl7.classList.add("invisible");
        lvl8.classList.add("invisible");
        lvl9.classList.add("invisible");
        lvl10.classList.add("invisible");
    } else if (this.coins < 102) {
        this.level = 3;

        lvl2.classList.remove("invisible");
        lvl3.classList.remove("invisible");
        lvl2.addEventListener("click", leval2);
        lvl3.addEventListener("click", leval3);
        lvl4.removeEventListener("click", leval4);
        lvl5.removeEventListener("click", leval5);
        lvl6.removeEventListener("click", leval6);
        lvl7.removeEventListener("click", leval7);
        lvl8.removeEventListener("click", leval8);
        lvl9.removeEventListener("click", leval9);
        lvl10.removeEventListener("click", leval10);
        lvl4.classList.remove("lvl4");
        lvl5.classList.remove("lvl5");
        lvl6.classList.remove("lvl6");
        lvl7.classList.remove("lvl7");
        lvl8.classList.remove("lvl8");
        lvl9.classList.remove("lvl9");
        lvl10.classList.remove("lvl10");
        lvl4.classList.add("invisible");
        lvl5.classList.add("invisible");
        lvl6.classList.add("invisible");
        lvl7.classList.add("invisible");
        lvl8.classList.add("invisible");
        lvl9.classList.add("invisible");
        lvl10.classList.add("invisible");
        lvl2.classList.add("lvl2");
        lvl3.classList.add("lvl3");
    } else if (this.coins < 142) {
        this.level = 4;
        lvl2.classList.remove("invisible");
        lvl3.classList.remove("invisible");
        lvl4.classList.remove("invisible");
        lvl2.addEventListener("click", leval2);
        lvl3.addEventListener("click", leval3);
        lvl4.addEventListener("click", leval4);
        lvl5.removeEventListener("click", leval5);
        lvl6.removeEventListener("click", leval6);
        lvl7.removeEventListener("click", leval7);
        lvl8.removeEventListener("click", leval8);
        lvl9.removeEventListener("click", leval9);
        lvl10.removeEventListener("click", leval10);
        lvl5.classList.remove("lvl5");
        lvl6.classList.remove("lvl6");
        lvl7.classList.remove("lvl7");
        lvl8.classList.remove("lvl8");
        lvl9.classList.remove("lvl9");
        lvl10.classList.remove("lvl10");
        lvl5.classList.add("invisible");
        lvl6.classList.add("invisible");
        lvl7.classList.add("invisible");
        lvl8.classList.add("invisible");
        lvl9.classList.add("invisible");
        lvl10.classList.add("invisible");
        lvl2.classList.add("lvl2");
        lvl3.classList.add("lvl3");
        lvl4.classList.add("lvl4");
    } else if (this.coins < 182) {
        this.level = 5;
        lvl2.classList.remove("invisible");
        lvl3.classList.remove("invisible");
        lvl4.classList.remove("invisible");
        lvl5.classList.remove("invisible");
        lvl6.classList.remove("lvl6");
        lvl7.classList.remove("lvl7");
        lvl8.classList.remove("lvl8");
        lvl9.classList.remove("lvl9");
        lvl10.classList.remove("lvl10");
        lvl2.addEventListener("click", leval2);
        lvl3.addEventListener("click", leval3);
        lvl4.addEventListener("click", leval4);
        lvl5.addEventListener("click", leval5);
        lvl6.removeEventListener("click", leval6);
        lvl7.removeEventListener("click", leval7);
        lvl8.removeEventListener("click", leval8);
        lvl9.removeEventListener("click", leval9);
        lvl10.removeEventListener("click", leval10);
        lvl6.classList.add("invisible");
        lvl7.classList.add("invisible");
        lvl8.classList.add("invisible");
        lvl9.classList.add("invisible");
        lvl10.classList.add("invisible");
        lvl2.classList.add("lvl2");
        lvl3.classList.add("lvl3");
        lvl4.classList.add("lvl4");
        lvl5.classList.add("lvl5");
    } else if (this.coins < 222) {
        this.level = 6;
        lvl2.classList.remove("invisible");
        lvl3.classList.remove("invisible");
        lvl4.classList.remove("invisible");
        lvl5.classList.remove("invisible");
        lvl6.classList.remove("invisible");
        lvl7.classList.remove("lvl7");
        lvl8.classList.remove("lvl8");
        lvl9.classList.remove("lvl9");
        lvl10.classList.remove("lvl10");
        lvl2.addEventListener("click", leval2);
        lvl3.addEventListener("click", leval3);
        lvl4.addEventListener("click", leval4);
        lvl5.addEventListener("click", leval5);
        lvl6.addEventListener("click", leval6);
        lvl7.removeEventListener("click", leval7);
        lvl8.removeEventListener("click", leval8);
        lvl9.removeEventListener("click", leval9);
        lvl10.removeEventListener("click", leval10);
        lvl7.classList.add("invisible");
        lvl8.classList.add("invisible");
        lvl9.classList.add("invisible");
        lvl10.classList.add("invisible");
        lvl2.classList.add("lvl2");
        lvl3.classList.add("lvl3");
        lvl4.classList.add("lvl4");
        lvl5.classList.add("lvl5");
        lvl6.classList.add("lvl6");
    } else if (this.coins < 262) {
        this.level = 7;
        lvl7.classList.add("lvl7");
        lvl2.classList.remove("invisible");
        lvl3.classList.remove("invisible");
        lvl4.classList.remove("invisible");
        lvl5.classList.remove("invisible");
        lvl6.classList.remove("invisible");
        lvl7.classList.remove("invisible");
        lvl8.classList.remove("lvl8");
        lvl9.classList.remove("lvl9");
        lvl10.classList.remove("lvl10");
        lvl2.addEventListener("click", leval2);
        lvl3.addEventListener("click", leval3);
        lvl4.addEventListener("click", leval4);
        lvl5.addEventListener("click", leval5);
        lvl6.addEventListener("click", leval6);
        lvl7.addEventListener("click", leval7);
        lvl2.classList.add("lvl2");
        lvl3.classList.add("lvl3");
        lvl4.classList.add("lvl4");
        lvl5.classList.add("lvl5");
        lvl6.classList.add("lvl6");
        lvl7.classList.add("lvl7");
        lvl8.removeEventListener("click", leval8);
        lvl9.removeEventListener("click", leval9);
        lvl10.removeEventListener("click", leval10);
        lvl8.classList.add("invisible");
        lvl9.classList.add("invisible");
        lvl10.classList.add("invisible");
    } else if (this.coins < 302) {
        this.level = 8;
        lvl2.classList.remove("invisible");
        lvl3.classList.remove("invisible");
        lvl4.classList.remove("invisible");
        lvl5.classList.remove("invisible");
        lvl6.classList.remove("invisible");
        lvl7.classList.remove("invisible");
        lvl8.classList.remove("invisible");
        lvl9.classList.remove("lvl9");
        lvl10.classList.remove("lvl10");
        lvl2.addEventListener("click", leval2);
        lvl3.addEventListener("click", leval3);
        lvl4.addEventListener("click", leval4);
        lvl5.addEventListener("click", leval5);
        lvl6.addEventListener("click", leval6);
        lvl7.addEventListener("click", leval7);
        lvl8.addEventListener("click", leval8);
        lvl2.classList.add("lvl2");
        lvl3.classList.add("lvl3");
        lvl4.classList.add("lvl4");
        lvl5.classList.add("lvl5");
        lvl6.classList.add("lvl6");
        lvl7.classList.add("lvl7");
        lvl8.classList.add("lvl8");
        lvl9.removeEventListener("click", leval9);
        lvl10.removeEventListener("click", leval10);
        lvl9.classList.add("invisible");
        lvl10.classList.add("invisible");
    } else if (this.coins < 342) {
        this.level = 9;
        lvl2.classList.remove("invisible");
        lvl3.classList.remove("invisible");
        lvl4.classList.remove("invisible");
        lvl5.classList.remove("invisible");
        lvl6.classList.remove("invisible");
        lvl7.classList.remove("invisible");
        lvl8.classList.remove("invisible");
        lvl9.classList.remove("invisible");
        lvl10.classList.remove("lvl10");
        lvl2.addEventListener("click", leval2);
        lvl3.addEventListener("click", leval3);
        lvl4.addEventListener("click", leval4);
        lvl5.addEventListener("click", leval5);
        lvl6.addEventListener("click", leval6);
        lvl7.addEventListener("click", leval7);
        lvl8.addEventListener("click", leval8);
        lvl9.addEventListener("click", leval9);
        lvl10.removeEventListener("click", leval10);
        lvl10.classList.add("invisible");
        lvl2.classList.add("lvl2");
        lvl3.classList.add("lvl3");
        lvl4.classList.add("lvl4");
        lvl5.classList.add("lvl5");
        lvl6.classList.add("lvl6");
        lvl7.classList.add("lvl7");
        lvl8.classList.add("lvl8");
        lvl9.classList.add("lvl9");
    } else {
        this.level = 10;
        lvl2.classList.remove("invisible");
        lvl3.classList.remove("invisible");
        lvl4.classList.remove("invisible");
        lvl5.classList.remove("invisible");
        lvl6.classList.remove("invisible");
        lvl7.classList.remove("invisible");
        lvl8.classList.remove("invisible");
        lvl9.classList.remove("invisible");
        lvl10.classList.remove("invisible");
        lvl2.addEventListener("click", leval2);
        lvl3.addEventListener("click", leval3);
        lvl4.addEventListener("click", leval4);
        lvl5.addEventListener("click", leval5);
        lvl6.addEventListener("click", leval6);
        lvl7.addEventListener("click", leval7);
        lvl8.addEventListener("click", leval8);
        lvl9.addEventListener("click", leval9);
        lvl10.addEventListener("click", leval10);
        lvl2.classList.add("lvl2");
        lvl3.classList.add("lvl3");
        lvl4.classList.add("lvl4");
        lvl5.classList.add("lvl5");
        lvl6.classList.add("lvl6");
        lvl7.classList.add("lvl7");
        lvl8.classList.add("lvl8");
        lvl9.classList.add("lvl9");
        lvl10.classList.add("lvl10");
    }
};

Character.prototype.a1 = function (score, comments) {
    switch (score) {
        case 4:
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 2;
            this.coins = this.coins + 4;
            this.level1[0] = "A+";
            this.level1COM[0] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 1;
            this.coins = this.coins + 3;
            this.level1[0] = "A-";
            this.level1COM[0] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.intonation = this.intonation + 2;
            this.coins = this.coins + 2;
            this.level1[0] = "B";
            this.level1COM[0] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.coins = this.coins + 1;
            this.level1[0] = "C";
            this.level1COM[0] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.a2 = function (score, comments) {
    switch (score) {
        case 4:
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 2;
            this.coins = this.coins + 4;
            this.level1[1] = "A+";
            this.level1COM[1] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 1;
            this.coins = this.coins + 3;
            this.level1[1] = "A-";
            this.level1COM[1] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.intonation = this.intonation + 2;
            this.coins = this.coins + 2;
            this.level1[1] = "B";
            this.level1COM[1] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.coins = this.coins + 1;
            this.level1[1] = "C";
            this.level1COM[1] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.a3 = function (score, comments) {
    switch (score) {
        case 4:
            console.log("4");
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 2;
            this.bowControl = this.bowControl + 2;
            this.rhythm = this.rhythm + 2;
            this.coins = this.coins + 4;
            this.level1[2] = "A+";
            this.level1COM[2] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 3:
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 1;
            this.bowControl = this.bowControl + 1;
            this.rhythm = this.rhythm + 1;
            this.coins = this.coins + 3;
            this.level1[2] = "A-";
            this.level1COM[2] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.intonation = this.intonation + 2;
            this.coins = this.coins + 2;
            this.level1[2] = "B";
            this.level1COM[2] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.coins = this.coins + 1;
            this.level1[2] = "C";
            this.level1COM[2] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.a4 = function (score, comments) {
    switch (score) {
        case 4:
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 2;
            this.facility = this.facility + 2;
            this.rhythm = this.rhythm + 2;
            this.coins = this.coins + 4;
            this.level1[3] = "A+";
            this.level1COM[3] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 1;
            this.facility = this.facility + 1;
            this.rhythm = this.rhythm + 1;
            this.coins = this.coins + 3;
            this.level1[3] = "A-";
            this.level1COM[3] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.intonation = this.intonation + 3;
            this.coins = this.coins + 2;
            this.level1[3] = "B";
            this.level1COM[3] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.coins = this.coins + 1;
            this.level1[3] = "C";
            this.level1COM[3] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.a5 = function (score, comments) {
    switch (score) {
        case 4:
            this.facility = this.facility + 8;
            this.bowControl = this.bowControl + 4;
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 4;
            this.rhythm = this.rhythm + 2;
            this.coins = this.coins + 4;
            this.level1[4] = "A+";
            this.level1COM[4] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.facility = this.facility + 6;
            this.bowControl = this.bowControl + 3;
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 3;
            this.rhythm = this.rhythm + 1;
            this.coins = this.coins + 3;
            this.level1[4] = "A-";
            this.level1COM[4] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.facility = this.facility + 4;
            this.bowControl = this.bowControl + 2;
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 2;
            this.coins = this.coins + 2;
            this.level1[4] = "B";
            this.level1COM[4] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.bowControl = this.bowControl + 1;
            this.shifting = this.shifting + 1;
            this.facility = this.facility + 2;
            this.coins = this.coins + 1;
            this.level1[4] = "C";
            this.level1COM[4] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.a6 = function (score, comments) {
    switch (score) {
        case 4:
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 2;
            this.bowControl = this.bowControl + 2;
            this.rhythm = this.rhythm + 2;
            this.coins = this.coins + 4;
            this.level1[5] = "A+";
            this.level1COM[5] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 1;
            this.bowControl = this.bowControl + 1;
            this.rhythm = this.rhythm + 1;
            this.coins = this.coins + 3;
            this.level1[5] = "A-";
            this.level1COM[5] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.intonation = this.intonation + 2;
            this.coins = this.coins + 2;
            this.level1[5] = "B";
            this.level1COM[5] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.coins = this.coins + 1;
            this.level1[5] = "C";
            this.level1COM[5] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.a7 = function (score, comments) {
    switch (score) {
        case 4:
            this.facility = this.facility + 8;
            this.bowControl = this.bowControl + 4;
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 4;
            this.rhythm = this.rhythm + 2;
            this.coins = this.coins + 4;
            this.level1[6] = "A+";
            this.level1COM[6] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.facility = this.facility + 6;
            this.bowControl = this.bowControl + 3;
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 3;
            this.rhythm = this.rhythm + 1;
            this.coins = this.coins + 3;
            this.level1[6] = "A-";
            this.level1COM[6] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.facility = this.facility + 4;
            this.bowControl = this.bowControl + 2;
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 2;
            this.coins = this.coins + 2;
            this.level1[6] = "B";
            this.level1COM[6] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.bowControl = this.bowControl + 1;
            this.shifting = this.shifting + 1;
            this.facility = this.facility + 2;
            this.coins = this.coins + 1;
            this.level1[6] = "C";
            this.level1COM[6] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.a8 = function (score, comments) {
    switch (score) {
        case 4:
            this.bowControl = this.bowControl + 4;
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 4;
            this.musicality = this.musicality + 4;
            this.rhythm = this.rhythm + 2;
            this.coins = this.coins + 4;
            this.level1[7] = "A+";
            this.level1COM[7] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.bowControl = this.bowControl + 3;
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 3;
            this.rhythm = this.rhythm + 1;
            this.musicality = this.musicality + 3;

            this.coins = this.coins + 3;
            this.level1[7] = "A-";
            this.level1COM[7] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.bowControl = this.bowControl + 2;
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 2;
            this.musicality = this.musicality + 2;

            this.coins = this.coins + 2;
            this.level1[7] = "B";
            this.level1COM[7] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.bowControl = this.bowControl + 1;
            this.musicality = this.musicality + 1;

            this.shifting = this.shifting + 1;
            this.coins = this.coins + 1;
            this.level1[7] = "C";
            this.level1COM[7] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.a9 = function (score, comments) {
    switch (score) {
        case 4:
            this.facility = this.facility + 0;
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 2;
            this.bowControl = this.bowControl + 4;
            this.rhythm = this.rhythm + 2;
            this.musicality = this.musicality + 4;
            this.coins = this.coins + 4;
            this.level1[8] = "A+";
            this.level1COM[8] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.facility = this.facility + 0;
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 1;
            this.bowControl = this.bowControl + 3;
            this.rhythm = this.rhythm + 1;
            this.musicality = this.musicality + 3;
            this.coins = this.coins + 3;
            this.level1[8] = "A-";
            this.level1COM[8] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.facility = this.facility + 0;
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 0;
            this.bowControl = this.bowControl + 2;
            this.rhythm = this.rhythm + 0;
            this.musicality = this.musicality + 2;
            this.coins = this.coins + 2;
            this.level1[8] = "B";
            this.level1COM[8] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.facility = this.facility + 0;
            this.intonation = this.intonation + 1;
            this.shifting = this.shifting + 0;
            this.bowControl = this.bowControl + 1;
            this.rhythm = this.rhythm + 0;
            this.musicality = this.musicality + 1;
            this.coins = this.coins + 1;
            this.level1[8] = "C";
            this.level1COM[8] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.a10 = function (score, comments) {
    switch (score) {
        case 4:
            this.facility = this.facility + 0;
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 4;
            this.bowControl = this.bowControl + 2;
            this.rhythm = this.rhythm + 2;
            this.musicality = this.musicality + 4;
            this.coins = this.coins + 4;
            this.level1[9] = "A+";
            this.level1COM[9] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.facility = this.facility + 0;
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 3;
            this.bowControl = this.bowControl + 1;
            this.rhythm = this.rhythm + 1;
            this.musicality = this.musicality + 3;
            this.coins = this.coins + 3;
            this.level1[9] = "A-";
            this.level1COM[9] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.facility = this.facility + 0;
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 2;
            this.bowControl = this.bowControl + 0;
            this.rhythm = this.rhythm + 0;
            this.musicality = this.musicality + 2;
            this.coins = this.coins + 2;
            this.level1[9] = "B";
            this.level1COM[9] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.facility = this.facility + 0;
            this.intonation = this.intonation + 1;
            this.shifting = this.shifting + 1;
            this.bowControl = this.bowControl + 0;
            this.rhythm = this.rhythm + 0;
            this.musicality = this.musicality + 1;
            this.coins = this.coins + 1;
            this.level1[9] = "C";
            this.level1COM[9] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.b1 = function (score, comments) {
    switch (score) {
        case 4:
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 4;
            this.coins = this.coins + 4;
            this.level2[0] = "A+";
            this.level2COM[0] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 3;
            this.coins = this.coins + 3;
            this.level2[0] = "A-";
            this.level2COM[0] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 2;

            this.coins = this.coins + 2;
            this.level2[0] = "B";
            this.level2COM[0] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.shifting = this.shifting + 1;
            this.coins = this.coins + 1;
            this.level2[0] = "C";
            this.level2COM[0] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.b2 = function (score, comments) {
    switch (score) {
        case 4:
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 4;
            this.coins = this.coins + 4;
            this.level2[1] = "A+";
            this.level2COM[1] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 3;
            this.coins = this.coins + 3;
            this.level2[1] = "A-";
            this.level2COM[1] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 2;

            this.coins = this.coins + 2;
            this.level2[1] = "B";
            this.level2COM[1] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.shifting = this.shifting + 1;
            this.coins = this.coins + 1;
            this.level2[1] = "C";
            this.level2COM[1] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.b3 = function (score, comments) {
    switch (score) {
        case 4:
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 2;
            this.coins = this.coins + 4;
            this.level2[2] = "A+";
            this.level2COM[2] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 1;
            this.coins = this.coins + 3;
            this.level2[2] = "A-";
            this.level2COM[2] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.intonation = this.intonation + 2;
            this.coins = this.coins + 2;
            this.level2[2] = "B";
            this.level2COM[2] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.coins = this.coins + 1;
            this.level2[2] = "C";
            this.level2COM[2] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.b4 = function (score, comments) {
    switch (score) {
        case 4:
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 2;
            this.facility = this.facility + 2;
            this.rhythm = this.rhythm + 2;
            this.coins = this.coins + 4;
            this.level2[3] = "A+";
            this.level2COM[3] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 1;
            this.facility = this.facility + 1;
            this.rhythm = this.rhythm + 1;
            this.coins = this.coins + 3;
            this.level2[3] = "A-";
            this.level2COM[3] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.intonation = this.intonation + 3;
            this.coins = this.coins + 2;
            this.level2[3] = "B";
            this.level2COM[3] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.coins = this.coins + 1;
            this.level2[3] = "C";
            this.level2COM[3] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};

Character.prototype.b5 = function (score, comments) {
    switch (score) {
        case 4:
            this.facility = this.facility + 8;
            this.bowControl = this.bowControl + 4;
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 4;
            this.rhythm = this.rhythm + 2;
            this.coins = this.coins + 4;
            this.level2[4] = "A+";
            this.level2COM[4] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.facility = this.facility + 6;
            this.bowControl = this.bowControl + 3;
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 3;
            this.rhythm = this.rhythm + 1;
            this.coins = this.coins + 3;
            this.level2[4] = "A-";
            this.level2COM[4] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.facility = this.facility + 4;
            this.bowControl = this.bowControl + 2;
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 2;
            this.coins = this.coins + 2;
            this.level2[4] = "B";
            this.level2COM[4] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.bowControl = this.bowControl + 1;
            this.shifting = this.shifting + 1;
            this.facility = this.facility + 2;
            this.coins = this.coins + 1;
            this.level2[4] = "C";
            this.level2COM[4] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.b6 = function (score, comments) {
    switch (score) {
        case 4:
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 2;
            this.bowControl = this.bowControl + 2;
            this.rhythm = this.rhythm + 2;
            this.coins = this.coins + 4;
            this.level2[5] = "A+";
            this.level2COM[5] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 1;
            this.bowControl = this.bowControl + 1;
            this.rhythm = this.rhythm + 1;
            this.coins = this.coins + 3;
            this.level2[5] = "A-";
            this.level2COM[5] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.intonation = this.intonation + 2;
            this.coins = this.coins + 2;
            this.level2[5] = "B";
            this.level2COM[5] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.coins = this.coins + 1;
            this.level2[5] = "C";
            this.level2COM[5] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.b7 = function (score, comments) {
    switch (score) {
        case 4:
            this.facility = this.facility + 8;
            this.bowControl = this.bowControl + 4;
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 4;
            this.rhythm = this.rhythm + 2;
            this.coins = this.coins + 4;
            this.level2[6] = "A+";
            this.level2COM[6] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.facility = this.facility + 6;
            this.bowControl = this.bowControl + 3;
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 3;
            this.rhythm = this.rhythm + 1;
            this.coins = this.coins + 3;
            this.level2[6] = "A-";
            this.level2COM[6] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.facility = this.facility + 4;
            this.bowControl = this.bowControl + 2;
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 2;
            this.coins = this.coins + 2;
            this.level2[6] = "B";
            this.level2COM[6] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.bowControl = this.bowControl + 1;
            this.shifting = this.shifting + 1;
            this.facility = this.facility + 2;
            this.coins = this.coins + 1;
            this.level2[6] = "C";
            this.level2COM[6] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.b8 = function (score, comments) {
    switch (score) {
        case 4:
            this.bowControl = this.bowControl + 4;
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 0;
            this.musicality = this.musicality + 4;
            this.rhythm = this.rhythm + 4;
            this.coins = this.coins + 4;
            this.level2[7] = "A+";
            this.level2COM[7] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.bowControl = this.bowControl + 3;
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 0;
            this.rhythm = this.rhythm + 3;
            this.musicality = this.musicality + 3;

            this.coins = this.coins + 3;
            this.level2[7] = "A-";
            this.level2COM[7] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.bowControl = this.bowControl + 2;
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 0;
            this.musicality = this.musicality + 2;
            this.rhythm = this.rhythm + 2;

            this.coins = this.coins + 2;
            this.level2[7] = "B";
            this.level2COM[7] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.bowControl = this.bowControl + 1;
            this.musicality = this.musicality + 1;
            this.rhythm = this.rhythm + 1;

            this.shifting = this.shifting + 0;
            this.coins = this.coins + 1;
            this.level2[7] = "C";
            this.level2COM[7] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.b9 = function (score, comments) {
    switch (score) {
        case 4:
            this.bowControl = this.bowControl + 4;
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 0;
            this.musicality = this.musicality + 4;
            this.rhythm = this.rhythm + 4;
            this.coins = this.coins + 4;
            this.level2[8] = "A+";
            this.level2COM[8] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.bowControl = this.bowControl + 3;
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 0;
            this.rhythm = this.rhythm + 3;
            this.musicality = this.musicality + 3;

            this.coins = this.coins + 3;
            this.level2[8] = "A-";
            this.level2COM[8] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.bowControl = this.bowControl + 2;
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 0;
            this.musicality = this.musicality + 2;
            this.rhythm = this.rhythm + 2;

            this.coins = this.coins + 2;
            this.level2[8] = "B";
            this.level2COM[8] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.bowControl = this.bowControl + 1;
            this.musicality = this.musicality + 1;
            this.rhythm = this.rhythm + 1;

            this.shifting = this.shifting + 0;
            this.coins = this.coins + 1;
            this.level2[8] = "C";
            this.level2COM[8] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.b10 = function (score, comments) {
    switch (score) {
        case 4:
            this.facility = this.facility + 0;
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 4;
            this.bowControl = this.bowControl + 2;
            this.rhythm = this.rhythm + 2;
            this.musicality = this.musicality + 4;
            this.coins = this.coins + 4;
            this.level2[9] = "A+";
            this.level2COM[9] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.facility = this.facility + 0;
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 3;
            this.bowControl = this.bowControl + 1;
            this.rhythm = this.rhythm + 1;
            this.musicality = this.musicality + 3;
            this.coins = this.coins + 3;
            this.level2[9] = "A-";
            this.level2COM[9] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.facility = this.facility + 0;
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 2;
            this.bowControl = this.bowControl + 0;
            this.rhythm = this.rhythm + 0;
            this.musicality = this.musicality + 2;
            this.coins = this.coins + 2;
            this.level2[9] = "B";
            this.level2COM[9] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.facility = this.facility + 0;
            this.intonation = this.intonation + 1;
            this.shifting = this.shifting + 1;
            this.bowControl = this.bowControl + 0;
            this.rhythm = this.rhythm + 0;
            this.musicality = this.musicality + 1;
            this.coins = this.coins + 1;
            this.level2[9] = "C";
            this.level2COM[9] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.c1 = function (score, comments) {
    switch (score) {
        case 4:
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 2;
            this.coins = this.coins + 4;
            this.level3[0] = "A+";
            this.level3COM[0] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 2;
            this.coins = this.coins + 3;
            this.level3[0] = "A-";
            this.level3COM[0] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 0;
            this.coins = this.coins + 2;
            this.level3[0] = "B";
            this.level3COM[0] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.shifting = this.shifting + 0;
            this.coins = this.coins + 1;
            this.level3[0] = "C";
            this.level3COM[0] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.c2 = function (score, comments) {
    switch (score) {
        case 4:
            this.facility = this.facility + 0;
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 2;
            this.bowControl = this.bowControl + 4;
            this.rhythm = this.rhythm + 2;
            this.musicality = this.musicality + 2;
            this.coins = this.coins + 4;
            this.level1[9] = "A+";
            this.level3COM[9] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.facility = this.facility + 0;
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 1;
            this.bowControl = this.bowControl + 3;
            this.rhythm = this.rhythm + 1;
            this.musicality = this.musicality + 1;
            this.coins = this.coins + 3;
            this.level3[9] = "A-";
            this.level3COM[9] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.facility = this.facility + 0;
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 0;
            this.bowControl = this.bowControl + 2;
            this.rhythm = this.rhythm + 0;
            this.musicality = this.musicality + 0;
            this.coins = this.coins + 2;
            this.level3[9] = "B";
            this.level3COM[9] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.facility = this.facility + 0;
            this.intonation = this.intonation + 1;
            this.shifting = this.shifting + 0;
            this.bowControl = this.bowControl + 1;
            this.rhythm = this.rhythm + 0;
            this.musicality = this.musicality + 0;
            this.coins = this.coins + 1;
            this.level3[9] = "C";
            this.level3COM[9] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.c3 = function (score, comments) {
    switch (score) {
        case 4:
            this.facility = this.facility + 4;
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 2;
            this.bowControl = this.bowControl + 4;
            this.rhythm = this.rhythm + 0;
            this.musicality = this.musicality + 0;
            this.coins = this.coins + 4;
            this.level3[9] = "A+";
            this.level3COM[9] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.facility = this.facility + 3;
            this.intonation = this.intonation + 1;
            this.shifting = this.shifting + 1;
            this.bowControl = this.bowControl + 3;
            this.rhythm = this.rhythm + 0;
            this.musicality = this.musicality + 0;
            this.coins = this.coins + 3;
            this.level3[9] = "A-";
            this.level3COM[9] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.facility = this.facility + 2;
            this.intonation = this.intonation + 0;
            this.shifting = this.shifting + 0;
            this.bowControl = this.bowControl + 2;
            this.rhythm = this.rhythm + 0;
            this.musicality = this.musicality + 0;
            this.coins = this.coins + 2;
            this.level3[9] = "B";
            this.level3COM[9] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.facility = this.facility + 1;
            this.intonation = this.intonation + 0;
            this.shifting = this.shifting + 0;
            this.bowControl = this.bowControl + 1;
            this.rhythm = this.rhythm + 0;
            this.musicality = this.musicality + 0;
            this.coins = this.coins + 1;
            this.level3[9] = "C";
            this.level3COM[9] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.c4 = function (score, comments) {
    switch (score) {
        case 4:
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 2;
            this.facility = this.facility + 2;
            this.rhythm = this.rhythm + 2;
            this.coins = this.coins + 4;
            this.level3[3] = "A+";
            this.level3COM[3] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 1;
            this.facility = this.facility + 1;
            this.rhythm = this.rhythm + 1;
            this.coins = this.coins + 3;
            this.level3[3] = "A-";
            this.level3COM[3] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.intonation = this.intonation + 3;
            this.coins = this.coins + 2;
            this.level3[3] = "B";
            this.level3COM[3] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.coins = this.coins + 1;
            this.level3[3] = "C";
            this.level3COM[3] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};

Character.prototype.c5 = function (score, comments) {
    switch (score) {
        case 4:
            this.facility = this.facility + 8;
            this.bowControl = this.bowControl + 4;
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 4;
            this.rhythm = this.rhythm + 2;
            this.coins = this.coins + 4;
            this.level3[4] = "A+";
            this.level3COM[4] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.facility = this.facility + 6;
            this.bowControl = this.bowControl + 3;
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 3;
            this.rhythm = this.rhythm + 1;
            this.coins = this.coins + 3;
            this.level3[4] = "A-";
            this.level3COM[4] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.facility = this.facility + 4;
            this.bowControl = this.bowControl + 2;
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 2;
            this.coins = this.coins + 2;
            this.level3[4] = "B";
            this.level3COM[4] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.bowControl = this.bowControl + 1;
            this.shifting = this.shifting + 1;
            this.facility = this.facility + 2;
            this.coins = this.coins + 1;
            this.level3[4] = "C";
            this.level3COM[4] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.c6 = function (score, comments) {
    switch (score) {
        case 4:
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 2;
            this.bowControl = this.bowControl + 2;
            this.rhythm = this.rhythm + 2;
            this.coins = this.coins + 4;
            this.level3[5] = "A+";
            this.level3COM[5] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 1;
            this.bowControl = this.bowControl + 1;
            this.rhythm = this.rhythm + 1;
            this.coins = this.coins + 3;
            this.level3[5] = "A-";
            this.level3COM[5] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.intonation = this.intonation + 2;
            this.coins = this.coins + 2;
            this.level3[5] = "B";
            this.level3COM[5] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.coins = this.coins + 1;
            this.level3[5] = "C";
            this.level3COM[5] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.c7 = function (score, comments) {
    switch (score) {
        case 4:
            this.facility = this.facility + 8;
            this.bowControl = this.bowControl + 4;
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 4;
            this.rhythm = this.rhythm + 2;
            this.coins = this.coins + 4;
            this.level3[6] = "A+";
            this.level3COM[6] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.facility = this.facility + 6;
            this.bowControl = this.bowControl + 3;
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 3;
            this.rhythm = this.rhythm + 1;
            this.coins = this.coins + 3;
            this.level3[6] = "A-";
            this.level3COM[6] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.facility = this.facility + 4;
            this.bowControl = this.bowControl + 2;
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 2;
            this.coins = this.coins + 2;
            this.level3[6] = "B";
            this.level3COM[6] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.bowControl = this.bowControl + 1;
            this.shifting = this.shifting + 1;
            this.facility = this.facility + 2;
            this.coins = this.coins + 1;
            this.level3[6] = "C";
            this.level3COM[6] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.c8 = function (score, comments) {
    switch (score) {
        case 4:
            this.bowControl = this.bowControl + 4;
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 0;
            this.musicality = this.musicality + 4;
            this.rhythm = this.rhythm + 4;
            this.coins = this.coins + 4;
            this.level3[7] = "A+";
            this.level3COM[7] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.bowControl = this.bowControl + 3;
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 0;
            this.rhythm = this.rhythm + 3;
            this.musicality = this.musicality + 3;

            this.coins = this.coins + 3;
            this.level3[7] = "A-";
            this.level3COM[7] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.bowControl = this.bowControl + 2;
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 0;
            this.musicality = this.musicality + 2;
            this.rhythm = this.rhythm + 2;

            this.coins = this.coins + 2;
            this.level3[7] = "B";
            this.level3COM[7] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.bowControl = this.bowControl + 1;
            this.musicality = this.musicality + 1;
            this.rhythm = this.rhythm + 1;

            this.shifting = this.shifting + 0;
            this.coins = this.coins + 1;
            this.level3[7] = "C";
            this.level3COM[7] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.c9 = function (score, comments) {
    switch (score) {
        case 4:
            this.bowControl = this.bowControl + 4;
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 0;
            this.musicality = this.musicality + 4;
            this.rhythm = this.rhythm + 4;
            this.coins = this.coins + 4;
            this.level3[8] = "A+";
            this.level3COM[8] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.bowControl = this.bowControl + 3;
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 0;
            this.rhythm = this.rhythm + 3;
            this.musicality = this.musicality + 3;

            this.coins = this.coins + 3;
            this.level3[8] = "A-";
            this.level3COM[8] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.bowControl = this.bowControl + 2;
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 0;
            this.musicality = this.musicality + 2;
            this.rhythm = this.rhythm + 2;

            this.coins = this.coins + 2;
            this.level3[8] = "B";
            this.level3COM[8] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.intonation = this.intonation + 1;
            this.bowControl = this.bowControl + 1;
            this.musicality = this.musicality + 1;
            this.rhythm = this.rhythm + 1;

            this.shifting = this.shifting + 0;
            this.coins = this.coins + 1;
            this.level3[8] = "C";
            this.level3COM[8] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.c10 = function (score, comments) {
    switch (score) {
        case 4:
            this.facility = this.facility + 0;
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 4;
            this.bowControl = this.bowControl + 2;
            this.rhythm = this.rhythm + 2;
            this.musicality = this.musicality + 4;
            this.coins = this.coins + 4;
            this.level3[9] = "A+";
            this.level3COM[9] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.facility = this.facility + 0;
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 3;
            this.bowControl = this.bowControl + 1;
            this.rhythm = this.rhythm + 1;
            this.musicality = this.musicality + 3;
            this.coins = this.coins + 3;
            this.level3[9] = "A-";
            this.level3COM[9] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.facility = this.facility + 0;
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 2;
            this.bowControl = this.bowControl + 0;
            this.rhythm = this.rhythm + 0;
            this.musicality = this.musicality + 2;
            this.coins = this.coins + 2;
            this.level3[9] = "B";
            this.level3COM[9] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.facility = this.facility + 0;
            this.intonation = this.intonation + 1;
            this.shifting = this.shifting + 1;
            this.bowControl = this.bowControl + 0;
            this.rhythm = this.rhythm + 0;
            this.musicality = this.musicality + 1;
            this.coins = this.coins + 1;
            this.level3[9] = "C";
            this.level3COM[9] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};

Character.prototype.r1 = function (score, comments) {
    switch (score) {
        case 4:
            this.facility = this.facility + 4;
            this.intonation = this.intonation + 8;
            this.shifting = this.shifting + 4;
            this.bowControl = this.bowControl + 4;
            this.rhythm = this.rhythm + 8;
            this.musicality = this.musicality + 4;
            this.coins = this.coins + 8;
            this.raids[0] = "A+";
            this.raidsCOM[0] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.facility = this.facility + 3;
            this.intonation = this.intonation + 6;
            this.shifting = this.shifting + 3;
            this.bowControl = this.bowControl + 3;
            this.rhythm = this.rhythm + 6;
            this.musicality = this.musicality + 3;
            this.coins = this.coins + 6;
            this.raids[0] = "A-";
            this.raidsCOM[0] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.facility = this.facility + 2;
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 2;
            this.bowControl = this.bowControl + 2;
            this.rhythm = this.rhythm + 4;
            this.musicality = this.musicality + 2;
            this.coins = this.coins + 4;
            this.raids[0] = "B";
            this.raidsCOM[0] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.facility = this.facility + 1;
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 1;
            this.bowControl = this.bowControl + 1;
            this.rhythm = this.rhythm + 2;
            this.musicality = this.musicality + 1;
            this.coins = this.coins + 2;
            this.raids[0] = "C";
            this.raidsCOM[0] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
Character.prototype.r2 = function (score, comments) {
    switch (score) {
        case 4:
            this.facility = this.facility + 4;
            this.intonation = this.intonation + 8;
            this.shifting = this.shifting + 4;
            this.bowControl = this.bowControl + 4;
            this.rhythm = this.rhythm + 8;
            this.musicality = this.musicality + 4;
            this.coins = this.coins + 8;
            this.raids[1] = "A+";
            this.raidsCOM[1] = comments;
            this.evaluate();
            this.printStats();
            break;

        case 3:
            this.facility = this.facility + 3;
            this.intonation = this.intonation + 6;
            this.shifting = this.shifting + 3;
            this.bowControl = this.bowControl + 3;
            this.rhythm = this.rhythm + 6;
            this.musicality = this.musicality + 3;
            this.coins = this.coins + 6;
            this.raids[1] = "A-";
            this.raidsCOM[1] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 2:
            this.facility = this.facility + 2;
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 2;
            this.bowControl = this.bowControl + 2;
            this.rhythm = this.rhythm + 4;
            this.musicality = this.musicality + 2;
            this.coins = this.coins + 4;
            this.raids[1] = "B";
            this.raidsCOM[1] = comments;
            this.evaluate();
            this.printStats();
            break;
        case 1:
            this.facility = this.facility + 1;
            this.intonation = this.intonation + 2;
            this.shifting = this.shifting + 1;
            this.bowControl = this.bowControl + 1;
            this.rhythm = this.rhythm + 2;
            this.musicality = this.musicality + 1;
            this.coins = this.coins + 2;
            this.raids[1] = "C";
            this.raidsCOM[1] = comments;
            this.evaluate();
            this.printStats();
            break;
    }
};
function initialPrompt() {
    if (typeof localStorage.getItem("person") == "string") {
        var j = parseInt(localStorage.getItem("person"));
        personage = students[j];
        person = studentsString[j];
        clearAll();
        assignments();
        personage.evaluate();
        personage.printStats();
    } else {
        person = prompt("Please enter your name", "name");
        // var password = prompt("What is your password");
        for (i = 0; i < studentsString.length; i++) {
            if (person == studentsString[i]) {
                personage = students[i];
                personage;
                localStorage.setItem("person", i);
                clearAll();
                assignments();
                personage.evaluate();
                personage.printStats();
            }
        }
    }
}
var signout = document.getElementById("signout");
signout.addEventListener("click", function () {
    localStorage.removeItem("person");

    initialPrompt();
});

// Level click functions
function leval1() {
    currentLevel.innerHTML = `Level 1`;
    assign1.innerHTML = `Positions(a1): ${personage.level1[0]}`;
    assign2.innerHTML = `More Positions(a2): ${personage.level1[1]}`;
    assign3.innerHTML = `SOLO-Brahms(a3): ${personage.level1[2]}`;
    assign4.innerHTML = `CM scale and Arrpegio(a4): ${personage.level1[3]}`;
    assign5.innerHTML = `CM in thirds(a5): ${personage.level1[4]}`;
    assign6.innerHTML = `GM scale and Arrpegio(a6): ${personage.level1[5]}`;
    assign7.innerHTML = `GM in thirds(a7): ${personage.level1[6]}`;
    assign8.innerHTML = `SOLO-Dona Nobis(a8): ${personage.level1[7]}`;
    assign9.innerHTML = `SOLO-British Grenadiers(a9): ${personage.level1[8]}`;
    assign10.innerHTML = `Rhythm+Scales(a10): ${personage.level1[9]}`;

    upload.innerHTML = "Upload a Recording";
    upload.href = "https://driveuploader.com/upload/rTIwDJGuu0/";
    upload.style.cursor = "pointer";
    upload.addEventListener("click", function () {
        alert("Please include your 1. Real Name and 2. Assignment Number(s) in the Name Section");
    });
    // A1
    assign1.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/1BEZ8ESkjr1-2H7UU0GUfzMzUquDdHtrv/view?usp=sharing'>Quest: Complete Numbers 5,6,11 and 12</a>";
        reward.innerHTML = "Reward: Intonation(4) + Shifting(2) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level1COM[0]}`;
    });
    // A2
    assign2.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/1DvlNkWVRH9sqmHYXGkSapp2Wmmfyi-pb/view?usp=sharing'>Quest: Complete Numbers 15+16+17</a>";
        reward.innerHTML = "Reward: Intonation(4) + Shifting(2) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level1COM[1]}`;
    });
    // A3
    assign3.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/1Cguo_oVQiulWuXbNYbjzotckQWhO2vNF/view?usp=sharing'>Quest: Complete Number18</a>";
        reward.innerHTML =
            "Reward: Intonation(4) + Shifting(2) + Bow Control(2) + Rhythm(2) + Coins(4) ";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level1COM[2]}`;
    });
    // A4
    assign4.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href=https://drive.google.com/file/d/1D9PmwS7ESuV9TNh9QVDtX4NoGBjXfIoK/view?usp=sharing'>Quest: Complete Numbers 101+102</a>";
        reward.innerHTML =
            "Reward: Intonation(4) + Shifting(2) + Facility(2) + Rhythm(2) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level1COM[3]}`;
    });
    // A5
    assign5.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/1DTBs7iLURSyZtSNbRzdtKlQLRy-mUWeX/view?usp=sharing'>Quest: Complete Number 103 at 120BPM</a>";
        reward.innerHTML =
            "Reward: Intonation(4) + Shifting(4) + Facility(8) + Bow Control(4) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level1COM[4]}`;
    });
    6;
    // A6
    assign6.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/1DgA8MfT4PWe2Ujjvm2aGbwdn1rKJXhzO/view?usp=sharing'>Quest: Complete Numbers 107 and 108</a>";
        reward.innerHTML =
            "Reward: Intonation(4) + Shifting(2) + Facility(2) + Rhythm(2) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level1COM[5]}`;
    });
    // A7
    assign7.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/1DjIHsf2_x0zjECamo3s_XT-LY7evTFrP/view?usp=sharing'>Quest: Complete Numbers 110 at 120BPM</a>";
        reward.innerHTML =
            "Reward: Intonation(4) + Shifting(4) + Facility(8) + Bow Control(4) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level1COM[6]}`;
    });
    // A8
    assign8.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/1Dmi3UwgC55qMGlUOvEUFiHe-t_Qpqisp/view?usp=sharing'>Quest: Complete Number 109 at 60BPM</a>";
        reward.innerHTML =
            "Reward: Intonation(4) + Shifting(2) + Bow Control(4) + Rhythm(2) + Musicality(4) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level1COM[7]}`;
    });
    // A9
    assign9.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/1DfwRxQU6M-opP_WidOx4JuT61JjckNBu/view?usp=sharing'>Quest: Complete Number 104 at 120BPM</a>";
        reward.innerHTML =
            "Reward: Intonation(4) + Bow Control(4) + Rhythm(4) + Musicality(4 ) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level1COM[8]}`;
    });
    // A10
    assign10.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/11zdUfRv8wPD2yOIDSXTvPhvi5cFmXpfO/view?usp=sharing'>Quest: Apply the 6 rhythms to the assigned two octave scale</a>";
        reward.innerHTML =
            "Reward: Rhythm(12) + Shifting(4) + Intonation(4) + Bow Control(2) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level1COM[9]}`;
    });
}
function leval2() {
    clearAll();
    currentLevel.innerHTML = `Level 2`;
    assign1.innerHTML = `Harmonics(b1): ${personage.level2[0]}`;
    assign2.innerHTML = `Shifting(b2): ${personage.level2[1]}`;
    assign3.innerHTML = `Positions(b3): ${personage.level2[2]}`;
    assign4.innerHTML = `DM scale and Arrpegio(b4): ${personage.level2[3]}`;
    assign5.innerHTML = `DM in thirds(b5): ${personage.level2[4]}`;
    assign6.innerHTML = `AM scale and Arrpegio(b6): ${personage.level2[5]}`;
    assign7.innerHTML = `AM in thirds(b7): ${personage.level2[6]}`;
    assign8.innerHTML = `SOLO-Shenandoah(b8): ${personage.level2[7]}`;
    assign9.innerHTML = `SOLO-Yellow Rose of Texas(b9): ${personage.level2[8]}`;
    assign10.innerHTML = `Rhythm+Scales(b10): ${personage.level2[9]}`;

    upload.innerHTML = "Upload a Recording";
    upload.href = "https://driveuploader.com/upload/rTIwDJGuu0/";
    upload.style.cursor = "pointer";
    upload.addEventListener("click", function () {
        alert("Please include your 1. Real Name and 2. Assignment Number(s) in the Name Section");
    });
    // A1
    assign1.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/141mC4xBmLgn16_9i40pf46FDhzudNNQH/view?usp=sharing'>Quest: Complete Numbers 19,21 and 23</a>";
        reward.innerHTML = "Reward: Intonation(4) + Shifting(4) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level2COM[0]}`;
    });
    // A2
    assign2.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/145AaTXjEXIanK8zKwSqJl6kIh2Ts2imS/view?usp=sharing'>Quest: Complete Numbers 26,28 and 32</a>";
        reward.innerHTML = "Reward: Intonation(4) + Shifting(4) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level2COM[1]}`;
    });
    // A3
    assign3.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/145G5iTT75NCMX5sfg1JDpzdMGf99EUOd/view?usp=sharing'>Quest: Complete Numbers 38,39 and 40</a>";
        reward.innerHTML = "Reward: Intonation(4) + Shifting(2) + Coins(4) ";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level2COM[2]}`;
    });
    // A4
    assign4.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/14746t6pnImLyp3vsMtCi0B9cDbJLDjaR/view?usp=sharing'>Quest: Complete Numbers 113 and 114</a>";
        reward.innerHTML =
            "Reward: Intonation(4) + Shifting(2) + Facility(2) + Rhythm(2) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level2COM[3]}`;
    });
    // A5
    assign5.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/148xNYk0avm6hypM3Wt3E6LHe8IqMW3Sp/view?usp=sharing'>Quest: Complete Number 115 at 120BPM</a>";
        reward.innerHTML =
            "Reward: Intonation(4) + Shifting(4) + Facility(8) + Bow Control(4) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level2COM[4]}`;
    });
    6;
    // A6
    assign6.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/14A0mfXa3s_nyCX6fzTHFEEsoI7_EQ3im/view?usp=sharing'>Quest: Complete Numbers 119 and 120</a>";
        reward.innerHTML =
            "Reward: Intonation(4) + Shifting(2) + Facility(2) + Rhythm(2) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level2COM[5]}`;
    });
    // A7
    assign7.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/14Nu17knHHcY28MAP71vll0tOUKL0avy2/view?usp=sharing'>Quest: Complete Numbers 121 at 120BPM</a>";
        reward.innerHTML =
            "Reward: Intonation(4) + Shifting(4) + Facility(8) + Bow Control(4) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level2COM[6]}`;
    });
    // A8
    assign8.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/14RDUCip12CTEPZpOv6xYN5JUVuoXTZA6/view?usp=sharing'>Quest: Complete Number 116 at 70BPM</a>";
        reward.innerHTML =
            "Reward: Intonation(4) + Bow Control(4) + Rhythm(4) + Musicality(4) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level2COM[7]}`;
    });
    // A9
    assign9.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/14W6pMeZBvavBFEcUQi4FoWuqpEwjOpcO/view?usp=sharing'>Quest: Complete Number 122 at 120BPM</a>";
        reward.innerHTML =
            "Reward: Intonation(4) + Bow Control(4) + Rhythm(4) + Musicality(4) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level2COM[8]}`;
    });
    // A10
    assign10.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/11zdUfRv8wPD2yOIDSXTvPhvi5cFmXpfO/view?usp=sharing'>Quest: Apply the 6 rhythms to the assigned two octave scale</a>";
        reward.innerHTML =
            "Reward: Rhythm(12) + Shifting(4) + Intonation(4) + Bow Control(2) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level2COM[9]}`;
    });
}
function leval3() {
    clearAll();
    currentLevel.innerHTML = `Level 3`;
    assign1.innerHTML = `Positions(c1): ${personage.level3[0]}`;
    assign2.innerHTML = `SOLO - French Folk Song(c2): ${personage.level3[1]}`;
    assign3.innerHTML = `SOLO - Can Can(c3): ${personage.level3[2]}`;
    assign4.innerHTML = `FM scale and Arrpegio(c4): ${personage.level3[3]}`;
    assign5.innerHTML = `FM in thirds(c5): ${personage.level3[4]}`;
    assign6.innerHTML = `BbM scale and Arrpegio(c6): ${personage.level3[5]}`;
    assign7.innerHTML = `BbM in thirds(c7): ${personage.level3[6]}`;
    assign8.innerHTML = `SOLO-Bella-Bocca Polka(c8): ${personage.level3[7]}`;
    assign9.innerHTML = `SOLO-John Peel(c9): ${personage.level3[8]}`;
    assign10.innerHTML = `Rhythm+Scales(c10): ${personage.level3[9]}`;

    upload.innerHTML = "Upload a Recording";
    upload.href = "https://driveuploader.com/upload/rTIwDJGuu0/";
    upload.style.cursor = "pointer";
    upload.addEventListener("click", function () {
        alert("Please include your 1. Real Name and 2. Assignment Number(s) in the Name Section");
    });
    // A1
    assign1.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/141mC4xBmLgn16_9i40pf46FDhzudNNQH/view?usp=sharing'>Quest: Complete Numbers 56,57 and 58</a>";
        reward.innerHTML = "Reward: Intonation(4) + Shifting(2) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level3COM[0]}`;
    });
    // A2
    assign2.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/145AaTXjEXIanK8zKwSqJl6kIh2Ts2imS/view?usp=sharing'>Quest: Complete Number 41</a>";
        reward.innerHTML =
            "Reward: Intonation(4) + Shifting(2) + Bow Control(4) + Rhythm(2) + Musicality(2) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level3COM[1]}`;
    });
    // A3
    assign3.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/145G5iTT75NCMX5sfg1JDpzdMGf99EUOd/view?usp=sharing'>Quest: Complete Number 42 at BPM 160</a>";
        reward.innerHTML =
            "Reward: Intonation(2) + Shifting(2) +  Facility(4) + Bow Control(4) + Musicality(2) + Coins(4) ";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level3COM[2]}`;
    });
    // A4
    assign4.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/14746t6pnImLyp3vsMtCi0B9cDbJLDjaR/view?usp=sharing'>Quest: Complete Numbers 125 and 126</a>";
        reward.innerHTML =
            "Reward: Intonation(4) + Shifting(2) + Facility(2) + Rhythm(2) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level3COM[3]}`;
    });
    // A5
    assign5.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/148xNYk0avm6hypM3Wt3E6LHe8IqMW3Sp/view?usp=sharing'>Quest: Complete Number 127 at 120BPM</a>";
        reward.innerHTML =
            "Reward: Intonation(4) + Shifting(4) + Facility(8) + Bow Control(4) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level3COM[4]}`;
    });
    6;
    // A6
    assign6.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/14A0mfXa3s_nyCX6fzTHFEEsoI7_EQ3im/view?usp=sharing'>Quest: Complete Numbers 131 and 132</a>";
        reward.innerHTML =
            "Reward: Intonation(4) + Shifting(2) + Facility(2) + Rhythm(2) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level3COM[5]}`;
    });
    // A7
    assign7.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/14Nu17knHHcY28MAP71vll0tOUKL0avy2/view?usp=sharing'>Quest: Complete Number 133 at 120BPM</a>";
        reward.innerHTML =
            "Reward: Intonation(4) + Shifting(4) + Facility(8) + Bow Control(4) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level3COM[6]}`;
    });
    // A8
    assign8.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/14RDUCip12CTEPZpOv6xYN5JUVuoXTZA6/view?usp=sharing'>Quest: Complete Number 128 at 100BPM</a>";
        reward.innerHTML =
            "Reward: Intonation(4) + Bow Control(4) + Rhythm(4) + Musicality(4) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level3COM[7]}`;
    });
    // A9
    assign9.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/14W6pMeZBvavBFEcUQi4FoWuqpEwjOpcO/view?usp=sharing'>Quest: Complete Number 134 at 90BPM</a>";
        reward.innerHTML =
            "Reward: Intonation(4) + Bow Control(4) + Rhythm(4) + Musicality(4) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level3COM[8]}`;
    });
    // A10
    assign10.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/11zdUfRv8wPD2yOIDSXTvPhvi5cFmXpfO/view?usp=sharing'>Quest: Apply the 6 rhythms to the assigned two octave scale</a>";
        reward.innerHTML =
            "Reward: Rhythm(12) + Shifting(4) + Intonation(4) + Bow Control(2) + Coins(4)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level3COM[9]}`;
    });
}

function leval4() {
    currentLevel.innerHTML = `Level 4`;
    assign1.innerHTML = `Assignment 1: ${personage.level4[0]}`;
    upload.innerHTML = "Upload a Recording";
    upload.href = "https://driveuploader.com/upload/ItgcnvBt3U/";
    upload.style.cursor = "pointer";
    upload.addEventListener("click", function () {
        alert("Remember to include your Real Name and Assignment Number(s) in the Name Section");
    });
}
function leval5() {
    currentLevel.innerHTML = `Level 5`;
    assign1.innerHTML = `Assignment 1:${personage.level5[0]}`;
    upload.innerHTML = "Upload a Recording";
    upload.href = "https://driveuploader.com/upload/ItgcnvBt3U/";
    upload.style.cursor = "pointer";
    upload.addEventListener("click", function () {
        alert("Remember to include your Real Name and Assignment Number(s) in the Name Section");
    });
}
function leval6() {
    currentLevel.innerHTML = `Level 6`;
    assign1.innerHTML = `Assignment 1: ${personage.level6[0]}`;
    upload.innerHTML = "Upload a Recording";
    upload.href = "https://driveuploader.com/upload/ItgcnvBt3U/";
    upload.style.cursor = "pointer";
    upload.addEventListener("click", function () {
        alert("Remember to include your Real Name and Assignment Number(s) in the Name Section");
    });
}
function leval7() {
    currentLevel.innerHTML = `Level 7`;
    assign1.innerHTML = `Assignment 1: ${personage.level7[0]}`;
    upload.innerHTML = "Upload a Recording";
    upload.href = "https://driveuploader.com/upload/ItgcnvBt3U/";
    upload.style.cursor = "pointer";
    upload.addEventListener("click", function () {
        alert("Remember to include your Real Name and Assignment Number(s) in the Name Section");
    });
}
function leval8() {
    currentLevel.innerHTML = `Level 8`;
    assign1.innerHTML = `Assignment 1: ${personage.level8[0]}`;
    upload.innerHTML = "Upload a Recording";
    upload.href = "https://driveuploader.com/upload/ItgcnvBt3U/";
    upload.style.cursor = "pointer";
    upload.addEventListener("click", function () {
        alert("Remember to include your Real Name and Assignment Number(s) in the Name Section");
    });
}
function leval9() {
    currentLevel.innerHTML = `Level 9`;
    assign1.innerHTML = `Assignment 1: ${personage.level9[0]}`;
    upload.innerHTML = "Upload a Recording";
    upload.href = "https://driveuploader.com/upload/ItgcnvBt3U/";
    upload.style.cursor = "pointer";
    upload.addEventListener("click", function () {
        alert("Remember to include your Real Name and Assignment Number(s) in the Name Section");
    });
}
function leval10() {
    currentLevel.innerHTML = `Level 10`;
    assign1.innerHTML = `Assignment 1: ${personage.level10[0]}`;
    upload.innerHTML = "Upload a Recording";
    upload.href = "https://driveuploader.com/upload/ItgcnvBt3U/";
    upload.style.cursor = "pointer";
    upload.addEventListener("click", function () {
        alert("Remember to include your Real Name and Assignment Number(s) in the Name Section");
    });
}
function raidFunc() {
    clearAll();
    currentLevel.innerHTML = `Raids`;
    assign1.innerHTML = `Two Duets CM and GM(r1): ${personage.raids[0]}`;
    assign2.innerHTML = `Two Duets DM and AM(r2): ${personage.raids[1]}`;

    // R!
    assign1.addEventListener("click", function () {
        instruct.innerHTML = "<p>Quest: Record Numbers 105 and 111 with a partner</p>";
        reward.innerHTML =
            "Reward: Intonation(8) + Facility(4) + Bow Control(4) + Rhythm(8) + Musicality(4) + Coins(8)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.raidsCOM[0]}`;
    });

    // R!
    assign2.addEventListener("click", raid2);

    if (personage.coins < 22) {
        assign2.innerHTML = "";
        assign2.removeEventListener("click", raid2);
    }
}

function raid2() {
    instruct.innerHTML = "<p>Quest: Record Numbers 117 and 123 with a partner</p>";
    reward.innerHTML =
        "Reward: Intonation(8) + Facility(4) + Bow Control(4) + Rhythm(8) + Musicality(4) + Coins(8)";
    recording.innerHTML = " Recording: Coming Soon";
    comment.innerHTML = `Teacher Comments: ${personage.raidsCOM[1]}`;
}

function clearInstructions() {
    instruct.innerHTML = "";
    reward.innerHTML = "";
    recording.innerHTML = "";
    comment.innerHTML = "";
}
function clearQuests() {
    currentLevel.innerHTML = "CCPS HIGH SCHOOL ORCHESTRA LEARNING ACTIVITIES<br>BETA VERSION 1.32";
    assign1.innerHTML = "";
    assign2.innerHTML = "";
    assign3.innerHTML = "";
    assign4.innerHTML = "";
    assign5.innerHTML = "";
    assign6.innerHTML = "";
    assign7.innerHTML = "";
    assign8.innerHTML = "";
    assign9.innerHTML = "";
    assign10.innerHTML = "";
    upload.innerHTML = "";
    upload.href = "";
    upload.style.cursor = "default";
    upload.removeEventListener("click", function () {
        alert("Please include your 1. Real Name and 2. Assignment Number(s) in the Name Section");
    });
}
function clearAll() {
    clearInstructions();
    clearQuests();
}
// Level Click Event Listeners
lvl.addEventListener("click", leval1);
lvl2.addEventListener("click", leval2);
lvl3.addEventListener("click", leval3);
lvl4.addEventListener("click", leval4);
lvl5.addEventListener("click", leval5);
lvl6.addEventListener("click", leval6);
lvl7.addEventListener("click", leval7);
lvl8.addEventListener("click", leval8);
lvl9.addEventListener("click", leval9);
lvl10.addEventListener("click", leval10);
lvl10.addEventListener("click", leval10);
raidBtn.addEventListener("click", raidFunc);
initialPrompt();

// module.exports = Character;
