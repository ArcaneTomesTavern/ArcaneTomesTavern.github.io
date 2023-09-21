
// Inizializza Firebase con la tua configurazione
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

// Ottieni un riferimento al database Firestore
const db = firebase.firestore();

//inizializza firebase e database
//const db = getDatabaseReference();

// Riferimento alla collezione "ArcaneTomesTavern/campagne"
const campagneRef = db.collection("ArcaneTomesTavernDB").doc("campagne");

// Riferimenti agli input del form
const form = document.getElementById("form");
const idCampagnaInput = document.getElementById("id_campagna");
const nomeCampagnaInput = document.getElementById("nome_campagna");
const giocatoriInput = document.getElementById("giocatori");

// Gestisci l'invio del form
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const idCampagna = parseInt(idCampagnaInput.value);
    const nomeCampagna = nomeCampagnaInput.value;
    const giocatori = giocatoriInput.value.split(",").map((giocatore) => giocatore.trim());

    // Inserisci il nuovo record nel database Firestore
    campagneRef.update({
        [idCampagna]: {
            id_campagna: idCampagna,
            nome_campagna: nomeCampagna,
            giocatori: giocatori
        }
    })
    .then(() => {
        console.log("Record inserito con successo!");
        // Puoi effettuare azioni aggiuntive qui, se necessario
    })
    .catch((error) => {
        console.error("Errore nell'inserimento del record:", error);
    });
});