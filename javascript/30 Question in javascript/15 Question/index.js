let x = prompt('give no ');
if (x>100){
    document.getElementById('p').innerHTML = "out of range"
} else if(x>=80 && x<=100){
    document.getElementById('p').innerHTML = "A grade"
}else if(x>=70) {
    document.getElementById('p').innerHTML = "B grade"
}else if(x>=60){
    document.getElementById('p').innerHTML = "C grade"
}else if(x>=50){
    document.getElementById('p').innerHTML = "D grade"
}else{
    document.getElementById('p').innerHTML = "fail"
}