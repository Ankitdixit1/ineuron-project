let x = prompt('give no ');
if (x>100){
    console.log('out of range');
} else if(x>=80 && x<=100){
    console.log('A grade');
}else if(x>=70) {
    console.log('B grade');
}else if(x>=60){
    console.log('C grade');
}else if(x>=50){
    console.log('D grade');
}else{
    console.log('fail');
}