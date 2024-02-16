let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let box = document.querySelector(".box");

let degree = 0;
let bool = true;

prev.addEventListener("click", function () {
  if (bool) {
    degree += 90;
    box.style = `transform: perspective(1000px) rotateY(${degree}deg)`;
    bool = false;
    setTimeout(() => {
      bool = true;
    }, 1500);
  }
});

next.addEventListener("click", function () {
  if (bool) {
    degree -= 90;
    box.style = `transform: perspective(1000px) rotateY(${degree}deg)`;
    bool = false;
    setTimeout(() => {
      bool = true;
    }, 1500);
  }
});

