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
## **Task 3**
change in **span** text 
### **Final Output**
![Output Image](./task3Output.png)
```js
let select = document.querySelectorAll(".hero-left-section p span");
select[1].innerHTML = "an Employee"
select[2].innerHTML = "ineuron Intelligence pvt ltd"
```
## **Task 4**
change hero img 
### **Final Output**
![Output Image](./task4Output.png)
```js
let select = document.querySelector(".hero-right-section img");
select.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"
```
## **Task 5**
adding button 
### **Final Output**
![Output Image](./task5Output.png)
```js
let create = document.createElement("button");
create.innerHTML = "Support Me"
let select = document.querySelector(".hero-right-section-btns");
select.appendChild(create)
```