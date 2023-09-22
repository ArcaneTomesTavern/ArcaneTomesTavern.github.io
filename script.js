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
const campagneButtons = document.getElementById('buttonContainer');

db.collection('campaigns')
    .get('campaign_name')
    .then((querySnapshot) => {
        for (let i = 0; i < querySnapshot.size; i++) {
            const doc = querySnapshot.docs[i];
            
            // Ottieni solo il nome della campagna dal documento
            const nomeCampagna = doc.data().campaign_name;
            
            const button = document.createElement('button');

            button.value = cont;
            cont++;
            button.className = "campButton";
            button.id = nomeCampagna.replace(/ /g, "_") ;
            button.style = "--clr:#d5a24c";
            //span dentro al bottone
            const span = document.createElement('span');
            span.textContent = nomeCampagna;
            button.append(span);
            //i dentro al bottone
            button.append(document.createElement('i'));
    
            //button.textContent = campagna.nome_campagna;
            button.addEventListener('click', () => {
              console.log(`Campagna selezionata: ${nomeCampagna}`);
              window.location.href = `client/campaigns.html?value=${button.value}`;
            });
  
            // Aggiungi il pulsante alla pagina HTML
            campagneButtons.appendChild(button);
        }
    })
    .catch((error) => {
        console.error('Errore nel recupero delle campagne:', error);
    });

const add_button = document.getElementById("add");
add_button.addEventListener('click', function(){
  window.location.href = '../client/createCampaign.html';
});