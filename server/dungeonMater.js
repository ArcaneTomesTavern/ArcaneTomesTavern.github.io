let documentId; //! id della campagna
let db;
let _playerList = [];

//let count = 0;

// Inizializza Firebase con la tua configurazione
const firebaseConfig = {
    apiKey: "AIzaSyCEc_jt85Nr4KS-4wXSPfAscmc0Vt0o4BM",
    authDomain: "arcanetomestavern.firebaseapp.com",
    projectId: "arcanetomestavern",
    storageBucket: "arcanetomestavern.appspot.com",
    messagingSenderId: "1035963633765",
    appId: "1:1035963633765:web:7c1524769bc1e387ba768c",
    measurementId: "G-Q2BES5BYC2",
};

firebase.initializeApp(firebaseConfig);

//*** CARICAMENTO DELLA PAGINA ***//
document.addEventListener("DOMContentLoaded", () => {
    // Recupera il valore di 'id' dalla query URL
    const urlParams = new URLSearchParams(window.location.search);
    documentId = urlParams.get("id");

    //loading
    document.getElementById("loading-img").style.display = "block";
    document.getElementById("body-container").style.display = "none";

    // Riferimento al tuo database Firestore
    db = firebase.firestore();

    db.collection("campaigns")
        .doc(documentId)
        .get()
        .then((querySnapshot) => {

            for (let i = 0; i < querySnapshot.size; i++) {
                const doc = querySnapshot.docs[i];
            }
            //loading
            document.getElementById("loading-img").style.display = "none";
            document.getElementById("body-container").style.display = "block";
        })
        .catch((error) => {
            console.error("Errore nella query Firestore:", error);
            document.getElementById("loading-img").style.display = "none";
            document.getElementById("body-container").style.display = "block";
        });
});

/*setInterval(updateCounter, 3000);

function updateCounter() {
    count++;
    console.log(count);
    document.getElementById('counter').textContent = count;
}

let intervalId; // Variabile per memorizzare l'ID dell'intervallo

// Funzione per incrementare il contatore
function incrementCounter() {
    console.log("Contatore incrementato!");
}

// Funzione per avviare l'intervallo
function startInterval() {
    intervalId = setInterval(incrementCounter, 3000); // Esegui ogni 3 secondi
}

// Funzione per sospendere l'intervallo
function stopInterval() {
    clearInterval(intervalId);
}

// Aggiungi un ascoltatore per l'evento visibilitychange
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
        // Riprendi l'intervallo quando la pagina diventa visibile
        startInterval();
    } else {
        // Sospendi l'intervallo quando la pagina diventa invisibile
        stopInterval();
    }
});

// Avvia l'intervallo quando la pagina viene caricata
window.addEventListener("load", startInterval);


*/
