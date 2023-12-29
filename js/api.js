async function header() {
  respon = await fetch("http://localhost:3000/header");
  return respon.json();
}
async function body() {
  respon = await fetch("http://localhost:3000/body");
  return respon.json();
}
async function answear() {
  respon = await fetch("  http://localhost:3000/answere");
  return respon.json();
}
