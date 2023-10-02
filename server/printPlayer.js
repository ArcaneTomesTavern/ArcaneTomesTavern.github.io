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
const playerId = "ELyqKAN794416YGJXPGv"; // Sostituisci con l'ID del documento che desideri recuperare

// DIV VARI DEI DATI
const nome_pgDIV = document.getElementById("nome_pg");
const datiDiv = document.getElementById("dati_class_rank"); // Assicurati di avere un elemento HTML con questo ID
const experience = document.getElementById("exp");
const forzaDIV = document.getElementById("forza");
const destrezzaDIV = document.getElementById("destrezza");
const costituzioneDIV = document.getElementById("costituzione");
const intelligenzaDIV = document.getElementById("intelligenza");
const saggezzaDIV = document.getElementById("saggezza");
const carismaDIV = document.getElementById("carisma");
const bonus_compDIV = document.getElementById("bonus_competenza");
const velocitaDIV = document.getElementById("velocita");
const ispirazioneDIV = document.getElementById("ispirazione");
const ispirazioneCheckbox = document.getElementById("ispirazioneCheckbox"); // solo per checkbox di ispirazione
const saluteDIV = document.getElementById("salute");
const tsDIV = document.getElementById("caratteristica_ts");
const sensiDIV = document.getElementById("sensi");
const comp_linguaggiDIV = document.getElementById("competenze_linguaggi");
const abilitaDIV = document.getElementById("abilita");
const iniziativaDIV = document.getElementById("iniziativa");
const caDIV = document.getElementById("ca");
const resistenzeDIV = document.getElementById("resistenze");
const condizioniDIV = document.getElementById("condizioni");

