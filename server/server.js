
function getFirebaseConfig(){
    // Inizializza Firebase con la tua configurazione
    return {
        apiKey: "AIzaSyCEc_jt85Nr4KS-4wXSPfAscmc0Vt0o4BM",
        authDomain: "arcanetomestavern.firebaseapp.com",
        projectId: "arcanetomestavern",
        storageBucket: "arcanetomestavern.appspot.com",
        messagingSenderId: "1035963633765",
        appId: "1:1035963633765:web:7c1524769bc1e387ba768c",
        measurementId: "G-Q2BES5BYC2"
    };
}

function getDatabaseReference(){
    // Inizializza Firebase con la tua configurazione
    const firebaseConfig = getFirebaseConfig();
    // Inizializza l'app Firebase
    firebase.initializeApp(firebaseConfig);
    // Ottieni un riferimento al database Firestore
    return firebase.firestore();

}