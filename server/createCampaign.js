// Inizializza Firebase con la tua configurazione
const firebaseConfig = {
    apiKey: "AIzaSyCEc_jt85Nr4KS-4wXSPfAscmc0Vt0o4BM",
    authDomain: "arcanetomestavern.firebaseapp.com",
    projectId: "arcanetomestavern",
    storageBucket: "arcanetomestavern.appspot.com",
    messagingSenderId: "1035963633765",
    appId: "1:1035963633765:web:7c1524769bc1e387ba768c",
    measurementId: "G-Q2BES5BYC2",
};

// Inizializza l'app Firebase
firebase.initializeApp(firebaseConfig);

// Ottieni un riferimento al database Firestore
const db = firebase.firestore();

// Riferimenti agli input del form
const form = document.getElementById("form");
const nomeCampagnaInput = document.getElementById("nome_campagna");
const giocatoriInput = document.getElementById("giocatori");
const selezione_campagne = document.getElementById("selezione-campagne");

//* Variabili per i personaggi *//
let players_list = []; //giocatori dal db
let selected_players_ids = [];
let old_ids = []; //giocatori precedentemente selezionati
let cont = 0,
    select_number = 0; //contatore
var palyers_map = new Map(); //giocatori selezionati per la campagna

//**** EVENTI DOCUMENTO ****//

//caricamento del documento
document.addEventListener("DOMContentLoaded", () => {
    db.collection("players")
        .orderBy("nome_personaggio")
        .get()
        .then((querySnapshot) => {
            for (let i = 0; i < querySnapshot.size; i++) {
                const doc = querySnapshot.docs[i];
                /*let new_player = "";
          new_player += doc.data().nome_personaggio + " - ";
          new_player += doc.data().nome_giocatore + " - ";
          new_player += doc.data().classe;
          player_list.push(new_player);*/
                players_list.push(
                    new Player(
                        doc.ref.id,
                        doc.data().nome_giocatore,
                        doc.data().nome_personaggio,
                        doc.data().classe
                    )
                );
            }
            for (const p of players_list) console.log(p.toString());
        })
        .catch((error) => {
            console.error("Errore nel recupero delle campagne:", error);
        });
});

//aggiunta di un giocatore
document.getElementById("add-player").addEventListener("click", function () {
    cont++;
    select_number++;
    createNewSelect(cont);
    //TODO: fare in modo che non si possa creare un nuovo personaggio prima di averne selezionato un altro
    //TODO: rimuovere l'elemento attualmente selezionato dalla lista di giocatori possibili
});

// Gestisci l'invio del form
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nomeCampagna = nomeCampagnaInput.value;
    if (selezione_campagne.value !== "null") {
        db.collection("campaigns")
            .add({
                campaign_name: nomeCampagna,
                players: [...palyers_map.values()],
                campaign_type: selezione_campagne.value,
            })
            .then(() => {
                console.log("Record inserito con successo!");
                player_list = [];
                console.log();
                // Puoi effettuare azioni aggiuntive qui, se necessario
            })
            .catch((error) => {
                console.error("Errore nell'inserimento del record:", error);
            });
    } else {
        console.log("selezionare un tipo di campagna!");
    }
});

//**** FUNZIONI ****//

function removePlayer(btn, pos) {
    select_number--;
    const attacchiContainer = document.getElementById("players-container");
    attacchiContainer.removeChild(btn.parentNode);

    palyers_map.delete("p" + pos);

    if (select_number === 0) palyers_map = new Map(); //*reset map nel caso in cui non ci siano select

    // todo: modificare le opzioni ogni volta che viene rimosso un giocatore, questo deve ricomparire nella selezione
    //cont--;
}

function infoAlert() {
    alert("Le ripetizioni vengono salvate una volta");
}

function onSelectChange(sel_pos) {
    let val = document.getElementById("s" + sel_pos).value;
    palyers_map.set("p" + sel_pos, val);
    console.log(palyers_map);
}

function createNewSelect() {
    const super_div = document.getElementById("players-container");
    const container = document.createElement("div");

    container.id = "p" + cont;
    container.className = "container";
    let concat_str =
        '<select name="players-list" class="players-list" id="s' +
        cont +
        '" required> <option value="null" selected disabled>Seleziona personaggio</option>';

    //TODO: mettere come valore l'id del giocatore per una più semplice rimozione
    for (let i = 0; i < players_list.length; i++) {
        concat_str +=
            "<option value=" +
            players_list[i]._id +
            ">" +
            players_list[i] +
            "</option>";
    }
    container.innerHTML =
        concat_str +
        '</select><button type="button" class="remove_button" onClick="removePlayer(this, ' +
        cont +
        ')"> <img src= "../server/resources/delete.png" alt="rimuovi giocatore"></button>';

    super_div.appendChild(container);

    document
        .getElementById("s" + cont)
        .addEventListener("change", () => onSelectChange(cont));
}
