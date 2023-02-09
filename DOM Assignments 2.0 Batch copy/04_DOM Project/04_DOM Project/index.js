let select = document.querySelector(".slide-container");
select.style.flexWrap = "nowrap"
select.style.gap = "30px"
let clash = document.querySelectorAll(".clash-card");
clash.forEach(function(hold){hold.style.width = "255px"});
let clashs = document.querySelectorAll(".clash-card__image");
clashs.forEach(function(holds){holds.style.height = "150px"});
// let x = document.querySelectorAll(".clash-card__image img");
// x.forEach((img)=>{img.style.width = "250px"});