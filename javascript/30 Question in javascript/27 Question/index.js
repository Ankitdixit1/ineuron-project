// 1st methord for print prime no but only upto 100 not more than we can print with this method 

// for(let i=2; i<100;i++){
//     if(i==2){
//         console.log(i);
//     }else if(i==3){
//         console.log(i);
//     }else if(i==5){
//         console.log(i);
//     }
//     else if(i%2!==0 && i%3!==0 && i%5!==0){
//         console.log(i);
//     }
// }

// by this methord we can print upto that no what you want
let count=0
for (let i = 2; i <= 200 ; i++){
    for(let j=1;j<=i;j++){
        if(i%j==0){
            count++
        }
    }
    if(count==2){
        console.log(i);
    }
    count=0
}


