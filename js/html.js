function html (){
    htmlHeader();
    html1Body();
    html1left()
}

let togri = 0;
async function html1Body() {
  const javob = await body();
  rightEl.innerHTML = `<div class="statistik">Question ${son} of 10</div>
        <div class='men' ><span class="medium"></span>   <span class="bold medium">${javob.html.question.first}</span></div>
        <span class="statistik"></span>`;
}
let arr = [];
let massive = [];
async function html1left() {
  const javob = await answear();
  leftEL.innerHTML = `<div class="javoblar qoshimcha">
    <div class="box">A</div>
    <h4 class="h4">${javob.birinchi.quiz[0]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">B</div>
    <h4  class="h4">${javob.birinchi.quiz[1]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">C</div>
    <h4  class="h4">${javob.birinchi.quiz[2]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">D</div>
    <h4  class="h4">${javob.birinchi.quiz[3]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="btn-submit">Submit Answer</div>`;
  arr = javob.birinchi.quiz;
  let h4 = document.querySelectorAll(".h4");
  h4.forEach((h) => {
    const btnEl = document.querySelector(".btn-submit");
    btnEl.textContent = "Choose";
    h.addEventListener("click", () => {
      btnEl.textContent = "submit";
      btnEl.addEventListener("click", () => {
        if (h.textContent == javob.birinchi.quiz[javob.birinchi.true]) {
          togri++;
          arr = [];
          h.parentElement.classList.add("correct");
          h.previousElementSibling.classList.add("box-correct");
          h.nextElementSibling.classList.remove("hid");
          btnEl.textContent = "Next Question";
          btnEl.addEventListener("click", () => {
            son++;
            if (son < 10) {
              html2Body();
              html2left();
            }
          });
        } else {
          h.parentElement.classList.add("eror");
          h.previousElementSibling.classList.add("box-eror");
          h4.forEach((e) => {
            if (e.textContent == javob.birinchi.quiz[javob.birinchi.true]) {
              e.nextElementSibling.classList.remove("hid");
            }
          });
          h.nextElementSibling.nextElementSibling.classList.remove("hid");
          btnEl.textContent = "Next Question";
          btnEl.addEventListener("click", () => {
            son++;
            if (son < 10) {
              html2Body();
              html2left();
            }
          });
        }
      });
    });
  });
}
//html question 2
async function html2left() {
  const javob = await answear();
  leftEL.innerHTML = `<div class="javoblar qoshimcha">
    <div class="box">A</div>
    <h4 class="h4">${javob.ikkinchi.quiz[0]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">B</div>
    <h4  class="h4">${javob.ikkinchi.quiz[1]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">C</div>
    <h4  class="h4">${javob.ikkinchi.quiz[2]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">D</div>
    <h4  class="h4">${javob.ikkinchi.quiz[3]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="btn-submit">Submit Answer</div>`;
  arr = javob.ikkinchi.quiz;
  let h4 = document.querySelectorAll(".h4");
  h4.forEach((h) => {
    const btnEl = document.querySelector(".btn-submit");
    btnEl.textContent = "Choose";
    h.addEventListener("click", () => {
      btnEl.textContent = "submit";
      btnEl.addEventListener("click", () => {
        if (h.textContent == javob.ikkinchi.quiz[javob.ikkinchi.true]) {
          togri++;

          h.parentElement.classList.add("correct");
          h.previousElementSibling.classList.add("box-correct");
          h.nextElementSibling.classList.remove("hid");
          btnEl.textContent = "Next Question";
          btnEl.addEventListener("click", () => {
            son++;
            if (son < 10) {
              html3Body();
              html3left();
            }
          });
        } else {
          h.parentElement.classList.add("eror");
          h.previousElementSibling.classList.add("box-eror");
          h4.forEach((e) => {
            if (e.textContent == javob.ikkinchi.quiz[javob.ikkinchi.true]) {
              e.nextElementSibling.classList.remove("hid");
            }
          });
          h.nextElementSibling.nextElementSibling.classList.remove("hid");
          btnEl.textContent = "Next Question";
          btnEl.addEventListener("click", () => {
            son++;
            if (son < 10) {
              html3Body();
              html3left();
            }
          });
        }
      });
    });
  });
}
//html question 3
async function html3left() {
  const javob = await answear();
  leftEL.innerHTML = `<div class="javoblar qoshimcha">
    <div class="box">A</div>
    <h4 class="h4">${javob.uchinchi.quiz[0]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">B</div>
    <h4  class="h4">${javob.uchinchi.quiz[1]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">C</div>
    <h4  class="h4">${javob.uchinchi.quiz[2]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">D</div>
    <h4  class="h4">${javob.uchinchi.quiz[3]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="btn-submit">Submit Answer</div>`;
  arr = javob.uchinchi.quiz;
  let h4 = document.querySelectorAll(".h4");
  h4.forEach((h) => {
    const btnEl = document.querySelector(".btn-submit");
    btnEl.textContent = "Choose";
    h.addEventListener("click", () => {
      btnEl.textContent = "submit";
      btnEl.addEventListener("click", () => {
        if (h.textContent == javob.uchinchi.quiz[javob.uchinchi.true]) {
          togri++;

          h.parentElement.classList.add("correct");
          h.previousElementSibling.classList.add("box-correct");
          h.nextElementSibling.classList.remove("hid");
          btnEl.textContent = "Next Question";
          btnEl.addEventListener("click", () => {
            son++;
            if (son < 10) {
              html4Body();
              html4left();
            }
          });
        } else {
          h.parentElement.classList.add("eror");
          h.previousElementSibling.classList.add("box-eror");
          h4.forEach((e) => {
            if (e.textContent == javob.uchinchi.quiz[javob.uchinchi.true]) {
              e.nextElementSibling.classList.remove("hid");
            }
          });
          h.nextElementSibling.nextElementSibling.classList.remove("hid");
          btnEl.textContent = "Next Question";
          btnEl.addEventListener("click", () => {
            son++;
            if (son < 10) {
              html4Body();
              html4left();
            }
          });
        }
      });
    });
  });
}
//html question 4
async function html4left() {
  const javob = await answear();
  leftEL.innerHTML = `<div class="javoblar qoshimcha">
    <div class="box">A</div>
    <h4 class="h4">${javob.tortinchi.quiz[0]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">B</div>
    <h4  class="h4">${javob.tortinchi.quiz[1]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">C</div>
    <h4  class="h4">${javob.tortinchi.quiz[2]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">D</div>
    <h4  class="h4">${javob.tortinchi.quiz[3]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="btn-submit">Submit Answer</div>`;
  arr = javob.tortinchi.quiz;
  let h4 = document.querySelectorAll(".h4");
  h4.forEach((h) => {
    const btnEl = document.querySelector(".btn-submit");
    btnEl.textContent = "Choose";
    h.addEventListener("click", () => {
      btnEl.textContent = "submit";
      btnEl.addEventListener("click", () => {
        if (h.textContent == javob.tortinchi.quiz[javob.tortinchi.true]) {
          togri++;

          h.parentElement.classList.add("correct");
          h.previousElementSibling.classList.add("box-correct");
          h.nextElementSibling.classList.remove("hid");
          btnEl.textContent = "Next Question";
          btnEl.addEventListener("click", () => {
            son++;
            if (son < 10) {
              html5Body();
              html5left();
            }
          });
        } else {
          h.parentElement.classList.add("eror");
          h.previousElementSibling.classList.add("box-eror");
          h4.forEach((e) => {
            if (e.textContent == javob.tortinchi.quiz[javob.tortinchi.true]) {
              e.nextElementSibling.classList.remove("hid");
            }
          });
          h.nextElementSibling.nextElementSibling.classList.remove("hid");
          btnEl.textContent = "Next Question";
          btnEl.addEventListener("click", () => {
            son++;
            if (son < 10) {
              html5Body();
              html5left();
            }
          });
        }
      });
    });
  });
}
//html question 5
async function html5left() {
  const javob = await answear();
  leftEL.innerHTML = `<div class="javoblar qoshimcha">
    <div class="box">A</div>
    <h4 class="h4">${javob.beshinchi.quiz[0]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">B</div>
    <h4  class="h4">${javob.beshinchi.quiz[1]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">C</div>
    <h4  class="h4">${javob.beshinchi.quiz[2]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">D</div>
    <h4  class="h4">${javob.beshinchi.quiz[3]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="btn-submit">Submit Answer</div>`;
  arr = javob.beshinchi.quiz;
  let h4 = document.querySelectorAll(".h4");
  h4.forEach((h) => {
    const btnEl = document.querySelector(".btn-submit");
    btnEl.textContent = "Choose";
    h.addEventListener("click", () => {
      btnEl.textContent = "submit";
      btnEl.addEventListener("click", () => {
        if (h.textContent == javob.beshinchi.quiz[javob.beshinchi.true]) {
          togri++;

          h.parentElement.classList.add("correct");
          h.previousElementSibling.classList.add("box-correct");
          h.nextElementSibling.classList.remove("hid");
          btnEl.textContent = "Next Question";
          btnEl.addEventListener("click", () => {
            son++;
            if (son < 10) {
              html6Body();
              html6left();
            }
          });
        } else {
          h.parentElement.classList.add("eror");
          h.previousElementSibling.classList.add("box-eror");
          h4.forEach((e) => {
            if (e.textContent == javob.beshinchi.quiz[javob.beshinchi.true]) {
              e.nextElementSibling.classList.remove("hid");
            }
          });
          h.nextElementSibling.nextElementSibling.classList.remove("hid");
          btnEl.textContent = "Next Question";
          btnEl.addEventListener("click", () => {
            son++;
            if (son < 10) {
              html6Body();
              html6left();
            }
          });
        }
      });
    });
  });
}
//html question 6
async function html6left() {
  const javob = await answear();
  leftEL.innerHTML = `<div class="javoblar qoshimcha">
    <div class="box">A</div>
    <h4 class="h4">${javob.oltinchi.quiz[0]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">B</div>
    <h4  class="h4">${javob.oltinchi.quiz[1]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">C</div>
    <h4  class="h4">${javob.oltinchi.quiz[2]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">D</div>
    <h4  class="h4">${javob.oltinchi.quiz[3]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="btn-submit">Submit Answer</div>`;
  arr = javob.oltinchi.quiz;
  let h4 = document.querySelectorAll(".h4");
  h4.forEach((h) => {
    const btnEl = document.querySelector(".btn-submit");
    btnEl.textContent = "Choose";
    h.addEventListener("click", () => {
      btnEl.textContent = "submit";
      btnEl.addEventListener("click", () => {
        if (h.textContent == javob.oltinchi.quiz[javob.oltinchi.true]) {
          togri++;

          h.parentElement.classList.add("correct");
          h.previousElementSibling.classList.add("box-correct");
          h.nextElementSibling.classList.remove("hid");
          btnEl.textContent = "Next Question";
          btnEl.addEventListener("click", () => {
            son++;
            if (son < 10) {
              html7Body();
              html7left();
            }
          });
        } else {
          h.parentElement.classList.add("eror");
          h.previousElementSibling.classList.add("box-eror");
          h4.forEach((e) => {
            if (e.textContent == javob.oltinchi.quiz[javob.oltinchi.true]) {
              e.nextElementSibling.classList.remove("hid");
            }
          });
          h.nextElementSibling.nextElementSibling.classList.remove("hid");
          btnEl.textContent = "Next Question";
          btnEl.addEventListener("click", () => {
            son++;
            if (son < 10) {
              html7Body();
              html7left();
            }
          });
        }
      });
    });
  });
}
//html question 7
async function html7left() {
  const javob = await answear();
  leftEL.innerHTML = `<div class="javoblar qoshimcha">
    <div class="box">A</div>
    <h4 class="h4">${javob.yettinchi.quiz[0]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">B</div>
    <h4  class="h4">${javob.yettinchi.quiz[1]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">C</div>
    <h4  class="h4">${javob.yettinchi.quiz[2]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">D</div>
    <h4  class="h4">${javob.yettinchi.quiz[3]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="btn-submit">Submit Answer</div>`;
  arr = javob.yettinchi.quiz;
  let h4 = document.querySelectorAll(".h4");
  h4.forEach((h) => {
    const btnEl = document.querySelector(".btn-submit");
    btnEl.textContent = "Choose";
    h.addEventListener("click", () => {
      btnEl.textContent = "submit";
      btnEl.addEventListener("click", () => {
        if (h.textContent == javob.yettinchi.quiz[javob.yettinchi.true]) {
          togri++;

          h.parentElement.classList.add("correct");
          h.previousElementSibling.classList.add("box-correct");
          h.nextElementSibling.classList.remove("hid");
          btnEl.textContent = "Next Question";
          btnEl.addEventListener("click", () => {
            son++;
            if (son < 10) {
              html8Body();
              html8left();
            }
          });
        } else {
          h.parentElement.classList.add("eror");
          h.previousElementSibling.classList.add("box-eror");
          h4.forEach((e) => {
            if (e.textContent == javob.yettinchi.quiz[javob.yettinchi.true]) {
              e.nextElementSibling.classList.remove("hid");
            }
          });
          h.nextElementSibling.nextElementSibling.classList.remove("hid");
          btnEl.textContent = "Next Question";
          btnEl.addEventListener("click", () => {
            son++;
            if (son < 10) {
              html8Body();
              html8left();
            }
          });
        }
      });
    });
  });
}
//html question 8
async function html8left() {
  const javob = await answear();
  leftEL.innerHTML = `<div class="javoblar qoshimcha">
    <div class="box">A</div>
    <h4 class="h4">${javob.sakkizinchi.quiz[0]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">B</div>
    <h4  class="h4">${javob.sakkizinchi.quiz[1]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">C</div>
    <h4  class="h4">${javob.sakkizinchi.quiz[2]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">D</div>
    <h4  class="h4">${javob.sakkizinchi.quiz[3]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="btn-submit">Submit Answer</div>`;
  arr = javob.sakkizinchi.quiz;
  let h4 = document.querySelectorAll(".h4");
  h4.forEach((h) => {
    const btnEl = document.querySelector(".btn-submit");
    btnEl.textContent = "Choose";
    h.addEventListener("click", () => {
      btnEl.textContent = "submit";
      btnEl.addEventListener("click", () => {
        if (h.textContent == javob.sakkizinchi.quiz[javob.sakkizinchi.true]) {
          togri++;

          h.parentElement.classList.add("correct");
          h.previousElementSibling.classList.add("box-correct");
          h.nextElementSibling.classList.remove("hid");
          btnEl.textContent = "Next Question";
          btnEl.addEventListener("click", () => {
            son++;
            if (son < 10) {
              html9Body();
              html9left();
            }
          });
        } else {
          h.parentElement.classList.add("eror");
          h.previousElementSibling.classList.add("box-eror");
          h4.forEach((e) => {
            if (
              e.textContent == javob.sakkizinchi.quiz[javob.sakkizinchi.true]
            ) {
              e.nextElementSibling.classList.remove("hid");
            }
          });
          h.nextElementSibling.nextElementSibling.classList.remove("hid");
          btnEl.textContent = "Next Question";
          btnEl.addEventListener("click", () => {
            son++;
            if (son < 10) {
              html9Body();
              html9left();
            }
          });
        }
      });
    });
  });
}
//html question 9
async function html9left() {
  const javob = await answear();
  leftEL.innerHTML = `<div class="javoblar qoshimcha">
    <div class="box">A</div>
    <h4 class="h4">${javob.toqqizinchi.quiz[0]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">B</div>
    <h4  class="h4">${javob.toqqizinchi.quiz[1]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">C</div>
    <h4  class="h4">${javob.toqqizinchi.quiz[2]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">D</div>
    <h4  class="h4">${javob.toqqizinchi.quiz[3]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="btn-submit">Submit Answer</div>`;
  arr = javob.toqqizinchi.quiz;
  let h4 = document.querySelectorAll(".h4");
  h4.forEach((h) => {
    const btnEl = document.querySelector(".btn-submit");
    btnEl.textContent = "Choose";
    h.addEventListener("click", () => {
      btnEl.textContent = "submit";
      btnEl.addEventListener("click", () => {
        if (h.textContent == javob.toqqizinchi.quiz[javob.toqqizinchi.true]) {
          togri++;

          h.parentElement.classList.add("correct");
          h.previousElementSibling.classList.add("box-correct");
          h.nextElementSibling.classList.remove("hid");
          btnEl.textContent = "Next Question";
          btnEl.addEventListener("click", () => {
            son++;
            if (son < 12) {
              html10Body();
              html10left();
            }
          });
        } else {
          h.parentElement.classList.add("eror");
          h.previousElementSibling.classList.add("box-eror");
          h4.forEach((e) => {
            if (
              e.textContent == javob.toqqizinchi.quiz[javob.toqqizinchi.true]
            ) {
              e.nextElementSibling.classList.remove("hid");
            }
          });
          h.nextElementSibling.nextElementSibling.classList.remove("hid");
          btnEl.textContent = "Next Question";
          btnEl.addEventListener("click", () => {
            son++;
            if (son < 12) {
              html10Body();
              html10left();
            }
          });
        }
      });
    });
  });
}
//html question 10
async function html10left() {
  const javob = await answear();
  leftEL.innerHTML = `<div class="javoblar qoshimcha">
    <div class="box">A</div>
    <h4 class="h4">${javob.oninchi.quiz[0]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">B</div>
    <h4  class="h4">${javob.oninchi.quiz[1]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">C</div>
    <h4  class="h4">${javob.oninchi.quiz[2]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="javoblar qoshimcha">
    <div class="box">D</div>
    <h4  class="h4">${javob.oninchi.quiz[3]}</h4>
    <img class="cor hid" src="./images/cor.svg" alt="">
    <img class="cor hid" src="./images/er.png" alt=""></div>
  </div>
  <div class="btn-submit">Submit Answer</div>`;
  arr = javob.oninchi.quiz;
  let h4 = document.querySelectorAll(".h4");
  h4.forEach((h) => {
    const btnEl = document.querySelector(".btn-submit");
    btnEl.textContent = "Choose";
    h.addEventListener("click", () => {
      btnEl.textContent = "submit";
      btnEl.addEventListener("click", () => {
        if (h.textContent == javob.oninchi.quiz[javob.oninchi.true]) {
          togri++;

          h.parentElement.classList.add("correct");
          h.previousElementSibling.classList.add("box-correct");
          h.nextElementSibling.classList.remove("hid");
          btnEl.textContent = "Done";
          btnEl.addEventListener("click", () => {
            son++;
            if (son < 13) {
              doneHtml();
            }
          });
        } else {
          h.parentElement.classList.add("eror");
          h.previousElementSibling.classList.add("box-eror");
          h4.forEach((e) => {
            if (e.textContent == javob.oninchi.quiz[javob.oninchi.true]) {
              e.nextElementSibling.classList.remove("hid");
            }
          });
          h.nextElementSibling.nextElementSibling.classList.remove("hid");
          btnEl.textContent = "Next Question";
          btnEl.addEventListener("click", () => {
            son++;
            if (son < 13) {
              doneHtml();
            }
          });
        }
      });
    });
  });
}
//done question
async function doneHtml() {
  console.log("salom");
  const javobHeader = await header();
  rightEl.innerHTML = ` <span class="medium">Quiz completed</span>
  <span class="medium bold">You scored...</span>`;
  leftEL.innerHTML = `<div class="done">
  <div class="title"><img src="${javobHeader.html.img}" alt="" /><img src="${
    javobHeader.html.word
  }" alt="" /></div>
  <div class="result">
    <span class="big">${togri / 2}</span><span class="dan">out of 10</span>
  </div>
</div>
<div class="btn-submit yana">Play Again</div>`;
  const btn = document.querySelector(".btn-submit");
  btn.addEventListener("click", () => {
    son = son - 10;
    html1Body();
    html1left();
  });
}

