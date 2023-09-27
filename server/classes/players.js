class Player {
    constructor(_id, _player_name, _character_name, _class){
        this._id = _id;
        this._player_name = _player_name;
        this._character_name = _character_name;
        this._class = _class;
    }
    getId(){ return this._id };
    toAllString(){
        return (this._id + " - " + this._character_name + " - " + this._class);
    }
    toString(){
        return (this._character_name + " - " + this._class + " - " + this._player_name);
    }
}