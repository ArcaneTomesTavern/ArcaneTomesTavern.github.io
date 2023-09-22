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
                for(let i = 0; i < players.length; i++){
                    db.collection("players").doc(players[i]).get('nome_giocatore').then((_doc) => {
                        if(_doc.exists){
                            const playerName = _doc.data().nome_giocatore;
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
