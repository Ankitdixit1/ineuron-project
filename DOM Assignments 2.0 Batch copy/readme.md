# **DOM Assignment 1**
---
## **Task 1** 
adding menu named **"Hire me"** and **projects**.
### **Final Output**
![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task1Output.png)
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
![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task2Output.png)
```js
let select = document.querySelector(".search-field input");
select.placeholder = "Search My project"
console.log(select);
```
## **Task 3**
change in **span** text 
### **Final Output**
![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task3Output.png)
```js
let select = document.querySelectorAll(".hero-left-section p span");
select[1].innerHTML = "an Employee"
select[2].innerHTML = "ineuron Intelligence pvt ltd"
```
## **Task 4**
change hero img 
### **Final Output**
![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task4Output.png)
```js
let select = document.querySelector(".hero-right-section img");
select.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"
```
## **Task 5**
adding button 
### **Final Output**
![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task5Output.png)
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
![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task1Output.png)
```js
let h3 = document.querySelectorAll(".accordian h3");
let p = document.querySelectorAll(".accordian p")
h3.forEach (function(hold){hold.style.backgroundColor = "#dadaf8"});
p.forEach (function(old){old.style.backgroundColor = "#eeeeff"});
```
## **Task 2**
creating new element and tag
### **Final Output**
![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task2Output.png)
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
![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3/thirdAssignmentImage/task1Output.png)
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
# **DOM Assignment 4**
---
## **Task 1**
change in css according to need 
### **Final Output**
![Output Image](./04_DOM%20Project/04_DOM%20Project/Output/DOM%20P1%20SS.png)

```js
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
```
# **DOM Assignment 5**
---
## **Task 1**
adding btn called pro subscription adding chinese 7 and 6th card 
### **Final Output**
![Output Image](./05_DOM%20Project/05_DOM%20Project/Output/DOM%20P2%20SS.png)
```js
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
let s = document.createElement("div");
s.className = "card card7";
document.querySelector(".recipe-gallery").appendChild(s);
let sd = document.createElement("a");
sd.className = "recipe-text";
sd.href = "#";
sd.innerHTML = "<h5 class=recipe-name>add 6th card here</h5>"
document.querySelector(".card7").appendChild(sd);
```
# **DOM Assignment 6**
---
## **Task 1**
change in logo
### **Final Output**
![Output Image](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-1.png)
```js
document.querySelector("header img").src = "./assets/ineuron-logo.png";
```
## **Task 2**
change in month amount 4 dollar to 10 dollar
### **Final Output**
![Output Image](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-2.png)
```js
document.querySelector(".app_price span").innerHTML = "$10"
```
# **DOM Assignment 7**
---
## **Task 1**
change in a i remove all extra a 
### **Final Output**
![Output Image](./DOM%20P7/DOM%20P7/ass7.1-after.png)

```js
const list = document.querySelector(".main__languages");
  list.removeChild(list.children[3]);
  list.removeChild(list.children[4]);
  list.removeChild(list.children[5]);
  list.removeChild(list.children[6]);
  list.removeChild(list.children[7]);
  ```

## **Task 2**
adding h3 according to output as in picture and to make final using css 
### **Final Output**
![Output Image](./DOM%20P7/DOM%20P7/ass7.2-after.png)
```js
let selects =  document.querySelector(".main__form-input");
selects.placeholder = "iNeuron"

let create = document.createElement("h3");
create.innerHTML = "After writing the text submit the form";
create.style.padding = "5px 10px"
create.style.background = "red"
create.style.marginLeft = "40px"
create.style.fontSize = "21px"
create.style.color = "white"
create.style.position = "absolute"
create.style.bottom = "-50px"

let select =  document.querySelector(".main__form");
select.appendChild(create)
select.style.position = "relative"
```