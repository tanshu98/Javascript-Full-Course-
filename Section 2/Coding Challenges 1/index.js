// BMI Challenge - 

const wtOfMark = 78;
const wtOfJohn = 92;
const heightOfMark = 1.69;
const heightOfJohn = 1.95;

const BMIOfMark = wtOfMark / heightOfMark ** 2;
const BMIOfJohn = wtOfJohn / heightOfJohn ** 2;

console.log(BMIOfMark, BMIOfJohn);

let markHeigherBMI;

if (BMIOfMark > BMIOfJohn) {
    markHeigherBMI = true;
    console.log(`Mark's BMI ${BMIOfMark} is higher then Joh's BMI ${BMIOfJohn}`);
} else {
    markHeigherBMI = false;
    console.log(`Joh's BMI ${BMIOfJohn} is higher then Mark's BMI ${BMIOfMark}`);
}

console.log(markHeigherBMI);
