export class Car {
    protected make: string;

    constructor(make: string) {
        this.make = make;
    }

    drive(): void {
        console.log("Driving a " + this.make);
    }

    getMake(): string {
        return this.make;
    }
}
