
//Modules, defining classes and creating instances
// Drone class in Drone.js

/*/
let drone = new Drone('A123', 'flyer1');
drone.id = 'B456';
let drone2 = new Drone('B456', 'flyer2');
console.log(drone._id);
//*/

//Inheritance
//Extending a class
//Inheritinc Constructors
//Inheriting Properties
//Inheriting Methods
//Organizing Classes


import { Car } from './classes/car.js';
import { Drone } from './classes/drone.js';
import{ fleet } from './fleet-data.js';
import{ FleetDataService } from './services/fleet-data-service.js'

let dataService = new FleetDataService();
dataService.loadData(fleet);

//let car = dataService.getCarByLicense('AT9900');
//let cars = dataService.getCarsSortedByLicense();
let cars = dataService.filerCarsByMake('e');
for(let car of cars){
    console.log(car.make);
}



