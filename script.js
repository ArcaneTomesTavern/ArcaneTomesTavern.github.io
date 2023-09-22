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
var cont = 0;

db.collection("ArcaneTomesTavernDB").doc("campagne").get()
  .then((querySnapshot) => {
    //const campagneButtons = document.getElementById('campagneButtons');
    const campagneButtons = document.getElementById('buttonContainer');

    if(querySnapshot.exists) {
      const campagneData = querySnapshot.data();
      for (const key in campagneData) {
        const campagna = campagneData[key];
        // Creazione di un pulsante per la campagna
        const button = document.createElement('button');

        button.value = cont;
        cont++;
        button.className = "campButton";
        button.id = campagna.nome_campagna.replace(/ /g, "_") ;
        button.style = "--clr:#d5a24c";
        //span dentro al bottone
        const span = document.createElement('span');
        span.textContent = campagna.nome_campagna;
        button.append(span);
        //i dentro al bottone
        button.append(document.createElement('i'));

        //button.textContent = campagna.nome_campagna;
        button.addEventListener('click', () => {
          console.log(`Campagna selezionata: ${campagna.nome_campagna}`);
          window.location.href = `campaign.html?value=${button.value}`;
        });

        // Aggiungi il pulsante alla pagina HTML
        campagneButtons.appendChild(button);
      }
    }
  })
  .catch((error) => {
    console.error('Errore nel recupero delle campagne:', error);
  });
