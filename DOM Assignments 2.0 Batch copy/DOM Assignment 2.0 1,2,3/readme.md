# **DOM Assignment 1**
---
## **Task 1** 
adding menu named **"Hire me"** and **projects**.
### **Final Output**
![Output Image](./firstAssignmentImage/task1Output.png)
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
![Output Image](./firstAssignmentImage/task2Output.png)
```js
let select = document.querySelector(".search-field input");
select.placeholder = "Search My project"
console.log(select);
```
## **Task 3**
change in **span** text 
### **Final Output**
![Output Image](./firstAssignmentImage/task3Output.png)
```js
let select = document.querySelectorAll(".hero-left-section p span");
select[1].innerHTML = "an Employee"
select[2].innerHTML = "ineuron Intelligence pvt ltd"
```
## **Task 4**
change hero img 
### **Final Output**
![Output Image](./firstAssignmentImage/task4Output.png)
```js
let select = document.querySelector(".hero-right-section img");
select.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"
```
## **Task 5**
adding button 
### **Final Output**
![Output Image](./firstAssignmentImage/task5Output.png)
```js
let create = document.createElement("button");
create.innerHTML = "Support Me"
let select = document.querySelector(".hero-right-section-btns");
select.appendChild(create)
```

# **DOM Assignment 2**
---
## **Task 1**
change in backgroundColor in h3 and p tag
### **Final Output**
![Output Image](./secondAssignmentImage/task1Output.png)
```js
let h3 = document.querySelectorAll(".accordian h3");
let p = document.querySelectorAll(".accordian p")
h3.forEach (function(hold){hold.style.backgroundColor = "#dadaf8"});
p.forEach (function(old){old.style.backgroundColor = "#eeeeff"});
```
## **Task 2**
creating new element and tag
### **Final Output**
![Output Image](./secondAssignmentImage/task2Output.png)
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
# **DOM Assignment 3**
---
## **Task 1**
change in input placeholder name
### **Final Output**
![Output Image](./thirdAssignmentImage/task1Output.png)
```js
let name = document.querySelector(".enterName");
name.placeholder = "FSJS 2.0"
let mail = document.querySelector(".enterMail");
mail.placeholder = "fsjs@ineuron.ai"
let message = document.querySelector(".enterMessage");
message.placeholder = "Hello World"

let named = document.querySelector(".userName");
named.placeholder = "FSJS 2.0"
let mails = document.querySelector(".userEmail");
mails.placeholder = "fsjs@ineuron.ai"
let messages = document.querySelector(".enterMessage");
messages.placeholder = "Hello World"
```