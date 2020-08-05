var person = "";

let studentsString = ["jaden", "evilhead"];
let personage = "";
var level = document.getElementById("lvl1");
var level2 = document.getElementById("lvl2");
var level3 = document.getElementById("lvl3");
var level4 = document.getElementById("lvl4");
var level5 = document.getElementById("lvl5");
var level6 = document.getElementById("lvl6");
var level7 = document.getElementById("lvl7");
var level8 = document.getElementById("lvl8");
var level9 = document.getElementById("lvl9");
var level10 = document.getElementById("lvl10");
var comment = document.getElementById("comment");
var assign1 = document.getElementById("assignment1");
var currentLevel = document.getElementById("currentLevel");
var upload = document.getElementById("upload");
var instruct = document.getElementById("instruct");
var reward = document.getElementById("reward");
var recording = document.getElementById("recording");

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

const jaden = new Character(
    "Crusher",
    "team1",
    1,
    "https://media.giphy.com/media/oC0dO39ULoVhe/giphy.gif",
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
);
const evilhead = new Character(
    "Smash",
    "team1",
    1,
    "data:image/jpeg;base64,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",
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
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

Character.prototype.evaluate = function () {
    if (this.coins < 22) {
        level2.removeEventListener("click", leval2);
        level3.removeEventListener("click", leval3);
        level4.removeEventListener("click", leval4);
        level5.removeEventListener("click", leval5);
        level6.removeEventListener("click", leval6);
        level7.removeEventListener("click", leval7);
        level8.removeEventListener("click", leval8);
        level9.removeEventListener("click", leval9);
        level10.removeEventListener("click", evil);
        level2.classList.add("invisible");
        level3.classList.add("invisible");
        level4.classList.add("invisible");
        level5.classList.add("invisible");
        level6.classList.add("invisible");
        level7.classList.add("invisible");
        level8.classList.add("invisible");
        level9.classList.add("invisible");
        level10.classList.add("invisible");
    } else if (this.coins < 44) {
        this.level = 2;
        level3.removeEventListener("click", leval3);
        level4.removeEventListener("click", leval4);
        level5.removeEventListener("click", leval5);
        level6.removeEventListener("click", leval6);
        level7.removeEventListener("click", leval7);
        level8.removeEventListener("click", leval8);
        level9.removeEventListener("click", leval9);
        level10.removeEventListener("click", evil);
        level3.classList.add("invisible");
        level4.classList.add("invisible");
        level5.classList.add("invisible");
        level6.classList.add("invisible");
        level7.classList.add("invisible");
        level8.classList.add("invisible");
        level9.classList.add("invisible");
        level10.classList.add("invisible");
    } else if (this.coins < 66) {
        this.level = 3;
        level4.removeEventListener("click", leval4);
        level5.removeEventListener("click", leval5);
        level6.removeEventListener("click", leval6);
        level7.removeEventListener("click", leval7);
        level8.removeEventListener("click", leval8);
        level9.removeEventListener("click", leval9);
        level10.removeEventListener("click", evil);
        level4.classList.add("invisible");
        level5.classList.add("invisible");
        level6.classList.add("invisible");
        level7.classList.add("invisible");
        level8.classList.add("invisible");
        level9.classList.add("invisible");
        level10.classList.add("invisible");
    } else if (this.coins < 88) {
        this.level = 4;
        level5.removeEventListener("click", leval5);
        level6.removeEventListener("click", leval6);
        level7.removeEventListener("click", leval7);
        level8.removeEventListener("click", leval8);
        level9.removeEventListener("click", leval9);
        level10.removeEventListener("click", evil);
        level5.classList.add("invisible");
        level6.classList.add("invisible");
        level7.classList.add("invisible");
        level8.classList.add("invisible");
        level9.classList.add("invisible");
        level10.classList.add("invisible");
    } else if (this.coins < 110) {
        this.level = 5;
        level6.removeEventListener("click", leval6);
        level7.removeEventListener("click", leval7);
        level8.removeEventListener("click", leval8);
        level9.removeEventListener("click", leval9);
        level10.removeEventListener("click", evil);
        level6.classList.add("invisible");
        level7.classList.add("invisible");
        level8.classList.add("invisible");
        level9.classList.add("invisible");
        level10.classList.add("invisible");
    } else if (this.coins < 132) {
        this.level = 6;
        level7.removeEventListener("click", leval7);
        level8.removeEventListener("click", leval8);
        level9.removeEventListener("click", leval9);
        level10.removeEventListener("click", evil);
        level7.classList.add("invisible");
        level8.classList.add("invisible");
        level9.classList.add("invisible");
        level10.classList.add("invisible");
    } else if (this.coins < 154) {
        this.level = 7;
        level8.removeEventListener("click", leval8);
        level9.removeEventListener("click", leval9);
        level10.removeEventListener("click", evil);
        level8.classList.add("invisible");
        level9.classList.add("invisible");
        level10.classList.add("invisible");
    } else if (this.coins < 176) {
        this.level = 8;
        level9.removeEventListener("click", leval9);
        level10.removeEventListener("click", evil);
        level9.classList.add("invisible");
        level10.classList.add("invisible");
    } else if (this.coins < 198) {
        this.level = 9;
        level10.removeEventListener("click", evil);
        level10.classList.add("invisible");
    } else {
        this.level = 10;
    }
};

Character.prototype.a1 = function (score, comments) {
    switch (score) {
        case 4:
            this.intonation = this.intonation + 4;
            this.shifting = this.shifting + 2;
            this.coins = this.coins + 4;
            this.level1[0] = score;
            this.level1COM[0] = comments;
            this.printStats();
            this.evaluate();
            return this.level1[0];
        case 3:
            this.intonation = this.intonation + 3;
            this.shifting = this.shifting + 1;
            this.coins = this.coins + 3;
            this.level1[0] = score;
            this.level1COM[0] = comments;
            this.printStats();
            this.evaluate();
            break;
        case 2:
            this.intonation = this.intonation + 2;
            this.coins = this.coins + 2;
            this.level1[0] = score;
            this.level1COM[0] = comments;
            this.printStats();
            this.evaluate();
            break;
        case 1:
            this.intonation = this.facility + 1;
            this.coins = this.coins + 1;
            this.level1[0] = score;
            this.level1COM[0] = comments;
            this.printStats();
            this.evaluate();
            break;
    }
};
function initialPrompt() {
    console.log(typeof localStorage.getItem("person"));

    if (typeof localStorage.getItem("person") == "string") {
        var j = parseInt(localStorage.getItem("person"));
        personage = students[j];
        person = studentsString[j];
        console.log(personage);
        personage.printStats();
        personage.evaluate();
    } else {
        person = prompt("Please enter your name", "warrior");
        // var password = prompt("What is your password");
        for (i = 0; i < studentsString.length; i++) {
            if (person == studentsString[i]) {
                personage = students[i];
                console.log(personage);
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

// Level click functions
function level1() {
    currentLevel.innerHTML = `Level 1`;
    assign1.innerHTML = `Assignment 1: ${personage.level1[0]}`;
    upload.innerHTML = "Upload a Recording";
    upload.href = "https://driveuploader.com/upload/rTIwDJGuu0/";
    upload.style.cursor = "pointer";
    upload.addEventListener("click", function () {
        alert("Please include your 1. Real Name and 2. Assignment Number(s) in the Name Section");
    });
    assign1.addEventListener("click", function () {
        instruct.innerHTML =
            "<a target='_blank' href='https://drive.google.com/file/d/1BEZ8ESkjr1-2H7UU0GUfzMzUquDdHtrv/view?usp=sharing'>Quest: Complete Numbers 5,6,11 and 12</a>";
        reward.innerHTML = "Reward: Intonation(4) + Shifting(2)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.level1COM[0]}`;
    });
}
function leval2() {
    currentLevel.innerHTML = `Level 2`;
    assign1.innerHTML = `Assignment 1: ${personage.level2[0]}`;
    upload.innerHTML = "Upload a Recording";
    upload.href = "https://driveuploader.com/upload/ItgcnvBt3U/";
    upload.style.cursor = "pointer";
    upload.addEventListener("click", function () {
        alert("Remember to include your Real Name and Assignment Number(s) in the Name Section");
    });
}
function leval3() {
    currentLevel.innerHTML = `Level 3`;
    assign1.innerHTML = `Assignment 1: ${personage.level3[0]}`;
    upload.innerHTML = "Upload a Recording";
    upload.href = "https://driveuploader.com/upload/ItgcnvBt3U/";
    upload.style.cursor = "pointer";
    upload.addEventListener("click", function () {
        alert("Remember to include your Real Name and Assignment Number(s) in the Name Section");
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
function evil() {
    currentLevel.innerHTML = `Level 10`;
    assign1.innerHTML = `Assignment 1: ${personage.level10[0]}`;
    upload.innerHTML = "Upload a Recording";
    upload.href = "https://driveuploader.com/upload/ItgcnvBt3U/";
    upload.style.cursor = "pointer";
    upload.addEventListener("click", function () {
        alert("Remember to include your Real Name and Assignment Number(s) in the Name Section");
    });
}
// Level Click Event Listeners
level.addEventListener("click", level1);
level2.addEventListener("click", leval2);
level3.addEventListener("click", leval3);
level4.addEventListener("click", leval4);
level5.addEventListener("click", leval5);
level6.addEventListener("click", leval6);
level7.addEventListener("click", leval7);
level8.addEventListener("click", leval8);
level9.addEventListener("click", leval9);
level10.addEventListener("click", evil);

initialPrompt();
console.log(person);
if (person == "jaden") {
    jaden.a1(4, "Excellent Work!");
} else if (person == "evilhead") {
    evilhead.a1(1);
}

module.export = Character;
