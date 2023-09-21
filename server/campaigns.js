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