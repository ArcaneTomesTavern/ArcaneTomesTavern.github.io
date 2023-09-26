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
const datiDiv = document.getElementById("dati_class_rank"); // Assicurati di avere un elemento HTML con questo ID
const nome_pgDIV = document.getElementById("nome_pg");

function ottieniEVisualizzaDati() {
    playersRef.doc(playerId).get().then((doc) => {
        if (doc.exists) {
            const data = doc.data();

            // Ottieni i campi dai dati del documento
            const nome_personaggio = data.nome_personaggio;
            const classe = data.classe;
            const livello = data.livello;
            const imageUrl = data.image_url;

            // Aggiungi i dati all'elemento HTML
            datiDiv.innerHTML = `
                <p>Classe: ${classe}</p>
                <p>Livello: ${livello}</p>
            `;

            nome_pgDIV.innerHTML = `
                <p> ${nome_personaggio}</p>
            `;

            const immagineElement = document.getElementById('immagineFirebase');
            immagineElement.src = imageUrl;
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

