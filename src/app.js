import $ from 'jquery';
import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import{fleet} from './fleet-data.js';
import{FleetDataService} from './services/fleet-data-service.js'
import {Button} from './ui/button.js';
import{Image} from './ui/image.js';
import{TitleBar} from './ui/title-bar.js';
import{DataTable} from './ui/data-table.js';
// let tb = new TitleBar('Shorty Get Down');
// tb.addLink('Home', '');
// tb.addLink('Cars', '');
// tb.addLink('Drones', '');
// tb.addLink('Map', '');
// tb.appendToElement($('body'));

let headers = "License Make Model Miles".split(' ');
let dataService = new FleetDataService();
dataService.loadData(fleet);
let dt = new DataTable(headers, dataService.cars);
dt.appendToElement($('body'));
console.log(fleet);

/*
let i = new Image('images/drone.jpg');
i.appendToElement($('body'));

let b = new Button('Click Me');
b.appendToElement($('body'));

*/

