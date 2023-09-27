const firebaseConfig = {
    apiKey: "AIzaSyCEc_jt85Nr4KS-4wXSPfAscmc0Vt0o4BM",
    authDomain: "arcanetomestavern.firebaseapp.com",
    projectId: "arcanetomestavern",
    storageBucket: "arcanetomestavern.appspot.com",
    messagingSenderId: "1035963633765",
    appId: "1:1035963633765:web:7c1524769bc1e387ba768c",
    measurementId: "G-Q2BES5BYC2"
};

firebase.initializeApp(firebaseConfig);

// Ottieni un riferimento a Firestore
const db = firebase.firestore();
const playersRef = db.collection("players"); // Sostituisci "players" con il nome effettivo della tua raccolta
const playerId = "U50R9nXSG7JV95b2xyMN"; // Sostituisci con l'ID del documento che desideri recuperare

// DIV VARI DEI DATI
const nome_pgDIV = document.getElementById("nome_pg");
const datiDiv = document.getElementById("dati_class_rank"); // Assicurati di avere un elemento HTML con questo ID
const experience = document.getElementById("exp");
const forzaDIV = document.getElementById("forza");
const destrezzaDIV = document.getElementById("destrezza");
const costituzioneDIV = document.getElementById("costituzione");
const intelligenzaDIV = document.getElementById("intelligenza");
const saggezzaDIV = document.getElementById("saggezza");
const carismaDIV = document.getElementById("carisma");
const bonus_compDIV = document.getElementById("bonus_competenza");
const velocitaDIV = document.getElementById("velocita");
const ispirazioneDIV = document.getElementById("ispirazione");
const ispirazioneCheckbox = document.getElementById("ispirazioneCheckbox"); // solo per checkbox di ispirazione
const saluteDIV = document.getElementById("salute");
const tsDIV = document.getElementById("caratteristica_ts");
const sensiDIV = document.getElementById("sensi");

function ottieniEVisualizzaDati() {
    playersRef.doc(playerId).get().then((doc) => {
        if (doc.exists) {
            const data = doc.data();

            // Ottieni i campi dai dati del documento
            const nome_personaggio = data.nome_personaggio;
            const classe = data.classe;
            const razza = data.razza;
            const livello = data.livello;
            const esperienza = data.esperienza;
            const imageUrl = data.image_url;
            const forza = data.forza;
            const destrezza = data.destrezza;
            const costituzione = data.costituzione;
            const intelligenza = data.intelligenza;
            const saggezza = data.saggezza;
            const carisma = data.carisma;
            const bonus_competenza = data.bonus_competenza;
            const velocita = data.velocita;
            const ispirazione = data.ispirazione;
            const max_punti_ferita = data.max_punti_ferita;
            const curr_punti_ferita = data.curr_punti_ferita;
            const temp_punti_ferita = data.temp_punti_ferita;
            const forza_ts = data.forza_ts;
            const destrezza_ts = data.destrezza_ts;
            const costituzione_ts = data.costituzione_ts;
            const intelligenza_ts = data.intelligenza_ts;
            const saggezza_ts = data.saggezza_ts;
            const carisma_ts = data.carisma_ts;

            // Aggiungi i dati all'elemento HTML
            datiDiv.innerHTML = `<p>${razza} &nbsp ${classe} <br><br> <p>Livello ${livello}<\p>`;

            nome_pgDIV.innerHTML = `<p> ${nome_personaggio}</p>`;

            experience.innerHTML = ` <br><p>${esperienza}/${level_exp[livello]}</p>`;
            experience.style.width = `${(esperienza/level_exp[livello])*100}%`; 

            const immagineElement = document.getElementById('immagineFirebase');
            immagineElement.src = imageUrl;  

            ottieniSegno(forzaDIV, forza, "Forza");
            ottieniSegno(destrezzaDIV, destrezza, "Destrezza");       
            ottieniSegno(costituzioneDIV, costituzione, "Costituzione");
            ottieniSegno(intelligenzaDIV, intelligenza, "Intelligenza");
            ottieniSegno(saggezzaDIV, saggezza, "Saggezza");     
            ottieniSegno(carismaDIV, carisma, "Carisma");

            bonus_compDIV.innerHTML = `<p>Bonus Competenza</p><br><p>+${bonus_competenza}</p>`;

            velocitaDIV.innerHTML = `<p>Velocità</p><br><p>${velocita}ft</p>`;

            ispirazioneCheckbox.checked = ispirazione;

            if(temp_punti_ferita != 0) {
                saluteDIV.innerHTML = `<p>Salute</p><br><p>Attuale:&nbsp &nbsp${curr_punti_ferita}/${max_punti_ferita}</p>
                <br<p>Temporanei:&nbsp &nbsp ${temp_punti_ferita}</p>`;
            }
            else {
                saluteDIV.innerHTML = `<p>Salute</p><br><p>Attuale:&nbsp &nbsp${curr_punti_ferita}/${max_punti_ferita}</p>
                <br<p>Temporanei:&nbsp &nbsp ---</p>`;
            }
            
            tsDIV.innerHTML = `<p>Tiri Salvezza Abilità</p><br><br><br>
            <p>Forza: ${segno(forza_ts)} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  Intelligenza: ${segno(intelligenza_ts)} </p><br>
            <p>Destrezza: ${segno(destrezza_ts)} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  Saggezza: ${segno(saggezza_ts)} </p><br>
            <p>Costituzione: ${segno(costituzione_ts)} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  Carisma: ${segno(carisma_ts)} </p>
            `;

        } else {
            datiDiv.innerHTML = "<p>Il documento non esiste.</p>";
        }
    }).catch((error) => {
        console.error("Errore nel recupero dei dati:", error);
        datiDiv.innerHTML = "<p>Si è verificato un errore nel recupero dei dati.</p>";
    });
}

// Chiama la funzione per ottenere e visualizzare i dati
ottieniEVisualizzaDati();

const level_exp = [1, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
     120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000];

function ottieniSegno(elementoDiv, elementoData, nome_caratteristica) {
    if(elementoData > 0)
        elementoDiv.innerHTML = `<p>${nome_caratteristica}<br><br>+${elementoData}</p>`
    else 
        elementoDiv.innerHTML = `<p>${nome_caratteristica}<br><br>${elementoData}</p>`
}

function segno(elementoData) {
    if(elementoData > 0)
        return `+${elementoData}`
    else
    return `${elementoData}`
}