"use strict"

class Usersecond {
    constructor () {

    }
    #test = "hohoho"
    set name (name) {
        console.log("Privare - " + this.#test);
        this._name = name.trim().toLowerCase();
    }

    get name() {
        return this._name;
    }

    static getId() {
        return true;
    }
}