// Inizializza Firebase con la tua configurazione
const firebaseConfig = {
    apiKey: "AIzaSyBpgYB4_8gIT20m9u3sNMpVhqVytrBpZ20",
    authDomain: "test-fire-realtime-db.firebaseapp.com",
    databaseURL: "https://test-fire-realtime-db-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-fire-realtime-db",
    storageBucket: "test-fire-realtime-db.appspot.com",
    messagingSenderId: "791679169237",
    appId: "1:791679169237:web:a441e09863db2ad3ff685c",
    measurementId: "G-LGSPN89S5W"
};

// Inizializza l'app Firebase
firebase.initializeApp(firebaseConfig);

// Ottieni un riferimento al database Firestore
const db = firebase.firestore();

// Riferimento alla collezione "ArcaneTomesTavern/campagne"
const campagneRef = db.collection("ArcaneTomesTavern").doc("campagne");

// Esegui la query per ottenere i dati
campagneRef.get()
    .then((doc) => {
        if (doc.exists) {
            const campagneData = doc.data();
            const campagneTable = document.getElementById("campagneTable");

            // Cicla attraverso i dati e crea righe nella tabella HTML
            for (const key in campagneData) {
                if (campagneData.hasOwnProperty(key)) {
                    const campagna = campagneData[key];
                    const row = campagneTable.insertRow();
                    const cell1 = row.insertCell(0);
                    const cell2 = row.insertCell(1);
                    const cell3 = row.insertCell(2);
                    
                    cell1.textContent = campagna.id_campagna;
                    cell2.textContent = campagna.nome_campagna;
                    cell3.textContent = campagna.giocatori.join(", "); // Unisce i giocatori in una stringa
                }
            }
        } else {
            console.log("Nessun documento trovato.");
        }
    })
    .catch((error) => {
        console.error("Errore nella query:", error);
    });