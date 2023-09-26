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


let bV = false, bS = false, bM = false;

document.addEventListener('DOMContentLoaded', () => {

    const b_V = document.getElementById("b-V");
    const b_S = document.getElementById("b-S");
    const b_M = document.getElementById("b-M");
    const material_components_description = document.getElementById("material-components-description");

    b_V.addEventListener("click", function () {
        bV = !bV;
        if (bV) b_V.style.backgroundColor = "#666464";
        else b_V.style.backgroundColor = "#444";
    });

    b_S.addEventListener("click", function () {
        bS = !bS;
        if (bS) b_S.style.backgroundColor = "#666464";
        else b_S.style.backgroundColor = "#444";
    });

    b_M.addEventListener("click", function () {
        bM = !bM;
        if (bM) {
            b_M.style.backgroundColor = "#666464";
            material_components_description.style.display = "inline";
            //material_components_description.classList.remove('hidden');
        } else {
            b_M.style.backgroundColor = "#444";
            material_components_description.style.display = "none";
            //material_components_description.classList.add('hidden');
        }
    });

    opzioniClasse();
});

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    //prendo gli id degli inserimenti
    const spell_name = document.getElementById("spell-name").value;
    const spell_tag = document.getElementById("spell-tag").value;
    const spell_level = document.getElementById("spell-level").value;
    const spell_time = document.getElementById("spell-time").value;
    const spell_time_action = document.getElementById("spell-time-action").value;
    const spell_type = document.getElementById("spell-type").value;
    const range_type = document.getElementById("range-type").value;
    const range_type_int = document.getElementById("range-type-int").value;
    const duration_type = document.getElementById("duration-type").value;
    const duration_type_int = document.getElementById("duration-type-int").value;
    const duration = document.getElementById("duration").value;
    const spell_description = document.getElementById("spell-description").value;
    const spell_class = document.getElementById("class").value;

    if (spell_level !== "null" || spell_tag !== "null" || spell_time_action !== "null" || 
        spell_type !== "null" || range_type !== "null" || spell_class !== "null" || duration !== "null"
    ) {
        db.collection('spells').add({
            spell_name: spell_name,
            spell_tag: spell_tag,
            spell_level: spell_level,
            spell_time: spell_time,
            spell_time_action: spell_time_action,
            spell_type: spell_type,
            b_V: bV,
            b_S: bS,
            b_M: bM,
            material_components_description: bM ? document.getElementById("material-components-description").value : "null",
            range_type: range_type,
            range_type_int: range_type_int,
            duration_type: duration_type,
            duration_type_int: duration_type_int,
            duration: duration,
            spell_description: spell_description,
            spell_class: spell_class
        })
            .then(() => {
                console.log("Record inserito con successo!");
            })
            .catch((error) => {
                console.error("Errore nell'inserimento del record:", error);
            });
    } else {
        alert("Inserisci tutti i campi!");
    }
});

