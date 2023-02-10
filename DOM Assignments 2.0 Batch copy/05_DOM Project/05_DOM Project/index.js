let create = document.createElement("div");
create.innerHTML = "<a href=index.html class=btn>pro Subscription</a>"
let select = document.querySelector(".nav-center");
select.appendChild(create);
document.querySelector(".nav-center").style.justifyContent = "center";
document.querySelector(".nav-links").style.padding = "0 170px 0 170px";
let x = document.createElement("a");
x.href = "#";
x.innerHTML = "Chinese (7)"
document.querySelector(".tags-container div").appendChild(x);