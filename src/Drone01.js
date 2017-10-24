class Drone {
    constructor(id, name){
        this._id = id;
        this._name = name;
    }
    static getCompany() {
        console.log(`in getCompany and ${this.id} `);
    }
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    set id(val){
        this._id = val;
    }
    fly(){
        console.log(`Drone ${this._id} is flying`);
    }
    printDrone(){
        console.log(`id:${this._id}, name:${this._name} `);
    }
    printId(){
        console.log(`id:${this._id}`)
    }
}
