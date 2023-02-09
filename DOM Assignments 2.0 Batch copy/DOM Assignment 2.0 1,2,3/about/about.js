let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

// let h3 = document.querySelectorAll(".accordian h3");
// let p = document.querySelectorAll(".accordian p")
// h3.forEach (function(hold){hold.style.backgroundColor = "#dadaf8"});
// p.forEach (function(old){old.style.backgroundColor = "#eeeeff"});
