//*** CARICAMENTO DELLA PAGINA ***//
document.addEventListener("DOMContentLoaded", () => {
    //?prendo gli id
    var monster_type = document.getElementById("monster-type");
    var monster_subtype = document.getElementById("monster-subtype");
    var monster_size = document.getElementById("monster-size");

    //?oggetti file json
    const jsonReader = new ReadJson("/server/resources/json/constants.json");       //? bisogna mettere il percorso assoluto non in base a dove si trova il file

    //?lettura dal file json
    jsonReader.readData().then(() => {
        //* lettura tipi mostri
        const monsterTypes = jsonReader.getMonsterTypes();
        //console.log("Monster Types:", monsterTypes);
        for(let i=0; i < monsterTypes.length; i++){
            const opt = document.createElement("option");
            opt.text = monsterTypes[i];
            opt.id = monsterTypes[i].replace(/ /g, "_");
            opt.tagName = monsterTypes[i].replace(/ /g, "_");
            //opt.innerHTML = i;
            monster_type.appendChild(opt);
        }

        //*lettura sotto tipi mostri
        const monsteSubType = jsonReader.getMonsterSubType();
        for(let i=0; i < monsteSubType.length; i++){
            const opt = document.createElement("option");
            opt.text = monsteSubType[i];
            opt.id = monsteSubType[i].replace(/ /g, "_");
            opt.tagName = monsteSubType[i].replace(/ /g, "_");
            //opt.innerHTML = i;
            monster_subtype.appendChild(opt);
        }
        
        //* lettura grandezza mostri
        const monsterSize = jsonReader.getSize();
        for(let i=0; i < monsterSize.length; i++){
            const opt = document.createElement("option");
            opt.text = monsterSize[i];
            opt.id = monsterSize[i].replace(/ /g, "_");
            opt.tagName = monsterSize[i].replace(/ /g, "_");
            //opt.innerHTML = i;
            monster_size.appendChild(opt);
        }
    });
});




































































































