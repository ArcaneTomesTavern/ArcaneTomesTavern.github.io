document.addEventListener('DOMContentLoaded', () => {
    // Recupera il valore di 'id' dalla query URL
    const urlParams = new URLSearchParams(window.location.search);
    const documentId = urlParams.get('id');

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
    const campagneButtons = document.getElementById('buttonContainer');

    // Ricerca il documento specifico utilizzando l'ID passato nell'URL
    db.collection("campaigns").doc(documentId).get()
        .then((doc) => {
            if (doc.exists) {
                // Il documento è stato trovato, quindi puoi ottenere i giocatori associati
                const players = doc.data().players;

                // Manipola i dati come desideri, ad esempio, stampa l'array dei giocatori
                //const playersList = document.getElementById('playersList');
                //playersList.textContent = `Array di giocatori: ${JSON.stringify(players)}`;
                for(let i = 0; i < players.length; i++){
                    db.collection("players").doc(players[i]).get('nome_giocatore').then((_doc) => {
                        if(_doc.exists){
                            const playerName = _doc.data();
                            const button = document.createElement('button');
                            button.className = "campButton";
                            button.id = playerName.replace(/ /g, "_") ;
                            button.style = "--clr:#d5a24c";
                            //span dentro al bottone
                            const span = document.createElement('span');
                            span.textContent = playerName;
                            button.append(span);
                            //i dentro al bottone
                            button.append(document.createElement('i'));
                            // Aggiungi il pulsante alla pagina HTML
                            campagneButtons.appendChild(button);
                        }
                    });
                }
            } else {
                // Il documento non è stato trovato
                playersList.textContent = 'Documento non trovato.';
            }
        })
        .catch((error) => {
            console.error('Errore nella query Firestore:', error);
        });
});




// campaign.js
/*document.addEventListener('DOMContentLoaded', () => {
    // Recupera il valore intero dalla query URL
    const urlParams = new URLSearchParams(window.location.search);
    //const intValue = parseInt(urlParams.get('id'), 10);
    const stringValue = urlParams.get('id');

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
    .where('Document ID', '==', stringValue).get('players')
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
                }
                for (let i = 0; i < querySnapshot.size; i++) {
                    const doc = querySnapshot.docs[i];
                    console.log(doc);
                    const playersArr = doc.data().players;
                    console.log(playersArr);    
                }
            }

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const players = data.giocatori; // Supponiamo che i giocatori siano memorizzati in un campo "players" nell'array
                playersList.textContent = `Array di giocatori: ${JSON.stringify(players)}`;
            }); 
        })
        .catch((error) => {
            console.error('Errore nella query Firestore:', error);
        });
});
*/



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