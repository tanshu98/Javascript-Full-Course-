// Create an Object

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2; // We are storing the bmi as a propety in the object
        return this.BMI; // ALso we are returning the value
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

console.log(mark.calcBMI());
console.log(john.calcBMI());

// Note ,,we had to compare the values using if and else conditon statments..but again..no worries..:)
console.log(`${mark.firstName + ' ' + mark.lastName}'s BMI(${mark.calcBMI().toFixed(2)}) is higher then ${mark.firstName + ' ' + mark.lastName}'s BMII(${john.calcBMI().toFixed(2)})`);