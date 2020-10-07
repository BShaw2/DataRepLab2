class BMI {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    CalculateBMI() {

        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }

}

let MyBmi = new BMI(1.8, 62);
let calculatedBMI = MyBmi.CalculateBMI();
console.log(calculatedBMI);