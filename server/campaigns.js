// campaign.js
document.addEventListener('DOMContentLoaded', () => {
    // Recupera il valore intero dalla query URL
    const urlParams = new URLSearchParams(window.location.search);
    const intValue = parseInt(urlParams.get('value'), 10);

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

    firebase.initializeApp(firebaseConfig);

    // Riferimento al tuo database Firestore
    const db = firebase.firestore();

    // Esegui una query al database Firestore utilizzando il valore intero
    //db.collection("ArcaneTomesTavernDB").doc("campagne")
    db.collection("campaigns")
    .where('id_campagna', '==', intValue).get('players')
        .then((querySnapshot) => {
            const playersList = document.getElementById('playersList');
            if (querySnapshot.empty) {
                playersList.textContent = 'Nessun risultato trovato.';
                return;
            }

            if(querySnapshot.exists) {
               /* const campagneData = querySnapshot.data();
                for (const key in campagneData) {
                    const campagna = campagneData[key];
                    const players = data.giocatori; // Supponiamo che i giocatori siano memorizzati in un campo "players" nell'array
                    playersList.textContent = `Array di giocatori: ${JSON.stringify(players)}`;   
                }*/
                for (let i = 0; i < querySnapshot.size; i++) {
                    const doc = querySnapshot.docs[i];
                    console.log(doc);
                    const playersArr = doc.data().players;
                    console.log(playersArr);    
                }
            }
/*
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const players = data.giocatori; // Supponiamo che i giocatori siano memorizzati in un campo "players" nell'array
                playersList.textContent = `Array di giocatori: ${JSON.stringify(players)}`;
            }); */
        })
        .catch((error) => {
            console.error('Errore nella query Firestore:', error);
        });
});




// Inizializza Firebase con la tua configurazione
/*const firebaseConfig = {
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
    */