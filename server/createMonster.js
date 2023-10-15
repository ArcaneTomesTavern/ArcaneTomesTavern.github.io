//*** CARICAMENTO DELLA PAGINA ***//
document.addEventListener("DOMContentLoaded", () => {
    //?prendo gli id
    var monster_type = document.getElementById("monster-type");
    var monster_subtype = document.getElementById("monster-subtype");
    var monster_swarn_type = document.getElementById("swarn_type");
    var monster_size = document.getElementById("monster-size");
    var monster_alignment = document.getElementById("alignment");
    var monster_challenge = document.getElementById("challenge");

    //?oggetti file json
    const jsonMonsterReader = new ReadJson(
        "/server/resources/json/monster.json"
    ); //? bisogna mettere il percorso assoluto non in base a dove si trova il file
    const jsonConstReader = new ReadJson(
        "/server/resources/json/constants.json"
    ); //? bisogna mettere il percorso assoluto non in base a dove si trova il file

    //?lettura dal file json
    jsonMonsterReader.readData().then(() => {
        //* lettura tipi mostri
        const monsterTypes = jsonMonsterReader.getMonsterTypes();
        //console.log("Monster Types:", monsterTypes);
        for (let i = 0; i < monsterTypes.length; i++) {
            const opt = document.createElement("option");
            opt.text = monsterTypes[i];
            opt.id = monsterTypes[i].replace(/ /g, "_");
            opt.tagName = monsterTypes[i].replace(/ /g, "_");
            monster_type.appendChild(opt);
        }

        //*lettura sotto tipi mostri
        const monsteSubType = jsonMonsterReader.getMonsterSubType();
        for (let i = 0; i < monsteSubType.length; i++) {
            const opt = document.createElement("option");
            opt.text = monsteSubType[i];
            opt.id = monsteSubType[i].replace(/ /g, "_");
            opt.tagName = monsteSubType[i].replace(/ /g, "_");
            monster_subtype.appendChild(opt);
        }
        
        //*lettura sotto tipi mostri
        const monsteSwarnType = jsonMonsterReader.getSwarnType();
        for (let i = 0; i < monsteSwarnType.length; i++) {
            const opt = document.createElement("option");
            opt.text = monsteSwarnType[i];
            opt.id = monsteSwarnType[i].replace(/ /g, "_");
            opt.tagName = monsteSwarnType[i].replace(/ /g, "_");
            monster_swarn_type.appendChild(opt);
        }
    });

    jsonConstReader.readData().then(() => {
        //* lettura grandezza mostri
        const monsterSize = jsonConstReader.getSize();
        for (let i = 0; i < monsterSize.length; i++) {
            const opt = document.createElement("option");
            opt.text = monsterSize[i];
            opt.id = monsterSize[i].replace(/ /g, "_");
            opt.tagName = monsterSize[i].replace(/ /g, "_");
            monster_size.appendChild(opt);
        }

        //* lettura allineamento mostri
        const monsterAlignment = jsonConstReader.getSize();
        for (let i = 0; i < monsterAlignment.length; i++) {
            const opt = document.createElement("option");
            opt.text = monsterAlignment[i];
            opt.id = monsterAlignment[i].replace(/ /g, "_");
            opt.tagName = monsterAlignment[i].replace(/ /g, "_");
            monster_alignment.appendChild(opt);
        }
    });
    
    //*challenge rating del mostro
    const challengeRate = ["0", "1/8", "1/4", "1/2"];
    const TOT_CH = 30;
    for (let i = 0; i < challengeRate.length; i++) {
        const opt = document.createElement("option");
        opt.text = challengeRate[i];
        opt.id = "ch_" + challengeRate[i];
        opt.tagName = "ch_" + challengeRate[i];
        monster_challenge.appendChild(opt);
    }
    for(let i = 1; i <= TOT_CH; i++){
        const opt = document.createElement("option");
        opt.text = i;
        opt.id = "ch_" + i;
        opt.tagName = "ch_" + i;
        monster_challenge.appendChild(opt);
    }
    
});
