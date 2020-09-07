window.onload = function () {
    function assignments() {
        miami.a1(4, "Keep up the great work");
        miami.a2(4, "Keep up the great work");
        miami.a3(4, "More forte");
        miami.a4(4, "Keep up the great work");
        miami.a5(4, "Keep up the great work");
        miami.a6(4, "Keep up the great work");
        miami.a7(4, "Keep up the great work");
        miami.a8(4, "Keep up the great work");
        miami.a9(4, "Keep up the great work");
        miami.a10(4, "Keep up the great work");
        miami.b1(4, "Keep up the great work1");
        miami.b2(4, "Keep up the great work2");
        miami.b3(3, "More forte3");
        miami.b4(2, "Keep up the great work4");
        miami.b5(1, "Keep up the great work5");
        miami.b6(4, "Keep up the great work6");
        miami.b7(3, "Keep up the great work7");
        miami.b8(2, "Keep up the great work8");
        miami.b9(1, "Keep up the great work9");
        miami.b10(4, "Keep up the great work10");
        miami.c1(4, "Keep up the great work1");
        miami.c2(4, "Keep up the great work2");
        miami.c3(3, "More forte3");
        miami.c4(2, "Keep up the great work4");
        miami.c5(1, "Keep up the great work5");
        miami.c6(4, "Keep up the great work6");
        miami.c7(3, "Keep up the great work7");
        miami.c8(2, "Keep up the great work8");
        miami.c9(1, "Keep up the great work9");
        miami.c10(4, "Keep up the great work10");
        jaden.a1(4, "Wonderufl tone");
        jaden.a2(2, "Wonderful tone");
        jaden.a3(2, "Wonderful tone");
    }

    var person = "";
    let days = 6 / 2;
    // let daysfresh = 3 / 2;
    let studentsString = ["jaden", "miami","jude"];
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
    var options = document.getElementById("options");
    var completeStats = document.getElementById("completeStats");
    var raidBtn = document.getElementById("raids");
    var side = document.getElementById("sideQuests");
    var top1 = document.getElementById("topscore1");
    var top2 = document.getElementById("topscore2");
    var top3 = document.getElementById("topscore3");
    var top4 = document.getElementById("topscore4");
    var top5 = document.getElementById("topscore5");
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
        instrument,
        realname,
        currentClass,
        orchestra
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
        this.realname = realname;
        this.currentClass = currentClass;
        this.orchestra = orchestra;

        this.attack = this.facility + this.intonation + this.shifting;
        this.defense = this.bowControl + this.rhythm + this.musicality;
        this.totalScore = this.attack + this.defense + this.coins;
        // this.grade = coins / 3;

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
    };

    const jaden = new Character(
        "Cluck Norris",
        "baroque",
        1,
        "https://media0.giphy.com/media/ghHDuqJ1uh9vP2gKdC/giphy.gif",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "violin",
        "jaden",
        "junior"
    );
    const miami = new Character(
        "Smash",
        "romantic",
        1,
        "https://media.giphy.com/media/10bKPDUM5H7m7u/giphy.gif",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "bass",
        "miami",
        "junior"
    );

    const jude = new Character(
        "MiserableLegato",
        "century",
        0,
        "data:image/jpeg;base64,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",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "Bass",
        "jude",
        "Freshman"
    );
    let students = [jaden, miami, jude];

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
                this.level3[1] = "A+";
                this.level3COM[1] = comments;
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
                this.level3[1] = "A-";
                this.level3COM[1] = comments;
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
                this.level3[1] = "B";
                this.level3COM[1] = comments;
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
                this.level3[1] = "C";
                this.level3COM[1] = comments;
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
                this.level3[2] = "A+";
                this.level3COM[2] = comments;
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
                this.level3[2] = "A-";
                this.level3COM[2] = comments;
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
                this.level3[2] = "B";
                this.level3COM[2] = comments;
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
                this.level3[2] = "C";
                this.level3COM[2] = comments;
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
    Character.prototype.grading = function () {
        this.grade = this.coins / days;
        // alert(this.grade);

        if (this.grade >= 7.2) {
            assign3.innerHTML = "Current Grade: A+";
        } else if (this.grade >= 6.4) {
            assign3.innerHTML = "Current Grade: A";
        } else if (this.grade >= 5.6) {
            assign3.innerHTML = "Current Grade: A-";
        } else if (this.grade >= 4.8) {
            assign3.innerHTML = "Current Grade: B+";
        } else if (this.grade >= 4.0) {
            assign3.innerHTML = "Current Grade: B";
        } else if (this.grade >= 3.33) {
            assign3.innerHTML = "Current Grade: B-";
        } else if (this.grade >= 2.66) {
            assign3.innerHTML = "Current Grade: C+";
        } else if (this.grade >= 2.0) {
            assign3.innerHTML = "Current Grade: C";
        } else if (this.grade >= 1.66) {
            assign3.innerHTML = "Current Grade: C-";
        } else if (this.grade >= 1.33) {
            assign3.innerHTML = "Current Grade: D+";
        } else if (this.grade >= 1) {
            assign3.innerHTML = "Current Grade: D";
        } else if (this.grade >= 0.5) {
            assign3.innerHTML = "Current Grade: D-";
        } else {
            assign3.innerHTML = "Current Grade: F";
        }
    };
    Character.prototype.freshGrading = function () {
        this.grade = this.coins / days;
        // alert(this.grade);

        if (this.grade >= 3.66) {
            assign3.innerHTML = "Current Grade: A+";
        } else if (this.grade >= 3.33) {
            assign3.innerHTML = "Current Grade: A";
        } else if (this.grade >= 3) {
            assign3.innerHTML = "Current Grade: A-";
        } else if (this.grade >= 2.5) {
            assign3.innerHTML = "Current Grade: B+";
        } else if (this.grade >= 2.0) {
            assign3.innerHTML = "Current Grade: B";
        } else if (this.grade >= 1.66) {
            assign3.innerHTML = "Current Grade: B-";
        } else if (this.grade >= 1.33) {
            assign3.innerHTML = "Current Grade: C+";
        } else if (this.grade >= 1.0) {
            assign3.innerHTML = "Current Grade: C";
        } else if (this.grade >= 0.8) {
            assign3.innerHTML = "Current Grade: C-";
        } else if (this.grade >= 0.6) {
            assign3.innerHTML = "Current Grade: D+";
        } else if (this.grade >= 0.4) {
            assign3.innerHTML = "Current Grade: D";
        } else if (this.grade >= 0.2) {
            assign3.innerHTML = "Current Grade: D-";
        } else {
            assign3.innerHTML = "Current Grade: F";
        }
    };

    function initialPrompt() {
        if (typeof localStorage.getItem("person") == "string") {
            var j = parseInt(localStorage.getItem("person"));
            personage = students[j];
            person = studentsString[j];
            clearAll();
            assignments();
            side.classList.remove("side");
            personage.evaluate();
            personage.printStats();
        } else {
            if (confirm("Do you need to create a new character?")) {
                window.location.href =
                    "https://docs.google.com/forms/d/e/1FAIpQLSdMgHuUOYFiue00Kd5yFfabSDPas3xhPv7RwRTG89foIbhjYg/viewform?usp=sf_link";
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
                        side.classList.remove("side");
                        personage.evaluate();
                        personage.printStats();
                        location.reload();
                    }
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
        clearAll();
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
            alert(
                "Please include your 1. Real Name and 2. Assignment Number(s) in the Name Section"
            );
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
            alert(
                "Please include your 1. Real Name and 2. Assignment Number(s) in the Name Section"
            );
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
                "<a target='_blank' href='https://drive.google.com/file/d/16hYXmV00RlTojF55RbwXdnmkf3ZThngU/view?usp=sharing'>Quest: Apply the 6 rhythms to the assigned two octave scale</a>";
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
            alert(
                "Please include your 1. Real Name and 2. Assignment Number(s) in the Name Section"
            );
        });
        // A1
        assign1.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/16C2EiRZnbAqLih0DMWXg6I7jDuuRqpA_?usp=sharing'>Quest: Complete Numbers 56,57 and 58</a>";
            reward.innerHTML = "Reward: Intonation(4) + Shifting(2) + Coins(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level3COM[0]}`;
        });
        // A2
        assign2.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/16C2EiRZnbAqLih0DMWXg6I7jDuuRqpA_?usp=sharing'>Quest: Complete Number 41</a>";
            reward.innerHTML =
                "Reward: Intonation(4) + Shifting(2) + Bow Control(4) + Rhythm(2) + Musicality(2) + Coins(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level3COM[1]}`;
        });
        // A3
        assign3.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/16C2EiRZnbAqLih0DMWXg6I7jDuuRqpA_?usp=sharing'>Quest: Complete Number 42 at BPM 160</a>";
            reward.innerHTML =
                "Reward: Intonation(2) + Shifting(2) +  Facility(4) + Bow Control(4) + Musicality(2) + Coins(4) ";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level3COM[2]}`;
        });
        // A4
        assign4.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/16C2EiRZnbAqLih0DMWXg6I7jDuuRqpA_?usp=sharing'>Quest: Complete Numbers 125 and 126</a>";
            reward.innerHTML =
                "Reward: Intonation(4) + Shifting(2) + Facility(2) + Rhythm(2) + Coins(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level3COM[3]}`;
        });
        // A5
        assign5.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/16C2EiRZnbAqLih0DMWXg6I7jDuuRqpA_?usp=sharing'>Quest: Complete Number 127 at 120BPM</a>";
            reward.innerHTML =
                "Reward: Intonation(4) + Shifting(4) + Facility(8) + Bow Control(4) + Coins(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level3COM[4]}`;
        });
        6;
        // A6
        assign6.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/16C2EiRZnbAqLih0DMWXg6I7jDuuRqpA_?usp=sharing'>Quest: Complete Numbers 131 and 132</a>";
            reward.innerHTML =
                "Reward: Intonation(4) + Shifting(2) + Facility(2) + Rhythm(2) + Coins(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level3COM[5]}`;
        });
        // A7
        assign7.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/16C2EiRZnbAqLih0DMWXg6I7jDuuRqpA_?usp=sharing'>Quest: Complete Number 133 at 120BPM</a>";
            reward.innerHTML =
                "Reward: Intonation(4) + Shifting(4) + Facility(8) + Bow Control(4) + Coins(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level3COM[6]}`;
        });
        // A8
        assign8.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/16C2EiRZnbAqLih0DMWXg6I7jDuuRqpA_?usp=sharing'>Quest: Complete Number 128 at 100BPM</a>";
            reward.innerHTML =
                "Reward: Intonation(4) + Bow Control(4) + Rhythm(4) + Musicality(4) + Coins(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level3COM[7]}`;
        });
        // A9
        assign9.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/16C2EiRZnbAqLih0DMWXg6I7jDuuRqpA_?usp=sharing'>Quest: Complete Number 134 at 90BPM</a>";
            reward.innerHTML =
                "Reward: Intonation(4) + Bow Control(4) + Rhythm(4) + Musicality(4) + Coins(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level3COM[8]}`;
        });
        // A10
        assign10.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/16C2EiRZnbAqLih0DMWXg6I7jDuuRqpA_?usp=sharing'>Quest: Apply the 6 rhythms to the assigned two octave scale</a>";
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
            alert(
                "Remember to include your Real Name and Assignment Number(s) in the Name Section"
            );
        });
    }
    function leval5() {
        currentLevel.innerHTML = `Level 5`;
        assign1.innerHTML = `Assignment 1:${personage.level5[0]}`;
        upload.innerHTML = "Upload a Recording";
        upload.href = "https://driveuploader.com/upload/ItgcnvBt3U/";
        upload.style.cursor = "pointer";
        upload.addEventListener("click", function () {
            alert(
                "Remember to include your Real Name and Assignment Number(s) in the Name Section"
            );
        });
    }
    function leval6() {
        currentLevel.innerHTML = `Level 6`;
        assign1.innerHTML = `Assignment 1: ${personage.level6[0]}`;
        upload.innerHTML = "Upload a Recording";
        upload.href = "https://driveuploader.com/upload/ItgcnvBt3U/";
        upload.style.cursor = "pointer";
        upload.addEventListener("click", function () {
            alert(
                "Remember to include your Real Name and Assignment Number(s) in the Name Section"
            );
        });
    }
    function leval7() {
        currentLevel.innerHTML = `Level 7`;
        assign1.innerHTML = `Assignment 1: ${personage.level7[0]}`;
        upload.innerHTML = "Upload a Recording";
        upload.href = "https://driveuploader.com/upload/ItgcnvBt3U/";
        upload.style.cursor = "pointer";
        upload.addEventListener("click", function () {
            alert(
                "Remember to include your Real Name and Assignment Number(s) in the Name Section"
            );
        });
    }
    function leval8() {
        currentLevel.innerHTML = `Level 8`;
        assign1.innerHTML = `Assignment 1: ${personage.level8[0]}`;
        upload.innerHTML = "Upload a Recording";
        upload.href = "https://driveuploader.com/upload/ItgcnvBt3U/";
        upload.style.cursor = "pointer";
        upload.addEventListener("click", function () {
            alert(
                "Remember to include your Real Name and Assignment Number(s) in the Name Section"
            );
        });
    }
    function leval9() {
        currentLevel.innerHTML = `Level 9`;
        assign1.innerHTML = `Assignment 1: ${personage.level9[0]}`;
        upload.innerHTML = "Upload a Recording";
        upload.href = "https://driveuploader.com/upload/ItgcnvBt3U/";
        upload.style.cursor = "pointer";
        upload.addEventListener("click", function () {
            alert(
                "Remember to include your Real Name and Assignment Number(s) in the Name Section"
            );
        });
    }
    function leval10() {
        currentLevel.innerHTML = `Level 10`;
        assign1.innerHTML = `Assignment 1: ${personage.level10[0]}`;
        upload.innerHTML = "Upload a Recording";
        upload.href = "https://driveuploader.com/upload/ItgcnvBt3U/";
        upload.style.cursor = "pointer";
        upload.addEventListener("click", function () {
            alert(
                "Remember to include your Real Name and Assignment Number(s) in the Name Section"
            );
        });
    }
    function raidFunc() {
        clearAll();
        currentLevel.innerHTML = `Raids`;
        assign1.innerHTML = `Two Duets in CM and GM(r1): ${personage.raids[0]}`;
        assign2.innerHTML = `Two Duets in DM and AM(r2): ${personage.raids[1]}`;
        assign3.innerHTML = `Two Duets in FM and BbM(r3): ${personage.raids[2]}`;

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
        assign3.addEventListener("click", raid3);

        if (personage.coins < 22) {
            assign2.innerHTML = "";
            assign2.removeEventListener("click", raid2);
            assign3.innerHTML = "";
            assign3.removeEventListener("click", raid3);
        } else if (personage.coins < 62) {
            assign3.innerHTML = "";
            assign3.removeEventListener("click", raid3);
        }
    }

    function optionFunc() {
        clearAll();
        currentLevel.innerHTML = `Options`;
        assign1.innerHTML = `<a href="../index.html">Return to Home Screen</a>`;
        assign2.innerHTML = ` <a href="https://github.com/justinwilliamsrva/chhsorchestra/issues">Submit an Issue via Github</a>`;
        assign3.innerHTML = `Origins to Ensemble Empires`;
        assign4.innerHTML = "Contributors";
        assign3.addEventListener("click", function () {
            clearInstructions();
            instruct.innerHTML =
                "<div style='20px';><p>Long forgotten until the Second Symphonic Age laid the Golden Era of Harmony, a time when musician in every nation dwelt in peace. In each nation was a different people and reign of power: the Baroque Kingdom, the Classical Reign, the Romantic Dynasty, and the 21st Centurions; each separate in culture, beliefs , and practices. Any non-musician might say they were destined to fall to war but in the early days, the alliance of the four empires reigned supreme. Dissonance among people was rare, and many delighted in the changes of knowledge and customs.</p> <br> <p>There were those , however, who found chaos in the commingling, and dissenters form each nation orchestra a plan to destroy the foundation of trust and understanding. In a single night, before the break of dawn, the dissenters that came to be known as the Heretic of Hive had eliminated each nation principal and the people clashed against each other, drawing bow and sounds horns, calling he sounds of war </p><br><p>Peace must be restored among this world, for because of the blind assault, music cannot fow as freely as it once did. As a musician of much knowledge and incredible passion, you must help bring an end to this war whether for your nation, or the good of all nation. The flight for coalesces will be grating, tiresome and may even seem impossible at time but only hearts like yours can bring rest to the pain and resolve the unrest.</p></div>";
        });
        assign4.addEventListener("click", function () {
            clearInstructions();
            instruct.innerHTML =
                "<br><p><b>Katy Stenner</b>: Teams Names, Viola/Bass Side Quests</p><p><b>William Wang</b>: Background Images, Icons, Violin Side Quests</p><p><b>Kasudie Burton</b>: Story</p><p><b>Jaden Eaglin</b>: Chromebook Testing</p><p><b>Clover Hill High School Orchestra 2020-2021</b>: Beta Testing";
        });
    }

    function completeStatsFunc() {
        clearAll();
        currentLevel.innerHTML = `Complete Stats`;
        assign1.innerHTML = `Total Score: ${personage.totalScore}`;
        assign2.innerHTML = `Current Rank: Coming Soon`;
        personage.grading();
        // if (person == "jaden") {
        //     personage.freshGrading();
        // } else if (person == "miami") {
        //     personage.grading();
        // }

        assign5.innerHTML = `Rank on Team: Coming Soon`;
        assign6.innerHTML = `Rank on Instrument: Coming Soon`;
    }

    function clearInstructions() {
        instruct.innerHTML = "";
        reward.innerHTML = "";
        recording.innerHTML = "";
        comment.innerHTML = "";
    }
    function clearQuests() {
        currentLevel.innerHTML = "CCPS HIGH SCHOOL ORCHESTRA LEARNING<br>BETA VERSION 1.40";
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
            alert(
                "Please include your 1. Real Name and 2. Assignment Number(s) in the Name Section"
            );
        });
    }
    function clearAll() {
        clearInstructions();
        clearQuests();
    }

    function raid2() {
        instruct.innerHTML = "<p>Quest: Record Numbers 117 and 123 with a partner</p>";
        reward.innerHTML =
            "Reward: Intonation(8) + Facility(4) + Bow Control(4) + Rhythm(8) + Musicality(4) + Coins(8)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.raidsCOM[1]}`;
    }
    function raid3() {
        instruct.innerHTML = "<p>Quest: Record Numbers 129 and 135 with a partner</p>";
        reward.innerHTML =
            "Reward: Intonation(8) + Facility(4) + Bow Control(4) + Rhythm(8) + Musicality(4) + Coins(8)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.raidsCOM[2]}`;
    }
    function createCharacater() {
        alert("You created a character!");
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
    options.addEventListener("click", optionFunc);
    completeStats.addEventListener("click", completeStatsFunc);
    raidBtn.addEventListener("click", raidFunc);
    initialPrompt();

    let topScore = [];
    function topScoreFunc(item) {
        topScore.push({
            name: item.name,
            team: item.team,
            instrument: item.instrument,
            total_score: item.totalScore,
        });
        // topScore.push(
        //     { jaden: jaden.totalScore, instrument: jaden.instrument,team: jaden.team },
        //     { miami: miami.totalScore, instrument: jaden.instrument, team: miami.team }
        // );
        // console.log(jaden.coins);
    }
    students.forEach(topScoreFunc);
    console.log(topScore);

    var highScore = _.sortBy(topScore, function (people) {
        return people.total_score * -1;
    });

    top1.innerHTML = `${highScore[0].name} - ${highScore[0].total_score}`;
    top2.innerHTML = `${highScore[1].name} - ${highScore[1].total_score}`;
    top3.innerHTML = `${highScore[2].name} - ${highScore[2].total_score}`;
    top4.innerHTML = `${highScore[3].name} - ${highScore[3].total_score}`;
    top5.innerHTML = `${highScore[4].name} - ${highScore[4].total_score}`;

    console.log(highScore[0].name, highScore[1].name);

    // console.log(miami.coins);

    // module.exports = Character;
};
