// private_class.ts
import { Car } from "./basic_class";

class PrivateCar extends Car {
    constructor(make: string) {
        super(make);
    }

    showMake(): void {
        console.log("Marca: " + this.getMake());
    }
}

let myCar = new PrivateCar("Honda");
myCar.drive();
myCar.showMake();