/* SEZIONE SELEZIONE CLASSE */
const arrayOpzioni = [
    "Artificiere",
    "Artificiere - Alchimista",
    "Artificiere - Armaiolo",
    "Artificiere - Artigliere",
    "Artificiere - Fabbro da battaglia",

    "Bardo",
    "Bardo - Collegio della Creazione",
    "Bardo - Collegio dell'Eloquenza",
    "Bardo - Collegio di Glamour",
    "Bardo - Collegio di Lore",
    "Bardo - Collegio degli Spiriti",
    "Bardo - Collegio delle Spade",
    "Bardo - Collegio della Tragedia",
    "Bardo - Collegio del Valore",
    "Bardo - Collegio dei Sapienti",

    "Cacciatore di sangue - Ordine dell'anima profana",
    "Cacciatore di sangue - Ordine dell'anima profana (INT)",
    "Cacciatore di sangue - Ordine dell'anima profana (WIS)",

    "Chierico",
    "Chierico - Dominio degli Arcani",
    "Chierico - Dominio del Sangue",
    "Chierico - Dominio della Morte",
    "Chierico - Dominio della Forgia",
    "Chierico - Dominio della Tomba",
    "Chierico - Dominio della Conoscenza",
    "Chierico - Dominio della Vita",
    "Chierico - Dominio della Luna",
    "Chierico - Dominio della Natura",
    "Chierico - Dominio dell'Ordine",
    "Chierico - Dominio della Pace",
    "Chierico - Dominio della Tempesta",
    "Chierico - Dominio dell'Inganno",
    "Chierico - Dominio del Crepuscolo",
    "Chierico - Dominio della Guerra",

    "Druido",
    "Druido - Il cerchio dei sogni",
    "Druido - Cerchio di spore",
    "Druido - Cerchio di Stelle",
    "Druido - Cerchio dei Maledetti",
    "Druido - Cerchio della Terra",
    "Druido - Il cerchio della terra (Artico)",
    "Druido - Cerchio della Terra (Costa)",
    "Druido - Cerchio della Terra (Deserto)",
    "Druido - Cerchio della Terra (Foresta)",
    "Druido - Cerchio della Terra (Prateria)",
    "Druido - Cerchio della terra (Montagna)",
    "Druido - Cerchio della terra (Palude)",
    "Druido - Cerchio della Terra (Underdark)",
    "Druido - Cerchio della Luna",
    "Druido - Cerchio del Pastore",
    "Druido - Cerchio del Fuoco Selvaggio",

    "Guerriero - Cavaliere Eldritch",

    "Paladino",
    "Paladino - Giuramento di Conquista",
    "Paladino - Giuramento di Devozione",
    "Paladino - Giuramento di Gloria",
    "Paladino - Giuramento di Redenzione",
    "Paladino - Giuramento degli Antichi",
    "Paladino - Giuramento della Corona",
    "Paladino - Giuramento della Corona",
    "Paladino - Giuramento del Mare Aperto",
    "Paladino - Giuramento degli Osservatori",
    "Paladino - Giuramento della Vendetta",
    "Paladino - Giuramento del Rompicapo",

    "Ranger",
    "Ranger - Maestro delle bestie",
    "Ranger - Drakewarden",
    "Ranger - Viandante Fey",
    "Ranger - Cacciatore di tenebre",
    "Ranger - Camminatore dell'orizzonte",
    "Ranger - Cacciatore",
    "Ranger - Uccisore di mostri ",
    "Ranger - Custode di sciami",
    "Ranger - Ingannatore Arcano",

    "Incantatore",
    "Incantatore - Mente aberrante",
    "Incantatore - Anima a orologeria",
    "Incantatore - Anima divina",
    "Incantatore - Stirpe Draconica",
    "Incantatore - Stregoneria Lunare",
    "Incantatore - Runechild",
    "Incantatore - Magia dell'Ombra",
    "Incantatore - Stregoneria della Tempesta",
    "Incantatore - Magia Selvaggia",

    "Stregone",
    "Stregone - L'Arcivescovo",
    "Stregone - Il Celeste",
    "Stregone - L'Insondabile",
    "Stregone - Il Demone",
    "Stregone - Il Genio",
    "Stregone - Il Grande Antico",
    "Stregone - La lama esagonale",
    "Stregone - Il Non-Morto",
    "Stregone - L'immortale",

    "Mago",
    "Mago - Lame Danzanti",
    "Mago - Magia del Sangue",
    "Mago - Magia della Cronurgia",
    "Mago - Magia della Graviturgia",
    "Mago - Ordine degli Scribi",
    "Mago - Scuola di Abiurazione",
    "Mago - Scuola di Congiurazione",
    "Mago - Scuola di Divinazione",
    "Mago - Scuola di Incanto",
    "Mago - Scuola di Evocazione",
    "Mago - Scuola di Illusione",
    "Mago - Scuola di Negromanzia",
    "Mago - Scuola di Trasmutazione",
    "Mago - Magia di Guerra"
];

function opzioniClasse() {
    const selectMenu = document.getElementById("class");

    for (let i = 0; i < arrayOpzioni.length; i++) {
        const opzione = arrayOpzioni[i];
        // Crea un elemento option
        const optionElement = document.createElement("option");
        // Imposta il valore dell'opzione (puoi usarlo come preferisci)
        optionElement.value = i + 1;
        // Imposta il testo dell'opzione
        optionElement.text = opzione;
        optionElement.value = opzione.replace(/ - /g, "_").replace(/ /g, "_").replace(/'/g, "_");
        // Aggiungi l'opzione al menu select
        selectMenu.appendChild(optionElement);
    }
}


