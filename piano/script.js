window.onload = function () {
    function assignments() {
        jada.a4(3, "Should be played an octave lower");
        jaden.a1(4, "Burger King");
        ken.a1(4, "That's the song");
        rodrick.a1(4, "Good")
        rodrick.a1("t")
        rodrick.a1("c")
        brady.a1(4, "Correct")
        jacob.a1(2,"not the correct notes")
        reuben.a2(4, "Good")
        // joseph.a1(4," Good you don't have to repeat")
        // samuel.a2(2,"Play wrong note in 2nd exercise. It is cceegg. you played cceeff. Also keep the music steady all quarter notes should sound the same")
        rodrick.a3(4)
        rodrick.a3("c")
        brady.a2(4,"Good. Try to connect the notes more if you can to make the music more lyrical and less choppy")
        reuben.a1(4, "Good")
        victoria.a1(3, "It sounds like you either played it all with one hand or moved your left hand to take the same place as your right hand. THe two hand should be in different places")
        rebecca.a2(2, "in the both There are too many breaks between the measures. Go slow enough that you don't need time to think")
        jada.a1(4, "Good")
        // joseph.a2(4,"You don\'t need to repeat")
        somros.a2(3,"Good except your rhythm is off on your long notes. Most of the time you hold them for longer than asked.")
        rebecca.a1(4, "Correct")
        rodrick.a2(4)
        rodrick.a2("c")
        jaden.a2(4)
        kyle.a1(4)
        // samuel.a1(3,"Keep the music steady")
        jaden.a1("t")
        jaden.a3(4)
        ken.a2(4)
        reuben.a4(4)



    }

    var person = "";
    let days = .5;
    // let daysfresh = 3 / 2;
    let studentsString = [
        "nick",
        "victoria",
        "brady",
        "josendo",
        "rodrick",
        "laskey",
        "jada",
        "trinity",
        "kyle ",
        "rebecca",
        "jabari",
        "somros",
        "ken",
        "jaden",
        "jacob",
        "jamari",
        "tyler",
        "melissa",
        "Andrew",
        "reuben",
        "sierra",
    ];
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
        accuracy,
        coordination,
        theory,
        rhythm,
        musicality,
        realname,
        currentClass
    ) {
        this.name = name;
        this.team = team;
        this.level = level;
        this.image = image;
        this.coins = coins;
        this.facility = facility;
        this.accuracy = accuracy;
        this.coordination = coordination;
        this.theory = theory;
        this.rhythm = rhythm;
        this.musicality = musicality;
        this.realname = realname;
        this.currentClass = currentClass;

        this.attack = this.facility + this.accuracy + this.coordination;
        this.defense = this.theory + this.rhythm + this.musicality;
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
    }

    const nick = new Character(
        "meliodas",
        "classical",
        1,
        "",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "nick",
        "Freshman"
    );
    const victoria = new Character(
        "janis",
        "baroque",
        1,
        "",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "victoria",
        "Freshman"
    );
    const brady = new Character(
        "Niko",
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
        "brady",
        "Freshman"
    );
    const josendo = new Character(
        "Wolfgang",
        "century",
        1,
        "https://static.jojowiki.com/images/6/69/latest/20200315224143/Jotaro_SC_Infobox_Manga.png",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "josendo",
        "Freshman"
    );
    const rodrick = new Character(
        "dog4lifess",
        "classical",
        1,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCsnK7p0rREjPUFIOT474mDoitJueC69j2rg&usqp=CAU",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "rodrick",
        "Junior"
    );
    const laskey = new Character(
        "emberwood",
        "baroque",
        1,
        "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2F06b92274-f3e8-11e4-99de-00144feab7de?fit=scale-down&source=next&width=700",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "laskey",
        "Junior"
    );
    const jada = new Character(
        "jade",
        "romantic",
        1,
        "https://www.uokpl.rs/fpng/d/12-123954_bunny-transparent-background.png",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "jada",
        "Junior"
    );
    const trinity = new Character(
        "jessie",
        "century",
        1,
        "https://m.media-amazon.com/images/M/MV5BMjIxNTEwMzczOF5BMl5BanBnXkFtZTgwNDUxMDM5NTM@._V1_.jpg",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "trinity",
        "Junior"
    );
    const kyle = new Character(
        "Kyle",
        "classical",
        1,
        "data:image/jpeg;base64,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",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "kyle ",
        "Junior"
    );
    const rebecca = new Character(
        "Sunny",
        "baroque",
        1,
        "http://ecx.images-amazon.com/images/I/41i6H31xZoL.jpg",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "rebecca",
        "Junior"
    );
    const jabari = new Character(
        "larscandyeyes",
        "romantic",
        1,
        "https://i.pinimg.com/originals/5a/a6/b0/5aa6b03b11d07f9d2e9ab07a2a3449d4.gif",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "jabari",
        "Junior"
    );
    const somros = new Character(
        "somroschang",
        "century",
        1,
        "https://www.pngfind.com/pngs/m/22-228742_mods-banning-people-discord-blob-emoji-hd-png.png",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "somros",
        "Senior"
    );
    const ken = new Character(
        "ken",
        "classical",
        1,
        "https://cdn.discordapp.com/attachments/234143393704312833/752900194533900438/IMG_20200507_123859__01.jpg",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "ken",
        "Senior"
    );
    const jaden = new Character(
        "piaNO",
        "baroque",
        1,
        "https://media.giphy.com/media/EriPNV1whwKac/giphy.gif",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "jaden",
        "Senior"
    );
    const jacob = new Character(
        "j",
        "romantic",
        1,
        "https://images-platform.99static.com//WTrMjPQwP8Mveu4WZ8uN9kj-Yr8=/0x0:600x600/fit-in/590x590/projects-files/56/5672/567261/e0ceaeff-4944-4a7a-b275-28009b651985.jpg",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "jacob",
        "Senior"
    );
    const jamari = new Character(
        "jara",
        "century",
        1,
        "data:image/jpeg;base64,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",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "jamari",
        "Senior"
    );
    const tyler = new Character(
        "<3 ~Melody~ <3",
        "classical",
        1,
        "https://pbs.twimg.com/media/D4H1lx1UUAEsil8.jpg",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "tyler",
        "Sophomore"
    );
    const melissa = new Character(
        "njtastic",
        "baroque",
        1,
        "https://i.pinimg.com/originals/ba/1e/58/ba1e580803e208bfc926785a37ab6caf.jpg",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "melissa",
        "Sophomore"
    );
    const Andrew = new Character(
        "Mighty",
        "romantic",
        1,
        "https://images.app.goo.gl/fb2oVNaVqgX7ic3F9",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "Andrew",
        "Sophomore"
    );
    const reuben = new Character(
        "The glass man",
        "century",
        1,
        "https://i.pinimg.com/originals/0d/1a/3f/0d1a3f9706f9158efbcc8ef18240536b.jpg",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "reuben",
        "Sophomore"
    );
    const sierra = new Character(
        "stormy<3",
        "classical",
        1,
        "https://i.pinimg.com/originals/31/dd/1a/31dd1a2a8a59839474b86d38553d9517.jpg",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "sierra",
        "Freshman"
    );
    let students = [
        nick,
        victoria,
        brady,
        josendo,
        rodrick,
        laskey,
        jada,
        trinity,
        kyle,
        rebecca,
        jabari,
        somros,
        ken,
        jaden,
        jacob,
        jamari,
        tyler,
        melissa,
        Andrew,
        reuben,
        sierra,
    ];

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
        this.attack = this.facility + this.accuracy + this.coordination;
        this.defense = this.theory + this.rhythm + this.musicality;
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
        coin.innerHTML = `<img id="coinPng" src="../assets/EXP_1.jpg"> ${this.coins}`;
        level.innerHTML = `<img id="levelPng" src="../assets/LEVEL.png"> ${this.level}`;
        fac.innerHTML = `Facility: ${this.facility}`;
        inton.innerHTML = `Accuracy: ${this.accuracy}`;
        shift.innerHTML = `Coordination: ${this.coordination}`;
        bow.innerHTML = `Theory: ${this.theory}`;
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
                this.facility = this.facility;
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination;
                this.theory = this.theory + 2;
                this.rhythm = this.rhythm + 4;
                this.musicality = this.musicality;
                this.coins = this.coins + 4;
                this.level1[0] = "A+";
                this.level1COM[0] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.facility = this.facility;
                this.accuracy = this.accuracy + 1;
                this.coordination = this.coordination;
                this.theory = this.theory + 1;
                this.rhythm = this.rhythm + 3;
                this.musicality = this.musicality;
                this.coins = this.coins + 3;
                this.level1[0] = "A-";
                this.level1COM[0] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.facility = this.facility;
                this.accuracy = this.accuracy;
                this.coordination = this.coordination;
                this.theory = this.theory;
                this.rhythm = this.rhythm + 2;
                this.musicality = this.musicality;
                this.coins = this.coins + 2;
                this.level1[0] = "B";
                this.level1COM[0] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.facility = this.facility;
                this.accuracy = this.accuracy;
                this.coordination = this.coordination;
                this.theory = this.theory;
                this.rhythm = this.rhythm + 1;
                this.musicality = this.musicality;
                this.coins = this.coins + 1;
                this.level1[0] = "C";
                this.level1COM[0] = comments;
                this.evaluate();
                this.printStats();
                break;
            case "t":
                this.theory = this.theory = 4;
                this.level1[0] = this.level1[0] + " t";
                this.evaluate();
                this.printStats();
                break;
            case "f":
                this.facility = this.facility = 4;
                this.level1[0] = this.level1[0] + "f";
                this.evaluate();
                this.printStats();
                break;
            case "c":
                this.coordination = this.coordination = 4;
                this.level1[0] = this.level1[0] + "c";
                this.evaluate();
                this.printStats();
                break;
        }
    };
    Character.prototype.a2 = function (score, comments) {
        switch (score) {
            case 4:
                this.facility = this.facility + 4;
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 0;
                this.theory = this.theory + 2;
                this.rhythm = this.rhythm + 0;
                this.musicality = this.musicality + 0;
                this.coins = this.coins + 4;
                this.level1[1] = "A+";
                this.level1COM[1] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.facility = this.facility + 3;
                this.accuracy = this.accuracy + 1;
                this.coordination = this.coordination + 0;
                this.theory = this.theory + 1;
                this.rhythm = this.rhythm + 0;
                this.musicality = this.musicality + 0;
                this.coins = this.coins + 3;
                this.level1[1] = "A-";
                this.level1COM[1] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.facility = this.facility + 2;
                this.accuracy = this.accuracy + 0;
                this.coordination = this.coordination + 0;
                this.theory = this.theory + 0 ;
                this.rhythm = this.rhythm + 0;
                this.musicality = this.musicality + 0;
                this.coins = this.coins + 2;
                this.level1[1] = "B";
                this.level1COM[1] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.facility = this.facility + 1;
                this.accuracy = this.accuracy + 0;
                this.coordination = this.coordination + 0;
                this.theory = this.theory + 0;
                this.rhythm = this.rhythm + 0;
                this.musicality = this.musicality + 0;
                this.coins = this.coins + 1;
                this.level1[1] = "C";
                this.level1COM[1] = comments;
                this.evaluate();
                this.printStats();
                break;
            case "t":
                this.theory = this.theory = 4;
                this.level1[1] = this.level1[1] + ": t";
                this.evaluate();
                this.printStats();
                break;
            case "f":
                this.facility = this.facility = 4;
                this.level1[1] = this.level1[1] + "f";
                this.evaluate();
                this.printStats();
                break;
            case "c":
                this.coordination = this.coordination = 4;
                this.level1[1] = this.level1[1] + "c";
                this.evaluate();
                this.printStats();
                break;
        }
    };
    Character.prototype.a3 = function (score, comments) {
        switch (score) {
            case 4:
                case 4:
                this.facility = this.facility + 2;
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 2;
                this.theory = this.theory + 2;
                this.rhythm = this.rhythm + 2;
                this.musicality = this.musicality + 0;
                this.coins = this.coins + 4;
                this.level1[2] = "A+";
                this.level1COM[2] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.facility = this.facility + 1;
                this.accuracy = this.accuracy + 1;
                this.coordination = this.coordination + 1;
                this.theory = this.theory + 1;
                this.rhythm = this.rhythm + 1;
                this.musicality = this.musicality + 0;
                this.coins = this.coins + 3;
                this.level1[2] = "A-";
                this.level1COM[2] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.facility = this.facility + 0;
                this.accuracy = this.accuracy + 0;
                this.coordination = this.coordination + 0;
                this.theory = this.theory + 0 ;
                this.rhythm = this.rhythm + 0;
                this.musicality = this.musicality + 0;
                this.coins = this.coins + 2;
                this.level1[2] = "B";
                this.level1COM[2] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.facility = this.facility + 0;
                this.accuracy = this.accuracy + 0;
                this.coordination = this.coordination + 0;
                this.theory = this.theory + 0;
                this.rhythm = this.rhythm + 0;
                this.musicality = this.musicality + 0;
                this.coins = this.coins + 1;
                this.level1[2] = "C";
                this.level1COM[2] = comments;
                this.evaluate();
                this.printStats();
                break;
            case "t":
                this.theory = this.theory = 4;
                this.level1[2] = this.level1[2] + ": t";
                this.evaluate();
                this.printStats();
                break;
            case "f":
                this.facility = this.facility = 4;
                this.level1[2] = this.level1[2] + "f";
                this.evaluate();
                this.printStats();
                break;
            case "c":
                this.coordination = this.coordination = 4;
                this.level1[2] = this.level1[2] + "c";
                this.evaluate();
                this.printStats();
                break;
        }
    };
    Character.prototype.a4 = function (score, comments) {
        switch (score) {
            case 4:
                this.facility = this.facility + 2;
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 2;
                this.theory = this.theory + 2;
                this.rhythm = this.rhythm + 2;
                this.musicality = this.musicality + 0;
                this.coins = this.coins + 4;
                this.level1[3] = "A+";
                this.level1COM[3] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.facility = this.facility + 1;
                this.accuracy = this.accuracy + 1;
                this.coordination = this.coordination + 1;
                this.theory = this.theory + 1;
                this.rhythm = this.rhythm + 1;
                this.musicality = this.musicality + 0;
                this.coins = this.coins + 3;
                this.level1[3] = "A-";
                this.level1COM[3] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.facility = this.facility + 0;
                this.accuracy = this.accuracy + 0;
                this.coordination = this.coordination + 0;
                this.theory = this.theory + 0 ;
                this.rhythm = this.rhythm + 0;
                this.musicality = this.musicality + 0;
                this.coins = this.coins + 2;
                this.level1[3] = "B";
                this.level1COM[3] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.facility = this.facility + 0;
                this.accuracy = this.accuracy + 0;
                this.coordination = this.coordination + 0;
                this.theory = this.theory + 0;
                this.rhythm = this.rhythm + 0;
                this.musicality = this.musicality + 0;
                this.coins = this.coins + 1;
                this.level1[3] = "C";
                this.level1COM[3] = comments;
                this.evaluate();
                this.printStats();
                break;
            case "t":
                this.theory = this.theory = 4;
                this.level1[3] = this.level1[3] + ": t";
                this.evaluate();
                this.printStats();
                break;
            case "f":
                this.facility = this.facility = 4;
                this.level1[3] = this.level1[3] + "f";
                this.evaluate();
                this.printStats();
                break;
            case "c":
                this.coordination = this.coordination = 4;
                this.level1[3] = this.level1[3] + "c";
                this.evaluate();
                this.printStats();
                break;
        }
    };
    Character.prototype.a5 = function (score, comments) {
        switch (score) {
            case 4:
                this.facility = this.facility + 0;
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 2;
                this.theory = this.theory + 0;
                this.rhythm = this.rhythm + 2;
                this.musicality = this.musicality + 4;
                this.coins = this.coins + 4;
                this.level1[4] = "A+";
                this.level1COM[4] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.facility = this.facility + 0;
                this.accuracy = this.accuracy + 1;
                this.coordination = this.coordination + 1;
                this.theory = this.theory + 0;
                this.rhythm = this.rhythm + 1;
                this.musicality = this.musicality + 3;
                this.coins = this.coins + 3;
                this.level1[4] = "A-";
                this.level1COM[4] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.facility = this.facility + 0;
                this.accuracy = this.accuracy + 0;
                this.coordination = this.coordination + 0;
                this.theory = this.theory + 0 ;
                this.rhythm = this.rhythm + 0;
                this.musicality = this.musicality + 2;
                this.coins = this.coins + 2;
                this.level1[4] = "B";
                this.level1COM[4] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.facility = this.facility + 0;
                this.accuracy = this.accuracy + 0;
                this.coordination = this.coordination + 0;
                this.theory = this.theory + 0;
                this.rhythm = this.rhythm + 0;
                this.musicality = this.musicality + 1;
                this.coins = this.coins + 1;
                this.level1[4] = "C";
                this.level1COM[4] = comments;
                this.evaluate();
                this.printStats();
                break;
            case "t":
                this.theory = this.theory = 4;
                this.level1[4] = this.level1[4] + ": t";
                this.evaluate();
                this.printStats();
                break;
            case "f":
                this.facility = this.facility = 4;
                this.level1[4] = this.level1[4] + "f";
                this.evaluate();
                this.printStats();
                break;
            case "c":
                this.coordination = this.coordination = 4;
                this.level1[4] = this.level1[4] + "c";
                this.evaluate();
                this.printStats();
                break;
        }
    };
    Character.prototype.a6 = function (score, comments) {
        switch (score) {
            case 4:
                this.facility = this.facility + 2;
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 2;
                this.theory = this.theory + 0;
                this.rhythm = this.rhythm + 2;
                this.musicality = this.musicality + 4;
                this.coins = this.coins + 4;
                this.level1[5] = "A+";
                this.level1COM[5] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.facility = this.facility + 1;
                this.accuracy = this.accuracy + 1;
                this.coordination = this.coordination + 1;
                this.theory = this.theory + 0;
                this.rhythm = this.rhythm + 1;
                this.musicality = this.musicality + 3;
                this.coins = this.coins + 3;
                this.level1[5] = "A-";
                this.level1COM[5] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.facility = this.facility + 0;
                this.accuracy = this.accuracy + 0;
                this.coordination = this.coordination + 0;
                this.theory = this.theory + 0 ;
                this.rhythm = this.rhythm + 0;
                this.musicality = this.musicality + 2;
                this.coins = this.coins + 2;
                this.level1[5] = "B";
                this.level1COM[5] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.facility = this.facility + 0;
                this.accuracy = this.accuracy + 0;
                this.coordination = this.coordination + 0;
                this.theory = this.theory + 0;
                this.rhythm = this.rhythm + 0;
                this.musicality = this.musicality + 1;
                this.coins = this.coins + 1;
                this.level1[5] = "C";
                this.level1COM[5] = comments;
                this.evaluate();
                this.printStats();
                break;
            case "t":
                this.theory = this.theory = 4;
                this.level1[5] = this.level1[5] + ": t";
                this.evaluate();
                this.printStats();
                break;
            case "f":
                this.facility = this.facility = 4;
                this.level1[5] = this.level1[5] + "f";
                this.evaluate();
                this.printStats();
                break;
            case "c":
                this.coordination = this.coordination = 4;
                this.level1[5] = this.level1[5] + "c";
                this.evaluate();
                this.printStats();
                break;
        }
    };
    Character.prototype.a7 = function (score, comments) {
        switch (score) {
            case 4:
                this.facility = this.facility + 2;
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 4;
                this.theory = this.theory + 0;
                this.rhythm = this.rhythm + 2;
                this.musicality = this.musicality + 4;
                this.coins = this.coins + 4;
                this.level1[6] = "A+";
                this.level1COM[6] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.facility = this.facility + 1;
                this.accuracy = this.accuracy + 1;
                this.coordination = this.coordination + 3;
                this.theory = this.theory + 0;
                this.rhythm = this.rhythm + 1;
                this.musicality = this.musicality + 3;
                this.coins = this.coins + 3;
                this.level1[6] = "A-";
                this.level1COM[6] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.facility = this.facility + 0;
                this.accuracy = this.accuracy + 0;
                this.coordination = this.coordination + 2;
                this.theory = this.theory + 0 ;
                this.rhythm = this.rhythm + 1;
                this.musicality = this.musicality + 3;
                this.coins = this.coins + 2;
                this.level1[6] = "B";
                this.level1COM[6] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.facility = this.facility + 0;
                this.accuracy = this.accuracy + 0;
                this.coordination = this.coordination + 1;
                this.theory = this.theory + 0;
                this.rhythm = this.rhythm + 1;
                this.musicality = this.musicality + 3;
                this.coins = this.coins + 1;
                this.level1[6] = "C";
                this.level1COM[6] = comments;
                this.evaluate();
                this.printStats();
                break;
            case "t":
                this.theory = this.theory = 4;
                this.level1[6] = this.level1[6] + ": t";
                this.evaluate();
                this.printStats();
                break;
            case "f":
                this.facility = this.facility = 4;
                this.level1[6] = this.level1[6] + "f";
                this.evaluate();
                this.printStats();
                break;
            case "c":
                this.coordination = this.coordination = 4;
                this.level1[6] = this.level1[6] + "c";
                this.evaluate();
                this.printStats();
                break;
        }
    };
    Character.prototype.a8 = function (score, comments) {
        switch (score) {
            case 4:
                this.theory = this.theory + 4;
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 4;
                this.musicality = this.musicality + 4;
                this.rhythm = this.rhythm + 2;
                this.coins = this.coins + 4;
                this.level1[7] = "A+";
                this.level1COM[7] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.theory = this.theory + 3;
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 3;
                this.rhythm = this.rhythm + 1;
                this.musicality = this.musicality + 3;

                this.coins = this.coins + 3;
                this.level1[7] = "A-";
                this.level1COM[7] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.theory = this.theory + 2;
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 2;
                this.musicality = this.musicality + 2;

                this.coins = this.coins + 2;
                this.level1[7] = "B";
                this.level1COM[7] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.accuracy = this.accuracy + 1;
                this.theory = this.theory + 1;
                this.musicality = this.musicality + 1;

                this.coordination = this.coordination + 1;
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
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 2;
                this.theory = this.theory + 4;
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
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 1;
                this.theory = this.theory + 3;
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
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 0;
                this.theory = this.theory + 2;
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
                this.accuracy = this.accuracy + 1;
                this.coordination = this.coordination + 0;
                this.theory = this.theory + 1;
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
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 4;
                this.theory = this.theory + 2;
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
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 3;
                this.theory = this.theory + 1;
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
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 2;
                this.theory = this.theory + 0;
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
                this.accuracy = this.accuracy + 1;
                this.coordination = this.coordination + 1;
                this.theory = this.theory + 0;
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
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 4;
                this.coins = this.coins + 4;
                this.level2[0] = "A+";
                this.level2COM[0] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 3;
                this.coins = this.coins + 3;
                this.level2[0] = "A-";
                this.level2COM[0] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 2;

                this.coins = this.coins + 2;
                this.level2[0] = "B";
                this.level2COM[0] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.accuracy = this.accuracy + 1;
                this.coordination = this.coordination + 1;
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
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 4;
                this.coins = this.coins + 4;
                this.level2[1] = "A+";
                this.level2COM[1] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 3;
                this.coins = this.coins + 3;
                this.level2[1] = "A-";
                this.level2COM[1] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 2;

                this.coins = this.coins + 2;
                this.level2[1] = "B";
                this.level2COM[1] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.accuracy = this.accuracy + 1;
                this.coordination = this.coordination + 1;
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
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 2;
                this.coins = this.coins + 4;
                this.level2[2] = "A+";
                this.level2COM[2] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 1;
                this.coins = this.coins + 3;
                this.level2[2] = "A-";
                this.level2COM[2] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.accuracy = this.accuracy + 2;
                this.coins = this.coins + 2;
                this.level2[2] = "B";
                this.level2COM[2] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.accuracy = this.accuracy + 1;
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
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 2;
                this.facility = this.facility + 2;
                this.rhythm = this.rhythm + 2;
                this.coins = this.coins + 4;
                this.level2[3] = "A+";
                this.level2COM[3] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 1;
                this.facility = this.facility + 1;
                this.rhythm = this.rhythm + 1;
                this.coins = this.coins + 3;
                this.level2[3] = "A-";
                this.level2COM[3] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.accuracy = this.accuracy + 3;
                this.coins = this.coins + 2;
                this.level2[3] = "B";
                this.level2COM[3] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.accuracy = this.accuracy + 1;
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
                this.theory = this.theory + 4;
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 4;
                this.rhythm = this.rhythm + 2;
                this.coins = this.coins + 4;
                this.level2[4] = "A+";
                this.level2COM[4] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.facility = this.facility + 6;
                this.theory = this.theory + 3;
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 3;
                this.rhythm = this.rhythm + 1;
                this.coins = this.coins + 3;
                this.level2[4] = "A-";
                this.level2COM[4] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.facility = this.facility + 4;
                this.theory = this.theory + 2;
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 2;
                this.coins = this.coins + 2;
                this.level2[4] = "B";
                this.level2COM[4] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.accuracy = this.accuracy + 1;
                this.theory = this.theory + 1;
                this.coordination = this.coordination + 1;
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
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 2;
                this.theory = this.theory + 2;
                this.rhythm = this.rhythm + 2;
                this.coins = this.coins + 4;
                this.level2[5] = "A+";
                this.level2COM[5] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 1;
                this.theory = this.theory + 1;
                this.rhythm = this.rhythm + 1;
                this.coins = this.coins + 3;
                this.level2[5] = "A-";
                this.level2COM[5] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.accuracy = this.accuracy + 2;
                this.coins = this.coins + 2;
                this.level2[5] = "B";
                this.level2COM[5] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.accuracy = this.accuracy + 1;
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
                this.theory = this.theory + 4;
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 4;
                this.rhythm = this.rhythm + 2;
                this.coins = this.coins + 4;
                this.level2[6] = "A+";
                this.level2COM[6] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.facility = this.facility + 6;
                this.theory = this.theory + 3;
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 3;
                this.rhythm = this.rhythm + 1;
                this.coins = this.coins + 3;
                this.level2[6] = "A-";
                this.level2COM[6] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.facility = this.facility + 4;
                this.theory = this.theory + 2;
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 2;
                this.coins = this.coins + 2;
                this.level2[6] = "B";
                this.level2COM[6] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.accuracy = this.accuracy + 1;
                this.theory = this.theory + 1;
                this.coordination = this.coordination + 1;
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
                this.theory = this.theory + 4;
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 0;
                this.musicality = this.musicality + 4;
                this.rhythm = this.rhythm + 4;
                this.coins = this.coins + 4;
                this.level2[7] = "A+";
                this.level2COM[7] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.theory = this.theory + 3;
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 0;
                this.rhythm = this.rhythm + 3;
                this.musicality = this.musicality + 3;

                this.coins = this.coins + 3;
                this.level2[7] = "A-";
                this.level2COM[7] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.theory = this.theory + 2;
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 0;
                this.musicality = this.musicality + 2;
                this.rhythm = this.rhythm + 2;

                this.coins = this.coins + 2;
                this.level2[7] = "B";
                this.level2COM[7] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.accuracy = this.accuracy + 1;
                this.theory = this.theory + 1;
                this.musicality = this.musicality + 1;
                this.rhythm = this.rhythm + 1;

                this.coordination = this.coordination + 0;
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
                this.theory = this.theory + 4;
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 0;
                this.musicality = this.musicality + 4;
                this.rhythm = this.rhythm + 4;
                this.coins = this.coins + 4;
                this.level2[8] = "A+";
                this.level2COM[8] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.theory = this.theory + 3;
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 0;
                this.rhythm = this.rhythm + 3;
                this.musicality = this.musicality + 3;

                this.coins = this.coins + 3;
                this.level2[8] = "A-";
                this.level2COM[8] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.theory = this.theory + 2;
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 0;
                this.musicality = this.musicality + 2;
                this.rhythm = this.rhythm + 2;

                this.coins = this.coins + 2;
                this.level2[8] = "B";
                this.level2COM[8] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.accuracy = this.accuracy + 1;
                this.theory = this.theory + 1;
                this.musicality = this.musicality + 1;
                this.rhythm = this.rhythm + 1;

                this.coordination = this.coordination + 0;
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
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 4;
                this.theory = this.theory + 2;
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
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 3;
                this.theory = this.theory + 1;
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
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 2;
                this.theory = this.theory + 0;
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
                this.accuracy = this.accuracy + 1;
                this.coordination = this.coordination + 1;
                this.theory = this.theory + 0;
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
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 2;
                this.coins = this.coins + 4;
                this.level3[0] = "A+";
                this.level3COM[0] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 2;
                this.coins = this.coins + 3;
                this.level3[0] = "A-";
                this.level3COM[0] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 0;
                this.coins = this.coins + 2;
                this.level3[0] = "B";
                this.level3COM[0] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.accuracy = this.accuracy + 1;
                this.coordination = this.coordination + 0;
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
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 2;
                this.theory = this.theory + 4;
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
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 1;
                this.theory = this.theory + 3;
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
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 0;
                this.theory = this.theory + 2;
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
                this.accuracy = this.accuracy + 1;
                this.coordination = this.coordination + 0;
                this.theory = this.theory + 1;
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
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 2;
                this.theory = this.theory + 4;
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
                this.accuracy = this.accuracy + 1;
                this.coordination = this.coordination + 1;
                this.theory = this.theory + 3;
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
                this.accuracy = this.accuracy + 0;
                this.coordination = this.coordination + 0;
                this.theory = this.theory + 2;
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
                this.accuracy = this.accuracy + 0;
                this.coordination = this.coordination + 0;
                this.theory = this.theory + 1;
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
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 2;
                this.facility = this.facility + 2;
                this.rhythm = this.rhythm + 2;
                this.coins = this.coins + 4;
                this.level3[3] = "A+";
                this.level3COM[3] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 1;
                this.facility = this.facility + 1;
                this.rhythm = this.rhythm + 1;
                this.coins = this.coins + 3;
                this.level3[3] = "A-";
                this.level3COM[3] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.accuracy = this.accuracy + 3;
                this.coins = this.coins + 2;
                this.level3[3] = "B";
                this.level3COM[3] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.accuracy = this.accuracy + 1;
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
                this.theory = this.theory + 4;
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 4;
                this.rhythm = this.rhythm + 2;
                this.coins = this.coins + 4;
                this.level3[4] = "A+";
                this.level3COM[4] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.facility = this.facility + 6;
                this.theory = this.theory + 3;
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 3;
                this.rhythm = this.rhythm + 1;
                this.coins = this.coins + 3;
                this.level3[4] = "A-";
                this.level3COM[4] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.facility = this.facility + 4;
                this.theory = this.theory + 2;
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 2;
                this.coins = this.coins + 2;
                this.level3[4] = "B";
                this.level3COM[4] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.accuracy = this.accuracy + 1;
                this.theory = this.theory + 1;
                this.coordination = this.coordination + 1;
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
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 2;
                this.theory = this.theory + 2;
                this.rhythm = this.rhythm + 2;
                this.coins = this.coins + 4;
                this.level3[5] = "A+";
                this.level3COM[5] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 1;
                this.theory = this.theory + 1;
                this.rhythm = this.rhythm + 1;
                this.coins = this.coins + 3;
                this.level3[5] = "A-";
                this.level3COM[5] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.accuracy = this.accuracy + 2;
                this.coins = this.coins + 2;
                this.level3[5] = "B";
                this.level3COM[5] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.accuracy = this.accuracy + 1;
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
                this.theory = this.theory + 4;
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 4;
                this.rhythm = this.rhythm + 2;
                this.coins = this.coins + 4;
                this.level3[6] = "A+";
                this.level3COM[6] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.facility = this.facility + 6;
                this.theory = this.theory + 3;
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 3;
                this.rhythm = this.rhythm + 1;
                this.coins = this.coins + 3;
                this.level3[6] = "A-";
                this.level3COM[6] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.facility = this.facility + 4;
                this.theory = this.theory + 2;
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 2;
                this.coins = this.coins + 2;
                this.level3[6] = "B";
                this.level3COM[6] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.accuracy = this.accuracy + 1;
                this.theory = this.theory + 1;
                this.coordination = this.coordination + 1;
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
                this.theory = this.theory + 4;
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 0;
                this.musicality = this.musicality + 4;
                this.rhythm = this.rhythm + 4;
                this.coins = this.coins + 4;
                this.level3[7] = "A+";
                this.level3COM[7] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.theory = this.theory + 3;
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 0;
                this.rhythm = this.rhythm + 3;
                this.musicality = this.musicality + 3;

                this.coins = this.coins + 3;
                this.level3[7] = "A-";
                this.level3COM[7] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.theory = this.theory + 2;
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 0;
                this.musicality = this.musicality + 2;
                this.rhythm = this.rhythm + 2;

                this.coins = this.coins + 2;
                this.level3[7] = "B";
                this.level3COM[7] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.accuracy = this.accuracy + 1;
                this.theory = this.theory + 1;
                this.musicality = this.musicality + 1;
                this.rhythm = this.rhythm + 1;

                this.coordination = this.coordination + 0;
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
                this.theory = this.theory + 4;
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 0;
                this.musicality = this.musicality + 4;
                this.rhythm = this.rhythm + 4;
                this.coins = this.coins + 4;
                this.level3[8] = "A+";
                this.level3COM[8] = comments;
                this.evaluate();
                this.printStats();
                break;

            case 3:
                this.theory = this.theory + 3;
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 0;
                this.rhythm = this.rhythm + 3;
                this.musicality = this.musicality + 3;

                this.coins = this.coins + 3;
                this.level3[8] = "A-";
                this.level3COM[8] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 2:
                this.theory = this.theory + 2;
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 0;
                this.musicality = this.musicality + 2;
                this.rhythm = this.rhythm + 2;

                this.coins = this.coins + 2;
                this.level3[8] = "B";
                this.level3COM[8] = comments;
                this.evaluate();
                this.printStats();
                break;
            case 1:
                this.accuracy = this.accuracy + 1;
                this.theory = this.theory + 1;
                this.musicality = this.musicality + 1;
                this.rhythm = this.rhythm + 1;

                this.coordination = this.coordination + 0;
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
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 4;
                this.theory = this.theory + 2;
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
                this.accuracy = this.accuracy + 3;
                this.coordination = this.coordination + 3;
                this.theory = this.theory + 1;
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
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 2;
                this.theory = this.theory + 0;
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
                this.accuracy = this.accuracy + 1;
                this.coordination = this.coordination + 1;
                this.theory = this.theory + 0;
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
                this.accuracy = this.accuracy + 8;
                this.coordination = this.coordination + 4;
                this.theory = this.theory + 4;
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
                this.accuracy = this.accuracy + 6;
                this.coordination = this.coordination + 3;
                this.theory = this.theory + 3;
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
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 2;
                this.theory = this.theory + 2;
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
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 1;
                this.theory = this.theory + 1;
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
                this.accuracy = this.accuracy + 8;
                this.coordination = this.coordination + 4;
                this.theory = this.theory + 4;
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
                this.accuracy = this.accuracy + 6;
                this.coordination = this.coordination + 3;
                this.theory = this.theory + 3;
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
                this.accuracy = this.accuracy + 4;
                this.coordination = this.coordination + 2;
                this.theory = this.theory + 2;
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
                this.accuracy = this.accuracy + 2;
                this.coordination = this.coordination + 1;
                this.theory = this.theory + 1;
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
            assign5.innerHTML = "Current Grade: A+";
        } else if (this.grade >= 6.4) {
            assign5.innerHTML = "Current Grade: A";
        } else if (this.grade >= 5.6) {
            assign5.innerHTML = "Current Grade: A-";
        } else if (this.grade >= 4.8) {
            assign5.innerHTML = "Current Grade: B+";
        } else if (this.grade >= 4.0) {
            assign5.innerHTML = "Current Grade: B";
        } else if (this.grade >= 3.33) {
            assign5.innerHTML = "Current Grade: B-";
        } else if (this.grade >= 2.66) {
            assign5.innerHTML = "Current Grade: C+";
        } else if (this.grade >= 2.0) {
            assign5.innerHTML = "Current Grade: C";
        } else if (this.grade >= 1.66) {
            assign5.innerHTML = "Current Grade: C-";
        } else if (this.grade >= 1.33) {
            assign5.innerHTML = "Current Grade: D+";
        } else if (this.grade >= 1) {
            assign5.innerHTML = "Current Grade: D";
        } else if (this.grade >= 0.5) {
            assign5.innerHTML = "Current Grade: D-";
        } else {
            assign5.innerHTML = "Current Grade: F";
        }
    };
    Character.prototype.freshGrading = function () {
        this.grade = this.coins / days;
        // alert(this.grade);

        if (this.grade >= 3.66) {
            assign5.innerHTML = "Current Grade: A+";
        } else if (this.grade >= 3.33) {
            assign5.innerHTML = "Current Grade: A";
        } else if (this.grade >= 3) {
            assign5.innerHTML = "Current Grade: A-";
        } else if (this.grade >= 2.5) {
            assign5.innerHTML = "Current Grade: B+";
        } else if (this.grade >= 2.0) {
            assign5.innerHTML = "Current Grade: B";
        } else if (this.grade >= 1.66) {
            assign5.innerHTML = "Current Grade: B-";
        } else if (this.grade >= 1.33) {
            assign5.innerHTML = "Current Grade: C+";
        } else if (this.grade >= 1.0) {
            assign5.innerHTML = "Current Grade: C";
        } else if (this.grade >= 0.8) {
            assign5.innerHTML = "Current Grade: C-";
        } else if (this.grade >= 0.6) {
            assign5.innerHTML = "Current Grade: D+";
        } else if (this.grade >= 0.4) {
            assign5.innerHTML = "Current Grade: D";
        } else if (this.grade >= 0.2) {
            assign5.innerHTML = "Current Grade: D-";
        } else {
            assign5.innerHTML = "Current Grade: F";
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

    var signout = document.getElementById("signout");
    signout.addEventListener("click", function () {
        localStorage.removeItem("person");

        initialPrompt();
    });

    // Level click functions
    function leval1() {
        clearAll();
        currentLevel.innerHTML = `Level 1`;
        assign1.innerHTML = `Merrily We Roll Along(a1) ${personage.level1[0]}`;
        assign2.innerHTML = `Two Warm-ups(a2): ${personage.level1[1]}`;
        assign3.innerHTML = `Ode to Joy(a3): ${personage.level1[2]}`;
        assign4.innerHTML = `Yankee Doodle(a4): ${personage.level1[3]}`;
        assign5.innerHTML = `Russian Folk Song(a5): ${personage.level1[4]}`;
        assign6.innerHTML = `Midnight Ride(a6): ${personage.level1[5]}`;
        assign7.innerHTML = `Chant for Monks(a7): ${personage.level1[6]}`;
        assign8.innerHTML = `Shining Stars(a8): ${personage.level1[7]}`;
        assign9.innerHTML = `Roman Trumpets(a9): ${personage.level1[8]}`;
        assign10.innerHTML = `Scales C-G-D(a10): ${personage.level1[9]}`;

        upload.innerHTML = "Upload a Recording";
        upload.href = "https://driveuploader.com/upload/1vrEwwyXER/";
        upload.style.cursor = "pointer";
        upload.addEventListener("click", function () {
            alert("Please include your 1. Real Name and 2. Assignment Number(s) in the Name Section");
        });
        // A1
        assign1.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/1yvby4SfNGf8-vM01hq3woVVR3gNeHoG1?usp=sharing'><p>Quest:Merrily We Roll Along<br>(DM,120)</p></a>";
            reward.innerHTML = "Reward: Accuracy(2) + Theory(2) + Rhythm(4) + Coins(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level1COM[0]}`;
        });
        // A2
        assign2.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/1yvby4SfNGf8-vM01hq3woVVR3gNeHoG1?usp=sharing'>Quest: Complete Numbers 15+16+17</a>";
            reward.innerHTML = "Reward: accuracy(4) + coordination(2) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level1COM[1]}`;
        });
        // A3
        assign3.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/1yvby4SfNGf8-vM01hq3woVVR3gNeHoG1?usp=sharing'>Quest: Complete Number18</a>";
            reward.innerHTML =
                "Reward: accuracy(4) + coordination(2) + Theory(2) + Rhythm(2) + XP(4) ";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level1COM[2]}`;
        });
        // A4
        assign4.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href=https://drive.google.com/drive/folders/1yvby4SfNGf8-vM01hq3woVVR3gNeHoG1?usp=sharing'>Quest: Complete Numbers 101+102</a>";
            reward.innerHTML =
                "Reward: accuracy(4) + coordination(2) + Facility(2) + Rhythm(2) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level1COM[3]}`;
        });
        // A5
        assign5.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/1yvby4SfNGf8-vM01hq3woVVR3gNeHoG1?usp=sharing'>Quest: Complete Number 103 at 120BPM</a>";
            reward.innerHTML =
                "Reward: accuracy(4) + coordination(4) + Facility(8) + Theory(4) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level1COM[4]}`;
        });
        6;
        // A6
        assign6.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href=https://drive.google.com/drive/folders/1yvby4SfNGf8-vM01hq3woVVR3gNeHoG1?usp=sharing'>Quest: Complete Numbers 107 and 108</a>";
            reward.innerHTML =
                "Reward: accuracy(4) + coordination(2) + Facility(2) + Rhythm(2) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level1COM[5]}`;
        });
        // A7
        assign7.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/1yvby4SfNGf8-vM01hq3woVVR3gNeHoG1?usp=sharing'>Quest: Complete Numbers 110 at 120BPM</a>";
            reward.innerHTML =
                "Reward: accuracy(4) + coordination(4) + Facility(8) + Theory(4) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level1COM[6]}`;
        });
        // A8
        assign8.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/1yvby4SfNGf8-vM01hq3woVVR3gNeHoG1?usp=sharing'>Quest: Complete Number 109 at 60BPM</a>";
            reward.innerHTML =
                "Reward: accuracy(4) + coordination(2) + Theory(4) + Rhythm(2) + Musicality(4) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level1COM[7]}`;
        });
        // A9
        assign9.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/1yvby4SfNGf8-vM01hq3woVVR3gNeHoG1?usp=sharing'>Quest: Complete Number 104 at 120BPM</a>";
            reward.innerHTML =
                "Reward: accuracy(4) + Theory(4) + Rhythm(4) + Musicality(4 ) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level1COM[8]}`;
        });
        // A10
        assign10.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/1yvby4SfNGf8-vM01hq3woVVR3gNeHoG1?usp=sharing'>Quest: Apply the 6 rhythms to the assigned two octave scale</a>";
            reward.innerHTML =
                "Reward: Rhythm(12) + coordination(4) + accuracy(4) + Theory(2) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level1COM[9]}`;
        });
    }
    function leval2() {
        clearAll();
        currentLevel.innerHTML = `Level 2`;
        assign1.innerHTML = `Harmonics(b1): ${personage.level2[0]}`;
        assign2.innerHTML = `coordination(b2): ${personage.level2[1]}`;
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
            reward.innerHTML = "Reward: accuracy(4) + coordination(4) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level2COM[0]}`;
        });
        // A2
        assign2.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/file/d/145AaTXjEXIanK8zKwSqJl6kIh2Ts2imS/view?usp=sharing'>Quest: Complete Numbers 26,28 and 32</a>";
            reward.innerHTML = "Reward: accuracy(4) + coordination(4) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level2COM[1]}`;
        });
        // A3
        assign3.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/file/d/145G5iTT75NCMX5sfg1JDpzdMGf99EUOd/view?usp=sharing'>Quest: Complete Numbers 38,39 and 40</a>";
            reward.innerHTML = "Reward: accuracy(4) + coordination(2) + XP(4) ";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level2COM[2]}`;
        });
        // A4
        assign4.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/file/d/14746t6pnImLyp3vsMtCi0B9cDbJLDjaR/view?usp=sharing'>Quest: Complete Numbers 113 and 114</a>";
            reward.innerHTML =
                "Reward: accuracy(4) + coordination(2) + Facility(2) + Rhythm(2) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level2COM[3]}`;
        });
        // A5
        assign5.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/file/d/148xNYk0avm6hypM3Wt3E6LHe8IqMW3Sp/view?usp=sharing'>Quest: Complete Number 115 at 120BPM</a>";
            reward.innerHTML =
                "Reward: accuracy(4) + coordination(4) + Facility(8) + Theory(4) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level2COM[4]}`;
        });
        6;
        // A6
        assign6.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/file/d/14A0mfXa3s_nyCX6fzTHFEEsoI7_EQ3im/view?usp=sharing'>Quest: Complete Numbers 119 and 120</a>";
            reward.innerHTML =
                "Reward: accuracy(4) + coordination(2) + Facility(2) + Rhythm(2) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level2COM[5]}`;
        });
        // A7
        assign7.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/file/d/14Nu17knHHcY28MAP71vll0tOUKL0avy2/view?usp=sharing'>Quest: Complete Numbers 121 at 120BPM</a>";
            reward.innerHTML =
                "Reward: accuracy(4) + coordination(4) + Facility(8) + Theory(4) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level2COM[6]}`;
        });
        // A8
        assign8.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/file/d/14RDUCip12CTEPZpOv6xYN5JUVuoXTZA6/view?usp=sharing'>Quest: Complete Number 116 at 70BPM</a>";
            reward.innerHTML =
                "Reward: accuracy(4) + Theory(4) + Rhythm(4) + Musicality(4) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level2COM[7]}`;
        });
        // A9
        assign9.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/file/d/14W6pMeZBvavBFEcUQi4FoWuqpEwjOpcO/view?usp=sharing'>Quest: Complete Number 122 at 120BPM</a>";
            reward.innerHTML =
                "Reward: accuracy(4) + Theory(4) + Rhythm(4) + Musicality(4) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level2COM[8]}`;
        });
        // A10
        assign10.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/file/d/16hYXmV00RlTojF55RbwXdnmkf3ZThngU/view?usp=sharing'>Quest: Apply the 6 rhythms to the assigned two octave scale</a>";
            reward.innerHTML =
                "Reward: Rhythm(12) + coordination(4) + accuracy(4) + Theory(2) + XP(4)";
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
                "<a target='_blank' href='https://drive.google.com/drive/folders/16C2EiRZnbAqLih0DMWXg6I7jDuuRqpA_?usp=sharing'>Quest:Merrily We Roll Along(DM,120)</a>";
            reward.innerHTML = "Reward: Accuracy(2) + Theory(2) + Rhythm(4) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level3COM[0]}`;
        });
        // A2
        assign2.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/16C2EiRZnbAqLih0DMWXg6I7jDuuRqpA_?usp=sharing'>Quest: Complete Number 41</a>";
            reward.innerHTML =
                "Reward: accuracy(4) + coordination(2) + Theory(4) + Rhythm(2) + Musicality(2) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level3COM[1]}`;
        });
        // A3
        assign3.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/16C2EiRZnbAqLih0DMWXg6I7jDuuRqpA_?usp=sharing'>Quest: Complete Number 42 at BPM 160</a>";
            reward.innerHTML =
                "Reward: accuracy(2) + coordination(2) +  Facility(4) + Theory(4) + Musicality(2) + XP(4) ";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level3COM[2]}`;
        });
        // A4
        assign4.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/16C2EiRZnbAqLih0DMWXg6I7jDuuRqpA_?usp=sharing'>Quest: Complete Numbers 125 and 126</a>";
            reward.innerHTML =
                "Reward: accuracy(4) + coordination(2) + Facility(2) + Rhythm(2) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level3COM[3]}`;
        });
        // A5
        assign5.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/16C2EiRZnbAqLih0DMWXg6I7jDuuRqpA_?usp=sharing'>Quest: Complete Number 127 at 120BPM</a>";
            reward.innerHTML =
                "Reward: accuracy(4) + coordination(4) + Facility(8) + Theory(4) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level3COM[4]}`;
        });
        6;
        // A6
        assign6.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/16C2EiRZnbAqLih0DMWXg6I7jDuuRqpA_?usp=sharing'>Quest: Complete Numbers 131 and 132</a>";
            reward.innerHTML =
                "Reward: accuracy(4) + coordination(2) + Facility(2) + Rhythm(2) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level3COM[5]}`;
        });
        // A7
        assign7.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/16C2EiRZnbAqLih0DMWXg6I7jDuuRqpA_?usp=sharing'>Quest: Complete Number 133 at 120BPM</a>";
            reward.innerHTML =
                "Reward: accuracy(4) + coordination(4) + Facility(8) + Theory(4) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level3COM[6]}`;
        });
        // A8
        assign8.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/16C2EiRZnbAqLih0DMWXg6I7jDuuRqpA_?usp=sharing'>Quest: Complete Number 128 at 100BPM</a>";
            reward.innerHTML =
                "Reward: accuracy(4) + Theory(4) + Rhythm(4) + Musicality(4) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level3COM[7]}`;
        });
        // A9
        assign9.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/16C2EiRZnbAqLih0DMWXg6I7jDuuRqpA_?usp=sharing'>Quest: Complete Number 134 at 90BPM</a>";
            reward.innerHTML =
                "Reward: accuracy(4) + Theory(4) + Rhythm(4) + Musicality(4) + XP(4)";
            recording.innerHTML = " Recording: Coming Soon";
            comment.innerHTML = `Teacher Comments: ${personage.level3COM[8]}`;
        });
        // A10
        assign10.addEventListener("click", function () {
            instruct.innerHTML =
                "<a target='_blank' href='https://drive.google.com/drive/folders/16C2EiRZnbAqLih0DMWXg6I7jDuuRqpA_?usp=sharing'>Quest: Apply the 6 rhythms to the assigned two octave scale</a>";
            reward.innerHTML =
                "Reward: Rhythm(12) + coordination(4) + accuracy(4) + Theory(2) + XP(4)";
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
                "Reward: accuracy(8) + Facility(4) + Theory(4) + Rhythm(8) + Musicality(4) + XP(8)";
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
    }

    function completeStatsFunc() {
        clearAll();
        currentLevel.innerHTML = `Complete Stats`;
        assign1.innerHTML = `Total Score: ${personage.totalScore}`;
        assign2.innerHTML = `Current Rank: Coming Soon`;
        personage.grading();


        assign3.innerHTML = `Rank on Team: Coming Soon`;

    }

    function clearInstructions() {
        instruct.innerHTML = "";
        reward.innerHTML = "";
        recording.innerHTML = "";
        comment.innerHTML = "";
    }
    function clearQuests() {
        currentLevel.innerHTML = "CHHS Piano RPG<br>BETA VERSION 1.40";
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
            "Reward: accuracy(8) + Facility(4) + Theory(4) + Rhythm(8) + Musicality(4) + XP(8)";
        recording.innerHTML = " Recording: Coming Soon";
        comment.innerHTML = `Teacher Comments: ${personage.raidsCOM[1]}`;
    }
    function raid3() {
        instruct.innerHTML = "<p>Quest: Record Numbers 129 and 135 with a partner</p>";
        reward.innerHTML =
            "Reward: accuracy(8) + Facility(4) + Theory(4) + Rhythm(8) + Musicality(4) + XP(8)";
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
        // console.log(jaden.XP);
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
