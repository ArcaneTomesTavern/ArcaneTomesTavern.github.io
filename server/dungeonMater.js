let documentId; //! id della campagna
let db;
let _playerList = [];

//let count = 0;

let firebaseConfig;

//*** CARICAMENTO DELLA PAGINA ***//
document.addEventListener("DOMContentLoaded", () => {
    // Inizializza Firebase con la tua configurazione
    firebaseConfig = {
        apiKey: "AIzaSyCEc_jt85Nr4KS-4wXSPfAscmc0Vt0o4BM",
        authDomain: "arcanetomestavern.firebaseapp.com",
        projectId: "arcanetomestavern",
        storageBucket: "arcanetomestavern.appspot.com",
        messagingSenderId: "1035963633765",
        appId: "1:1035963633765:web:7c1524769bc1e387ba768c",
        measurementId: "G-Q2BES5BYC2",
    };

    firebase.initializeApp(firebaseConfig);

    // Recupera il valore di 'id' dalla query URL
    const urlParams = new URLSearchParams(window.location.search);
    documentId = urlParams.get("id");
    console.log("> camp id: " + documentId);

    //loading
    document.getElementById("loading-img").style.display = "block";
    document.getElementById("body-container").style.display = "none";

    // Riferimento al tuo database Firestore
    db = firebase.firestore();

    db.collection("campaigns")
        .doc(documentId)
        .get()
        .then((querySnapshot) => {
            let plys_ids = querySnapshot.data().players;

            //container div griglia
            const container = document.createElement("div");
            container.className = "container";

            let concat_str = `
            <div class="four">
                <h1>GIOCATORI</h1>
            </div>
            <br />`;

            //interrogo db per recuperare le info del giocatore
            for (let i = 0; i < plys_ids.length; i++) {
                db.collection("players")
                    .doc(plys_ids[i])
                    .get()
                    .then((queryPlayerSnapshot) => {
                        //console.log(queryPlayerSnapshot.data().nome_giocatore);
                        _playerList.push(
                            new DMPlayer(
                                plys_ids[i],
                                queryPlayerSnapshot.data().nome_giocatore,
                                queryPlayerSnapshot.data().nome_personaggio,
                                queryPlayerSnapshot.data().classe,
                                queryPlayerSnapshot.data().curr_punti_ferita,
                                queryPlayerSnapshot.data().max_punti_ferita,
                                queryPlayerSnapshot.data().classe_armatura,
                                queryPlayerSnapshot.data().ispirazione
                            )
                        );
                        
                        //creazione cella della griglia
                        concat_str += `<div class="ply-div">
                        <div class="row">
                            <img
                                class="icons"
                                src="../server/resources/dm_icons/user.png"
                            />
                            <b class="inside-text">${
                                queryPlayerSnapshot.data().nome_giocatore
                            }</b>
                        </div>
                        <div class="row">
                            <img
                                class="icons"
                                src="../server/resources/dm_icons/character.png"
                            />
                            <b class="inside-text">${
                                queryPlayerSnapshot.data().nome_personaggio
                            }</b>
                        </div>
                        <div class="row">
                            <img
                                class="icons"
                                src="../server/resources/dm_icons/class.png"
                            />
                            <b class="inside-text">${
                                queryPlayerSnapshot.data().classe
                            }</b>
                        </div>
                        <div class="row">
                            <img
                                class="icons"
                                src="../server/resources/dm_icons/life.png"
                            />
                            <b class="inside-text">${
                                queryPlayerSnapshot.data().curr_punti_ferita
                            }/${queryPlayerSnapshot.data().max_punti_ferita}</b>
                        </div>
                        <div class="row">
                            <img
                                class="icons"
                                src="../server/resources/dm_icons/shield.png"
                            />
                            <b class="inside-text">${
                                queryPlayerSnapshot.data().classe_armatura
                            }</b>
                        </div>
                        <div class="row">
                            <img
                                class="icons"
                                src="../server/resources/dm_icons/initiative.png"
                            />
                            <b class="inside-text">${
                                queryPlayerSnapshot.data().ispirazione
                            }</b>
                        </div>
                        <div class="row">
                            <img
                                class="low-icons"
                                src="../server/resources/dm_icons/character_img.png"
                            />
                            <img
                                class="low-icons"
                                src="../server/resources/dm_icons/open.png"
                            />
                        </div>
                        </div> `;
                        
                        container.innerHTML = concat_str;
                    });
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
