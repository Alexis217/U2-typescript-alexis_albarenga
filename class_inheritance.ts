import { Car } from "./basic_class";
class ElectricCar extends Car {
    batteryLife: number;

    constructor(make: string, batteryLife: number) {
        super(make);
        this.batteryLife = batteryLife;
    }

    charge(): void {
        console.log("Charging the " + this.make + "...");
    }
}

let myTesla = new ElectricCar("Tesla", 85);
myTesla.drive();
console.log("Battery life: " + myTesla.batteryLife + "%");
myTesla.charge();