async function html2Body() {
  const javob = await body();
  rightEl.innerHTML = `<div class="statistik">Question ${son} of 10</div>
        <div class='men' ><span class="medium"></span>   <span class="bold medium">${javob.html.question.second}</span></div>
        <span class="statistik"></span>`;
}
async function html3Body() {
  const javob = await body();
  rightEl.innerHTML = `<div class="statistik">Question ${son} of 10</div>
          <div class='men' ><span class="medium"></span>   <span class="bold medium">${javob.html.question.thrid}</span></div>
          <span class="statistik"></span>`;
}
async function html4Body() {
  const javob = await body();
  rightEl.innerHTML = `<div class="statistik">Question ${son} of 10</div>
          <div class='men' ><span class="medium"></span>   <span class="bold medium">${javob.html.question.four}</span></div>
          <span class="statistik"></span>`;
}
async function html5Body() {
  const javob = await body();
  rightEl.innerHTML = `<div class="statistik">Question ${son} of 10</div>
          <div class='men' ><span class="medium"></span>   <span class="bold medium">${javob.html.question.five}</span></div>
          <span class="statistik"></span>`;
}
async function html6Body() {
  const javob = await body();
  rightEl.innerHTML = `<div class="statistik">Question ${son} of 10</div>
          <div class='men' ><span class="medium"></span>   <span class="bold medium">${javob.html.question.six}</span></div>
          <span class="statistik"></span>`;
}
async function html7Body() {
  const javob = await body();
  rightEl.innerHTML = `<div class="statistik">Question ${son} of 10</div>
          <div class='men' ><span class="medium"></span>   <span class="bold medium">${javob.html.question.seven}</span></div>
          <span class="statistik"></span>`;
}
async function html8Body() {
  const javob = await body();
  rightEl.innerHTML = `<div class="statistik">Question ${son} of 10</div>
          <div class='men' ><span class="medium"></span>   <span class="bold medium">${javob.html.question.eight}</span></div>
          <span class="statistik"></span>`;
}
async function html9Body() {
  const javob = await body();
  rightEl.innerHTML = `<div class="statistik">Question ${son} of 10</div>
          <div class='men' ><span class="medium"></span>   <span class="bold medium">${javob.html.question.nine}</span></div>
          <span class="statistik"></span>`;
}
async function html10Body() {
  const javob = await body();
  rightEl.innerHTML = `<div class="statistik">Question ${son} of 10</div>
          <div class='men' ><span class="medium"></span>   <span class="bold medium">${javob.html.question.ten}</span></div>
          <span class="statistik"></span>`;
}
async function html1Body() {
  const javob = await body();
  rightEl.innerHTML = `<div class="statistik">Question ${son} of 10</div>
          <div class='men' ><span class="medium"></span>   <span class="bold medium">${javob.html.question.first}</span></div>
          <span class="statistik"></span>`;
}
//html header
async function htmlHeader() {
    const javob = await header();
    headerEL.innerHTML = `<div class="title"><img src="${javob.html.img}" alt=""><img src="${javob.html.word}" alt=""></div><img src="./images/light.svg" alt="">`;
  }