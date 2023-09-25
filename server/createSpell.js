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

//prendo gli id degli inserimenti
const spell_name = document.getElementById("spell-name").value;
const spell_tag = document.getElementById("spell-tag").value;
const spell_level = document.getElementById("spell-level").value;
const spell_time = document.getElementById("spell-time").value;
const spell_time_action = document.getElementById("spell-time-action").value;
const spell_type = document.getElementById("spell-type").value;
const b_V = document.getElementById("b-V");
const b_S = document.getElementById("b-S");
const b_M = document.getElementById("b-M");
const material_components_description = document.getElementById("material-components-description");
const range_type = document.getElementById("range-type").value;
const range_type_int = document.getElementById("range-type-int").value;
const duration_type = document.getElementById("duration-type").value;
const duration_type_int = document.getElementById("duration-type-int").value;
const duration = document.getElementById("duration").value;
const spell_description = document.getElementById("spell-description").value;

var bV = false, bS = false, bM = false; 

b_V.addEventListener("click", function(){
    bV = !bV;
    if(bV) b_V.style.backgroundColor = "#666464";
    else b_V.style.backgroundColor = "#444";
});

b_S.addEventListener("click", function(){
    bS = !bS;
    if(bS) b_S.style.backgroundColor = "#666464";
    else b_S.style.backgroundColor = "#444";
});

b_M.addEventListener("click", function(){
    bM = !bM;
    if(bM) {    //TODO: ERRORE NELLA RIMOZIONE ED AGGIUNTA DEL TEXTAREA
        b_M.style.backgroundColor = "#666464";
        material_components_description.classList.remove('hidden');
    }
    else {
        b_M.style.backgroundColor = "#444";
        material_components_description.add('hidden');
    }
});

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    db.collection('spells').add({
        spell_name : spell_name,
        spell_tag : spell_tag,
        spell_level: spell_level,
        spell_time: spell_time,
        spell_time_action: spell_time_action,
        spell_type: spell_type,
        b_V: b_V,
        b_S: b_S,
        b_M: b_M,
        material_components_description: material_components_description,
        range_type: range_type,
        range_type_int: range_type_int,
        duration_type: duration_type,
        duration_type_int: duration_type_int,
        duration: duration,
        spell_description : spell_description
    })
    .then(() => {
        console.log("Record inserito con successo!");
    })
    .catch((error) => {
        console.error("Errore nell'inserimento del record:", error);
    });
});

