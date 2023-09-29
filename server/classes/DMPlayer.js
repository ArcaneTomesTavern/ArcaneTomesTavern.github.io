class DMPlayer {
    constructor(
        _id,
        _player_name,
        _character_name,
        _class,
        _curr_life,
        _max_life,
        _cd,
        _initiative
    ) {
        this._id = _id;
        this._player_name = _player_name;
        this._character_name = _character_name;
        this._class = _class;
        this._curr_life = _curr_life;
        this._max_life = _max_life;
        this._cd = _cd;
        this._initiative = _initiative;
    }
    //** GETTERS **//
    getID() {
        return this._id;
    }
    getPlayerName() {
        return this._player_name;
    }
    getCharacterName() {
        return this._character_name;
    }
    getClass() {
        return this._class;
    }
    getCurrLife() {
        return this._curr_life;
    }
    getMaxLife() {
        return this._max_life;
    }
    getCD() {
        return this._cd;
    }
    getInitiative() {
        return this._initiative;
    }
    //** SETTERS **/
    setCurrLife(life) {
        this._curr_life = life;
    }
    setMaxLife(life) {
        this._max_life = life;
    }
    //*** STRINGHE ***//
    toString() {}
    getLifeString() {
        return this._curr_life + "/" + this._max_life;
    }
}
