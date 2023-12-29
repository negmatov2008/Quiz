//Header
async function menyuHeader() {
  const javob = await header();
  headerEL.innerHTML = `<div class="title"><img src="" alt=""><img src="" alt=""></div><img src="./images/light.svg" alt="">`;
}
async function cssHeader() {
  const javob = await header();
  headerEL.innerHTML = `<div class="title"><img src="${javob.css.img}" alt=""><img src="${javob.css.word}" alt=""></div><img src="./images/light.svg" alt="">`;
}
async function javaHeader() {
  const javob = await header();
  headerEL.innerHTML = `<div class="title"><img src="${javob.java.img}" alt=""><img src="${javob.java.word}" alt=""></div><img src="./images/light.svg" alt="">`;
}
async function accHeader() {
  const javob = await header();
  headerEL.innerHTML = `<div class="title"><img src="${javob.acc.img}" alt=""><img src="${javob.acc.word}" alt=""></div><img src="./images/light.svg" alt="">`;
}

//body
let son = 1;
async function menyuBody() {
  const javob = await body();
  rightEl.innerHTML = `<div class="statistik"></div>
      <div class='men' ><span class="medium">${javob.menyu.h}</span>   <span class="bold medium">${javob.menyu.span}</span></div>
      <span class="statistik">${javob.menyu.pastki}</span>`;
}
async function bodyleft() {
  const javob = await header();
  leftEL.innerHTML = `<div onclick="html()" class="javoblar"><img src="${javob.html.img}" alt=""><img src="${javob.html.word}" alt=""></div>
      <div  class="javoblar"><img src="${javob.css.img}" alt=""><img src="${javob.css.word}" alt=""></div>
      <div  class="javoblar"><img src="${javob.java.img}" alt=""><img src="${javob.java.word}" alt=""></div>
      <div  class="javoblar"><img src="${javob.acc.img}" alt=""><img src="${javob.acc.word}" alt=""></div>`;
}

//css
async function cssBody() {
  const javob = await body();
  rightEl.innerHTML = `<div class="statistik"></div>
        <div class='men' ><span class="medium">${javob.menyu.h}</span>   <span class="bold medium">${javob.menyu.span}</span></div>
        <span class="statistik">${javob.menyu.pastki}</span>`;
}
async function javaBody() {
  const javob = await body();
  rightEl.innerHTML = `<div class="statistik"></div>
        <div class='men' ><span class="medium">${javob.menyu.h}</span>   <span class="bold medium">${javob.menyu.span}</span></div>
        <span class="statistik">${javob.menyu.pastki}</span>`;
}
async function accBody() {
  const javob = await body();
  rightEl.innerHTML = `<div class="statistik"></div>
        <div class='men' ><span class="medium">${javob.menyu.h}</span>   <span class="bold medium">${javob.menyu.span}</span></div>
        <span class="statistik">${javob.menyu.pastki}</span>`;
}
