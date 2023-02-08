let dold = document.querySelector("ul").children[2];
dold.innerHTML = "<a>projects</a>"

let element = document.createElement("li");
element.innerHTML = "<a>Hire Me</a>"
let cold = document.querySelector("ul")
cold.appendChild(element);