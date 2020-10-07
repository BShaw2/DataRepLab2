class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
        return;
    }
}

//let MyVehicle = new Vehicle("Audi", "V8", 2018);
//MyVehicle.Information();

class Cars extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }

    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}

let myCar = new Cars("Audi", "V8", "2017", "4");
myCar.Information();