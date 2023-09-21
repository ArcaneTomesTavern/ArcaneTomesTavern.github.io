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
    if (querySnapshot.empty) {
      console.log("Nessun documento trovato nella collezione 'campagne'.");
      return;
    }

    // Continua con il codice per l'elaborazione dei documenti
    const campagneButtons = document.getElementById('campagneButtons');
    querySnapshot.forEach((doc) => {
      const campagna = doc.data();
      const nomeCampagna = campagna.nome_campagna;
      
      // Il resto del tuo codice per creare i pulsanti
    });
  })
  .catch((error) => {
    console.error('Errore nel recupero delle campagne:', error);
  });