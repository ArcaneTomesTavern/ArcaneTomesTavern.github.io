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

    const classe = document.getElementById("classe").value;
    const livello = parseFloat(document.getElementById("livello").value);
    const background = document.getElementById("background").value;
    const nome_giocatore = document.getElementById("nome_giocatore").value;
    const razza = document.getElementById("razza").value;
    const allineamento = document.getElementById("allineamento").value;
    const esperienza = document.getElementById("esperienza").value;

    const forza = parseInt(document.getElementById("forza").value);
    const destrezza = parseInt(document.getElementById("destrezza").value);
    const costituzione = parseInt(document.getElementById("costituzione").value);
    const intelligenza = parseInt(document.getElementById("intelligenza").value);
    const saggezza = parseInt(document.getElementById("saggezza").value);
    const carisma = parseInt(document.getElementById("carisma").value);

    const acrobazia = parseInt(document.getElementById("acrobazia").value);
    const addestrare_animali = parseInt(document.getElementById("acrobazia").value);
    const arcano = parseInt(document.getElementById("acrobazia").value);
    const atletica = parseInt(document.getElementById("acrobazia").value);
    const furtivita = parseInt(document.getElementById("acrobazia").value);
    const indagare = parseInt(document.getElementById("acrobazia").value);
    const inganno = parseInt(document.getElementById("acrobazia").value);
    const intimidire = parseInt(document.getElementById("acrobazia").value);
    const intrattenere = parseInt(document.getElementById("acrobazia").value);
    const intuizione = parseInt(document.getElementById("acrobazia").value);
    const medicina = parseInt(document.getElementById("acrobazia").value);
    const natura = parseInt(document.getElementById("acrobazia").value);
    const percezione = parseInt(document.getElementById("acrobazia").value);
    const persuasione = parseInt(document.getElementById("acrobazia").value);
    const rapidita_mano = parseInt(document.getElementById("acrobazia").value);
    const religione = parseInt(document.getElementById("acrobazia").value);
    const sopravvivenza = parseInt(document.getElementById("acrobazia").value);
    const storia = parseInt(document.getElementById("acrobazia").value);


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

    //Inserisci dati nel DB
    giocatoriRef.add({
            nome_personaggio: nome_personaggio,
            classe: classe,
            livello: livello,
            background:background,
            nome_giocatore: nome_giocatore,
            razza: razza,
            allineamento: allineamento,
            esperienza: esperienza,

            forza: forza,
            destrezza: destrezza,
            costituzione: costituzione,
            intelligenza: intelligenza,
            saggezza: saggezza,
            carisma: carisma,

            ispirazione: ispirazione,
            bonus_competenza: bonus_competenza,

            acrobazia: acrobazia,
            addestrare_animali: addestrare_animali,
            arcano: arcano,
            atletica: atletica,
            furtivita: furtivita,
            indagare: indagare,
            inganno: inganno,
            intimidire: intimidire,
            intrattenere: intrattenere,
            intuizione: intuizione,
            medicina: medicina,
            natura: natura,
            percezione: percezione,
            persuasione: persuasione,
            rapidita_mano: rapidita_mano,
            religione: religione,
            sopravvivenza: sopravvivenza,
            storia: storia, 

            tratti_caratteriali: tratti_caratteriali,
            percezione_passiva: percezione_passiva,
            ideali: ideali,
            legami: legami,
            difetti: difetti,
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
