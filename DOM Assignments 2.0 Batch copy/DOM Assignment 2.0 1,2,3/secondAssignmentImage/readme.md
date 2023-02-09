# **DOM Assignment 2**
---
## **Task 1**
change in backgroundColor in h3 and p tag
### **Final Output**
![Output Image](./task1Output.png)
```js
let h3 = document.querySelectorAll(".accordian h3");
let p = document.querySelectorAll(".accordian p")
h3.forEach (function(hold){hold.style.backgroundColor = "#dadaf8"});
p.forEach (function(old){old.style.backgroundColor = "#eeeeff"});
```
## **Task 2**
creating new element and tag
### **Final Output**
![Output Image](./task2Output.png)
```js

let tag = `
<h3>Skills</h3>
<p>I posses a very good command over the full Stack 
Technologies like Mern which can be seen in my work over the Github.</p>
`;
let creat = document.createElement("div");
creat.className = "accordian";
creat.innerHTML = tag;
let select = document.querySelector(".accordian-wrapper");
select.appendChild(creat);


let h3 = document.querySelectorAll(".accordian h3");
let p = document.querySelectorAll(".accordian p")
h3.forEach (function(hold){hold.style.backgroundColor = "#dadaf8"});
p.forEach (function(old){old.style.backgroundColor = "#eeeeff"});
```