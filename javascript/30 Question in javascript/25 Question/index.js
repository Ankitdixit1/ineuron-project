let x = prompt('your weight in kg');
let y = prompt('your height in cm')
let bmi = Math.round(x/((y/100)*(y/100)));
console.log(bmi);
if (bmi<18.5){
    console.log('Underweight');
}else if (bmi=>18.5 && bmi<24.9){
    console.log('Normal weight');
}else if (bmi=>25 && bmi<29.9){
    console.log('overweight');
}else if (bmi=>30){
    
}