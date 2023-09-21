
// Inizializza Firebase con la tua configurazione
//const firebaseConfig = getFirebaseConfig();

// Inizializza l'app Firebase
//firebase.initializeApp(firebaseConfig);

// Ottieni un riferimento al database Firestore
//const db = firebase.firestore();

//inizializza firebase e database
const db = getDatabaseReference();

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