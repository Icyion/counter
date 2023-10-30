let counterEle = document.getElementById("counter");
let deleteBtn = document.getElementById("bored")
let count = 0;

function increment(){
  count++;
  counterEle.textContent = count;
  deleteBtn.textContent = "BORED?";
}

function erase () {
  deleteBtn.textContent = "HAHAHA";
  counterEle.textContent = 0;
  count = 0;
}