function ottieniEVisualizzaDati() {
    playersRef.doc(playerId).get().then((doc) => {
        if (doc.exists) {
            const data = doc.data();

            // Ottieni i campi dai dati del documento
            const nome_personaggio = data.nome_personaggio;
            const classe = data.classe;
            const razza = data.razza;
            const livello = data.livello;
            const esperienza = data.esperienza;
            const imageUrl = data.image_url;

            const forza = data.forza;
            const destrezza = data.destrezza;
            const costituzione = data.costituzione;
            const intelligenza = data.intelligenza;
            const saggezza = data.saggezza;
            const carisma = data.carisma;

            const bonus_competenza = data.bonus_competenza;
            const velocita = data.velocita;
            const ispirazione = data.ispirazione;

            const max_punti_ferita = data.max_punti_ferita;
            const curr_punti_ferita = data.curr_punti_ferita;
            const temp_punti_ferita = data.temp_punti_ferita;

            const forza_ts = data.forza_ts;
            const forza_tsChecked = data.forza_tsChecked;
            const destrezza_ts = data.destrezza_ts;
            const destrezza_tsChecked = data.destrezza_tsChecked;
            const costituzione_ts = data.costituzione_ts;
            const costituzione_tsChecked = data.costituzione_tsChecked;
            const intelligenza_ts = data.intelligenza_ts;
            const intelligenza_tsChecked = data.intelligenza_tsChecked;
            const saggezza_ts = data.saggezza_ts;
            const saggezza_tsChecked = data.saggezza_tsChecked;
            const carisma_ts = data.carisma_ts;
            const carisma_tsChecked = data.carisma_tsChecked;

            const percezione_passiva = data.percezione_passiva;
            const investigazione_passiva= data.investigazione_passiva;
            const saggezza_passiva = data.saggezza_passiva;

            const equipaggiamento = data.equipaggiamento;
            const comp_linguaggi = data.comp_linguaggi;

            const acrobazia = data.acrobazia;
            const acrobaziaChecked = data.acrobaziaChecked;
            const addestrare_animali = data.addestrare_animali;
            const addestrare_animaliChecked = data.addestrare_animaliChecked;
            const arcano = data.arcano;
            const arcanoChecked = data.arcanoChecked;
            const atletica = data.atletica;
            const atleticaChecked = data.atleticaChecked;
            const furtivita = data.furtivita;
            const furtivitaChecked = data.furtivitaChecked;
            const indagare = data.indagare;
            const indagareChecked = data.indagareChecked;
            const inganno = data.inganno;
            const ingannoChecked = data.ingannoChecked;
            const intimidire = data.intimidire;
            const intimidireChecked = data.intimidireChecked;
            const intrattenere = data.intrattenere;
            const intrattenereChecked = data.intrattenereChecked;
            const intuizione = data.intuizione;
            const intuizioneChecked = data.intuizioneChecked;
            const medicina = data.medicina;
            const medicinaChecked = data.medicinaChecked;
            const natura = data.natura;
            const naturaChecked = data.naturaChecked;
            const percezione = data.percezione;
            const percezioneChecked = data.percezioneChecked;
            const persuasione = data.persuasione;
            const persuasioneChecked = data.persuasioneChecked;
            const rapidita_mano = data.rapidita_mano;
            const rapidita_manoChecked = data.rapidita_manoChecked;
            const religione = data.religione;
            const religioneChecked = data.religioneChecked;
            const sopravvivenza = data.sopravvivenza;
            const sopravvivenzaChecked = data.sopravvivenzaChecked;
            const storia = data.storia;
            const storiaChecked = data.storiaChecked;

            const iniziativa = data.iniziativa;
            const classe_armatura = data.classe_armatura;

            const resistenze = data.resistenze;
            const condizioni = data.condizioni;

            // Aggiungi i dati all'elemento HTML
            datiDiv.innerHTML = `<p>${razza} &nbsp ${classe} <br><br> <p>Livello ${livello}<\p>`;

            nome_pgDIV.innerHTML = `<p> ${nome_personaggio}</p>`;

            experience.innerHTML = ` <br><p>${esperienza}/${level_exp[livello]}</p>`;
            experience.style.width = `${(esperienza/level_exp[livello])*100}%`; 

            const immagineElement = document.getElementById('immagineFirebase');
            immagineElement.src = imageUrl;  
            
            forzaDIV.innerHTML = `<p  style="color: grey; font-size: 15px">Forza</p><br><p>${ottieniSegno(forza)}</p>`;
            destrezzaDIV.innerHTML = `<p  style="color: grey; font-size: 15px">Destrezza</p><br><p>${ottieniSegno(destrezza)}</p>`;
            costituzioneDIV.innerHTML = `<p  style="color: grey; font-size: 15px">Costituzione</p><br><p>${ottieniSegno(costituzione)}</p>`;
            intelligenzaDIV.innerHTML = `<p  style="color: grey; font-size: 15px">Intelligenza</p><br><p>${ottieniSegno(intelligenza)}</p>`;
            saggezzaDIV.innerHTML = `<p  style="color: grey; font-size: 15px">Saggezza</p><br><p>${ottieniSegno(saggezza)}</p>`;
            carismaDIV.innerHTML = `<p  style="color: grey; font-size: 15px">Carisma</p><br><p>${ottieniSegno(carisma)}</p>`;
            
            bonus_compDIV.innerHTML = `<p style="color: grey; font-size: 15px">Bonus Competenza</p><br><p>+${bonus_competenza}</p>`;

            velocitaDIV.innerHTML = `<p style="color: grey; font-size: 15px">Velocità</p><br><p>${velocita}ft</p>`;

            ispirazioneCheckbox.checked = ispirazione;

            if(temp_punti_ferita != 0) {
                saluteDIV.innerHTML = `<p style="color: grey; font-size: 15px">Salute</p><br><p>Attuale:&nbsp &nbsp${curr_punti_ferita}/${max_punti_ferita}</p>
                <br<p>Temporanei:&nbsp &nbsp ${temp_punti_ferita}</p>`;
            }
            else {
                saluteDIV.innerHTML = `<p style="color: grey; font-size: 15px">Salute</p><br><p>Attuale:&nbsp &nbsp${curr_punti_ferita}/${max_punti_ferita}</p>
                <br<p>Temporanei:&nbsp &nbsp ---</p>`;
            }
            
            tsDIV.innerHTML = `<p style="color: grey; font-size: 22px">Tiri Salvezza Abilità</p><br><br><br>
            <div>
                <input type="checkbox" id="checkboxForza_ts" ${forza_tsChecked ? 'checked' : ''} disabled>
                <label for="checkboxForza_ts">Forza:&nbsp${ottieniSegno(forza_ts)}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</label>

                <input type="checkbox" id="checkboxIntelligenza_ts" ${intelligenza_tsChecked ? 'checked' : ''} disabled>
                <label for="checkboxIntelligenza_ts">Intelligenza&nbsp:${ottieniSegno(intelligenza_ts)}</label><br><br><br>

                <input type="checkbox" id="checkboxDestrezza_ts" ${destrezza_tsChecked ? 'checked' : ''} disabled>
                <label for="checkboxDestrezza_ts">Destrezza:&nbsp${ottieniSegno(destrezza_ts)}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</label>

                <input type="checkbox" id="checkboxSaggezza_ts" ${saggezza_tsChecked ? 'checked' : ''} disabled>
                <label for="checkboxSaggezza_ts">Saggezza&nbsp:${ottieniSegno(saggezza_ts)}</label><br><br><br>

                <input type="checkbox" id="checkboxCostituzione_ts" ${costituzione_tsChecked ? 'checked' : ''} disabled>
                <label for="checkboxCostituzione_ts">Costituzione:&nbsp${ottieniSegno(costituzione_ts)}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</label>

                <input type="checkbox" id="checkboxCarisma_ts" ${carisma_tsChecked ? 'checked' : ''} disabled>
                <label for="checkboxCarisma_ts">Carisma&nbsp:${ottieniSegno(carisma_ts)}</label><br><br><br>
            </div>
            `;

            sensiDIV.innerHTML = `<p style="color: grey; font-size: 22px">Capacità Sensoriali</p><br><br><br>
            <p>Percezione Passiva:&nbsp${percezione_passiva}</p><br>
            <p>Investigazione Passiva:&nbsp${investigazione_passiva}</p><br>
            <p>Saggezza Passiva:&nbsp${saggezza_passiva}</p><br>
            `;

            comp_linguaggiDIV.innerHTML = `<p style="color: grey; font-size: 22px">Competenze e Linguaggi</p><br><br><br>
            ${dividiEquipaggiamento(equipaggiamento)}<hr><br><br><p style="color: grey; font-size: 18px"> Linguaggi</p><br><p>${comp_linguaggi}</p>`;

            abilitaDIV.innerHTML = `<br><br><p style="color: grey; font-size: 22px">Abilità</p><br><br>
                <div>
                    <input type="checkbox" id="checkboxAcrobazia" ${acrobaziaChecked ? 'checked' : ''} disabled>
                    <label for="checkboxAcrobazia">Acrobazia:&nbsp${ottieniSegno(acrobazia)}</label><br><br><br>

                    <input type="checkbox" id="checkboxAddestrare_animali" ${addestrare_animaliChecked ? 'checked' : ''} disabled>
                    <label for="checkboxAddestrare_animali">Addestrare_animali:&nbsp${ottieniSegno(addestrare_animali)}</label><br><br><br>

                    <input type="checkbox" id="checkboxArcano" ${arcanoChecked ? 'checked' : ''} disabled>
                    <label for="checkboxArcano">Arcano:&nbsp${ottieniSegno(arcano)}</label><br><br><br>

                    <input type="checkbox" id="checkboxAtletica" ${atleticaChecked ? 'checked' : ''} disabled>
                    <label for="checkboxAtletica">Atletica:&nbsp${ottieniSegno(atletica)}</label><br><br><br>

                    <input type="checkbox" id="checkboxFurtivita" ${furtivitaChecked ? 'checked' : ''} disabled>
                    <label for="checkboxFurtivita">Furtivita:&nbsp${ottieniSegno(furtivita)}</label><br><br><br>

                    <input type="checkbox" id="checkboxIndagare" ${indagareChecked ? 'checked' : ''} disabled>
                    <label for="checkboxIndagare">Indagare:&nbsp${ottieniSegno(indagare)}</label><br><br><br>

                    <input type="checkbox" id="checkboxInganno" ${ingannoChecked ? 'checked' : ''} disabled>
                    <label for="checkboxInganno">Inganno:&nbsp${ottieniSegno(inganno)}</label><br><br><br>

                    <input type="checkbox" id="checkboxIntimidire" ${intimidireChecked ? 'checked' : ''} disabled>
                    <label for="checkboxIntimidire">Intimidire:&nbsp${ottieniSegno(intimidire)}</label><br><br><br>

                    <input type="checkbox" id="checkboxIntrattenere" ${intrattenereChecked ? 'checked' : ''} disabled>
                    <label for="checkboxIntrattenere">Intrattenere:&nbsp${ottieniSegno(intrattenere)}</label><br><br><br>

                    <input type="checkbox" id="checkboxIntuizione" ${intuizioneChecked ? 'checked' : ''} disabled>
                    <label for="checkboxIntuizione">Intuizione:&nbsp${ottieniSegno(intuizione)}</label><br><br><br>

                    <input type="checkbox" id="checkboxMedicina" ${medicinaChecked ? 'checked' : ''} disabled>
                    <label for="checkboxMedicina">Medicina:&nbsp${ottieniSegno(medicina)}</label><br><br><br>

                    <input type="checkbox" id="checkboxNatura" ${naturaChecked ? 'checked' : ''} disabled>
                    <label for="checkboxNatura">Natura:&nbsp${ottieniSegno(natura)}</label><br><br><br>

                    <input type="checkbox" id="checkboxPercezione" ${percezioneChecked ? 'checked' : ''} disabled>
                    <label for="checkboxPercezione">Percezione:&nbsp${ottieniSegno(percezione)}</label><br><br><br>

                    <input type="checkbox" id="checkboxPersuasione" ${persuasioneChecked ? 'checked' : ''} disabled>
                    <label for="checkboxPersuasione">Persuasione:&nbsp${ottieniSegno(persuasione)}</label><br><br><br>

                    <input type="checkbox" id="checkboxRapidita_mano" ${rapidita_manoChecked ? 'checked' : ''} disabled>
                    <label for="checkboxRapidita_mano">Rapidita di Mano:&nbsp${ottieniSegno(rapidita_mano)}</label><br><br><br>

                    <input type="checkbox" id="checkboxReligione" ${religioneChecked ? 'checked' : ''} disabled>
                    <label for="checkboxReligione">Religione:&nbsp${ottieniSegno(religione)}</label><br><br><br>

                    <input type="checkbox" id="checkboxSopravvivenza" ${sopravvivenzaChecked ? 'checked' : ''} disabled>
                    <label for="checkboxSopravvivenza">Sopravvivenza:&nbsp${ottieniSegno(sopravvivenza)}</label><br><br><br>

                    <input type="checkbox" id="checkboxStoria" ${storiaChecked ? 'checked' : ''} disabled>
                    <label for="checkboxStoria">Storia:&nbsp${ottieniSegno(storia)}</label><br><br><br>
                </div>
            `;

            iniziativaDIV.innerHTML = `<p style="color: grey; font-size: 15px">Iniziativa</p><br><p>${ottieniSegno(iniziativa)}</p>`;

            caDIV.innerHTML = `<p style="color: grey; font-size: 15px">C. A</p><br><p>${classe_armatura}</p>`;

            resistenzeDIV.innerHTML = `<p style="color: grey; font-size: 18px">Resistenze</p><hr><br><p>${resistenze}</p>`;
            condizioniDIV.innerHTML = `<p style="color: grey; font-size: 18px">Condizioni</p><hr><br><p>${condizioni}</p>`;

            

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

const level_exp = [1, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
     120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000];

function ottieniSegno(elementoData) {
    if(elementoData > 0)
        return `+${elementoData}`
    else
        return `${elementoData}`
}

function dividiEquipaggiamento(elementoData) {
    var s_armature = `<p style="color: grey; font-size: 18px">Armature</p><br>`;
    var s_armi = `<p style="color: grey; font-size: 18px">Armi</p><br>`;
    var s_oggetti = `<p style="color: grey; font-size: 18px">Utensili</p><br>`;

    var armature_counter = 0;
    var armi_counter = 0;
    var oggetti_counter = 0;

    var armatura_checklast = 0;
    var arma_checklast = 0;
    var utensile_checklast = 0;

    for(var i = 0; i < elementoData.length; i++)
    {
        if (`${elementoData[i].tipo}` == "armatura")
            armature_counter++;
        if (`${elementoData[i].tipo}` == "arma")
            armi_counter++;
        if (`${elementoData[i].tipo}` == "utensile")
            oggetti_counter++;
    }

    for (var i = 0; i < elementoData.length; i++) {
        if (`${elementoData[i].tipo}` == "armatura") {
            armatura_checklast++;   
            s_armature += `${elementoData[i].nome}`;
            if(armatura_checklast != armature_counter)
                s_armature += `,&nbsp`;
        }
        if (`${elementoData[i].tipo}` == "arma") {
            arma_checklast++;
            s_armi += `${elementoData[i].nome}`;
            if(arma_checklast != armi_counter)
                s_armi += `,&nbsp`;
        }
        if (`${elementoData[i].tipo}` == "utensile") {
            utensile_checklast++;
            s_oggetti += `${elementoData[i].nome}`;
            if(utensile_checklast != oggetti_counter)
                s_oggetti += `,&nbsp`;
        }
    }

    //TODO fare check delle 4 che fa a capo se superata la soglia appuntoo delle 4  
    return `<p>${s_armature}</p><br><hr><br><br><p>${s_armi}</p><br><hr><br><br><p>${s_oggetti}</p><br>`
  }
 
function printAzioni(nav_list)
{
    nav_list.textContent = 'Azioni';
    nav_list.style.backgroundColor = 'lightblue';
}

function printInventario(nav_list)
{
    nav_list.textContent = 'Inventario';
    nav_list.style.backgroundColor = 'lightgreen';
}

function printCar_Tratti(nav_list)
{
    nav_list.textContent = 'Caratteristiche & Tratti';;
}
function printDescrizione(nav_list)
{
    playersRef.doc(playerId).get().then((doc) => {
        if (doc.exists) {
            const data = doc.data();

            const storia_pg = data.storia_pg;

            nav_list.innerHTML = `<br><p style="padding: 20px;">${storia_pg}</p><br>`;

        } else {
            datiDiv.innerHTML = "<p>Il documento non esiste.</p>";
        }
    }).catch((error) => {
        console.error("Errore nel recupero dei dati:", error);
        datiDiv.innerHTML = "<p>Si è verificato un errore nel recupero dei dati.</p>";
    });
}
function printNote(nav_list)
{
    nav_list.textContent = 'Note';
    nav_list.style.backgroundColor = 'blue';
}
function printExtra(nav_list)
{
    nav_list.textContent = 'Extra';
    nav_list.style.backgroundColor = 'orange';
}