class ReadJson {
    constructor(filePath) {
        this.filePath = filePath;
        this.jsonData = null;
    }

    async readData() {
        try {
            const response = await fetch(this.filePath);
            if (!response.ok) {
                throw new Error('Errore nel caricamento del file JSON');
            }
            this.jsonData = await response.json();
        } catch (error) {
            console.error(error);
        }
    }
    /* METODI PER I MOSTRI */
    getMonsterTypes() {
        return this.jsonData?.monster_type || [];
    }
    getMonsterSubType(){
        return this.jsonData?.monster_subtype || [];
    }
    
    /* METODI GENERALI */
    getSize(){
        return this.jsonData?.size || [];
    }
    getSwarnType(){
        return this.jsonData?.swarn_monster_type || [];

    }
}

/*
!ESEMPIO UTILIZZO
?creazione oggetto
const jsonReader = new ReadJson('constants.json');

? Legge i dati dal file JSON
jsonReader.readData().then(() => {
    const monsterTypes = jsonReader.getMonsterTypes();
    console.log('Monster Types:', monsterTypes);
});
*/