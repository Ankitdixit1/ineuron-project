# **DOM Assignment 1**
---
## **Task 1** 
adding menu named **"Hire me"** and **projects**.
### **Final Output**
![Output Image](./task1Output.png)
```js
let dold = document.querySelector("ul").children[2];
dold.innerHTML = "<a>projects</a>"

let element = document.createElement("li");
element.innerHTML = "<a>Hire Me</a>"
let select = document.querySelector("ul")
select.appendChild(element);
```
## **Task 2**
search bar **palceholder name change**
### **Final Output**
![Output Image](./task2Output.png)
```js
let select = document.querySelector(".search-field input");
select.placeholder = "Search My project"
console.log(select);
```
