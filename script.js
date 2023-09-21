// Importa il modulo Firebase
//import firebase from 'firebase/app';
//import 'firebase/firestore';

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

// Recupera le campagne dal database
const db = firebase.firestore();

db.collection("ArcaneTomesTavernDB").doc("campagne").get()
.then((querySnapshot) => {
    const campagneButtons = document.getElementById('campagneButtons');

    if (querySnapshot.size === 0) {
      console.log("Nessun documento trovato nella collezione 'campagne'.");
      return;
    }

    querySnapshot.forEach((doc) => {
      const campagna = doc.data();
      const nomeCampagna = campagna.nome_campagna;

      // Creazione di un pulsante per la campagna
      const button = document.createElement('button');
      button.textContent = nomeCampagna;
      button.addEventListener('click', () => {
        // Gestisci la selezione della campagna qui
        // Ad esempio, puoi memorizzare l'ID della campagna selezionata o fare altre azioni
        console.log(`Campagna selezionata: ${nomeCampagna}`);
      });

      // Aggiungi il pulsante alla pagina HTML
      campagneButtons.appendChild(button);
    });
  })
  .catch((error) => {
    console.error('Errore nel recupero delle campagne:', error);
  });
