const firebaseConfig = {
    apiKey: "AIzaSyCEc_jt85Nr4KS-4wXSPfAscmc0Vt0o4BM",
    authDomain: "arcanetomestavern.firebaseapp.com",
    projectId: "arcanetomestavern",
    storageBucket: "arcanetomestavern.appspot.com",
    messagingSenderId: "1035963633765",
    appId: "1:1035963633765:web:7c1524769bc1e387ba768c",
    measurementId: "G-Q2BES5BYC2"
};

// Inizializza l'app Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const idPlayerInput = document.getElementById("id");
const form = document.getElementById("giocatore-form");

// Riferimento alla collezione "ArcaneTomesTavern/campagne"
//const giocatoriRef = db.collection("ArcaneTomesTavernDB").doc("giocatori");
const giocatoriRef = db.collection("players");


form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const idPlayer = parseInt(idPlayerInput.value);
    const nome_personaggio = document.getElementById("nome_personaggio").value;
    const background = document.getElementById("background").value;
    const nome_giocatore = document.getElementById("nome_giocatore").value;
    const classe = document.getElementById("classe").value;
    const livello = parseFloat(document.getElementById("livello").value);
    const razza = document.getElementById("razza").value;
    const allineamento = document.getElementById("allineamento").value;
    const esperienza = document.getElementById("esperienza").value;
    const tratti_caratteriali = document.getElementById("tratti_caratteriali").value;
    const percezione_passiva = parseInt(document.getElementById("percezione_passiva").value);
    const ideali = document.getElementById("ideali").value;
    const legami = document.getElementById("legami").value;
    const difetti = document.getElementById("difetti").value;
    const ispirazione = document.getElementById("ispirazione").value;
    const bonus_competenza = parseInt(document.getElementById("bonus_competenza").value);
    const iniziativa = parseInt(document.getElementById("iniziativa").value);
    const classe_armatura = parseInt(document.getElementById("classe_armatura").value);
    const max_punti_ferita = parseInt(document.getElementById("max_punti_ferita").value);
    const curr_punti_ferita = parseInt(document.getElementById("curr_punti_ferita").value);
    const temp_punti_ferita = parseInt(document.getElementById("temp_punti_ferita").value);
    const dadi_vita = parseInt(document.getElementById("dadi_vita").value);

    const equipaggiamento = [];
        const equipaggiamentoInputs = document.querySelectorAll(".equipaggiamento");
        equipaggiamentoInputs.forEach(input => {
            const nomeEquipaggiamento = input.querySelector("[name='equipaggiamento-nome[]']").value;
            const tipoEquipaggiamento = input.querySelector("[name='equipaggiamento-tipo[]']").value;
            equipaggiamento.push({ nome: nomeEquipaggiamento, tipo: tipoEquipaggiamento });
        });

        // Raccolta dei dati delle magie dinamiche
        const magie = [];
        const magieInputs = document.querySelectorAll(".magia");
        magieInputs.forEach(input => {
            const nomeMagia = input.querySelector("[name='magia-nome[]']").value;
            const livelloMagia = input.querySelector("[name='magia-livello[]']").value;
            magie.push({ nome: nomeMagia, livello: livelloMagia });
        });
    //const database = firebase.database();
    //const giocatoriRef = database.ref("giocatori");

    // Inserisci i dati nel database
    /*giocatoriRef.update({
        [idPlayer] : {
            id_player : idPlayer,
            nome_personaggio: nome_personaggio,
            background:background,
            classe: classe,
            livello: livello,
            nome_giocatore: nome_giocatore,
            razza: razza,
            allineamento: allineamento,
            esperienza: esperienza,
            tratti_caratteriali: tratti_caratteriali,
            percezione_passiva: percezione_passiva,
            ideali: ideali,
            legami: legami,
            difetti: difetti,
            ispirazione: ispirazione,
            bonus_competenza: bonus_competenza,
            iniziativa: iniziativa,
            classe_armatura: classe_armatura,
            max_punti_ferita: max_punti_ferita,
            curr_punti_ferita: curr_punti_ferita,
            temp_punti_ferita: temp_punti_ferita,
            dadi_vita: dadi_vita,
            equipaggiamento: equipaggiamento,
            magie: magie   
        }*/
    giocatoriRef.add({
            nome_personaggio: nome_personaggio,
            background:background,
            classe: classe,
            livello: livello,
            nome_giocatore: nome_giocatore,
            razza: razza,
            allineamento: allineamento,
            esperienza: esperienza,
            tratti_caratteriali: tratti_caratteriali,
            percezione_passiva: percezione_passiva,
            ideali: ideali,
            legami: legami,
            difetti: difetti,
            ispirazione: ispirazione,
            bonus_competenza: bonus_competenza,
            iniziativa: iniziativa,
            classe_armatura: classe_armatura,
            max_punti_ferita: max_punti_ferita,
            curr_punti_ferita: curr_punti_ferita,
            temp_punti_ferita: temp_punti_ferita,
            dadi_vita: dadi_vita,
            equipaggiamento: equipaggiamento,
            magie: magie
    }).then(() => {
        alert("Giocatore inserito con successo!");
        form.reset();
    }).catch(error => {
        alert("Si è verificato un errore durante l'inserimento del giocatore: " + error.message);
    });
});
