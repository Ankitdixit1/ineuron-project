let select = document.querySelector(".slide-container");
select.style.flexWrap = "nowrap"


let clash = document.querySelectorAll(".clash-card");
clash.forEach(function(hold){hold.style.width = "240px"});

let clashs = document.querySelectorAll(".clash-card__image");
clashs.forEach(function(holds){holds.style.height = "180px"});

let font = document.querySelectorAll(".stat");
font.forEach(function(ls){ls.style.fontSize = "15px"});

let padd = document.querySelectorAll(".one-third");
padd.forEach(function(ls){
    ls.style.padding = "12px 8px"
    ls.style.color = "White"
});

document.querySelector(".clash-card__unit-stats--barbarian").style.backgroundColor = "#ec9b3b";
document.querySelector(".clash-card__unit-stats--archer").style.backgroundColor = "#ee5487";
document.querySelector(".clash-card__unit-stats--giant").style.backgroundColor = "#f6901a";
document.querySelector(".clash-card__unit-stats--goblin").style.backgroundColor = "#82bb30";
document.querySelector(".clash-card__unit-stats--wizard").style.backgroundColor = "#4facff";

let size = document.querySelectorAll(".clash-card__unit-description");
size.forEach(function(ls){
    ls.style.padding = "12px 8px"
    ls.style.fontSize = "12px"
});

let sele = document.querySelectorAll(".clash-card div:nth-child(3)");
sele.forEach(function(sos){sos.style.fontSize = "20px"})

document.querySelector(".archer div:nth-child(3)").innerHTML = "The Archer";
document.querySelector(".goblin div:nth-child(3)").innerHTML = "The Goblin";

document.querySelector(".clash-card__image--barbarian img").style.width = "320px";
document.querySelector(".clash-card__image--archer img").style.width = "320px";
document.querySelector(".clash-card__image--giant img").style.width = "280px";
document.querySelector(".clash-card__image--goblin img").style.width = "300px";
document.querySelector(".clash-card__image--wizard img").style.width = "280px";



// let x = document.querySelectorAll(".clash-card__image img");
// x.forEach((img)=>{
//     img.style.width = "250px"
// });

// let font = document.querySelectorAll(".stat, .one-third ");
// font.forEach(function(ls){
//     font[1].style.fontSize = "10px"
//     font[0].style.padding = "10px 10px"
// });

// function changeOpacity() {
//     var elems = document.querySelectorAll(".stat, .one-third");
//     // var index = 0, length = elems.length;
//     // for ( ; index < length; index++) {
//         elems[0].style.fontSize = "18px";
//         elems[1].style.padding = "15px 10px";
    
// }
// changeOpacity()


