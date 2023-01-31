let x = prompt("Month");

let bd = [
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
];
function bold(sd,vd){
    for(let i=0; i<=2,i<=6,i<=9,i<=12;i++){
        let name = vd[i];
        if(i<=2 && name==sd){
            document.getElementById('h1').innerHTML = "Autmn"
        }else if(i<=5 && name==sd){
            document.getElementById('h1').innerHTML = "Winter"
        }else if(i<=8 && name==sd){
            document.getElementById('h1').innerHTML = "Spring"
        }else if(i<=11 && name==sd){
            document.getElementById('h1').innerHTML = "Summer"
        }
    }
}
bold(x,bd);

// let a = ['September', 'October', 'November'];
// let b = ['December', 'January', 'February'];
// let c = ['March', 'April', 'May'];
// let d = ['June', 'July', 'August',];

// function check(s,arr,ss,cc,dd){
//     for(let i = 0; i<arr.length,ss.length; i++){
//         let name =arr[i];
//         if(name==x){
//             document.getElementById('h1').innerHTML = "Autmn"
//             break;
//         }
//     }
// }
// check(x,a);
// check(x,b);
