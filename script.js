let btnsInc = document.getElementsByClassName("btn-primary");
let btnsDec = document.getElementsByClassName("btn-success");
let btnsDel = document.getElementsByClassName("btn-danger");

for (let i = 0; i < btnsInc.length; i++) {
  btnsInc[i].addEventListener("click", function () {
    btnsInc[i].nextElementSibling.innerHTML++;
    Total();
  });
}
for (let i = 0; i < btnsDec.length; i++) {
  btnsDec[i].addEventListener("click", function () {
    if (btnsDec[i].previousElementSibling.innerHTML > 0) {
      btnsDec[i].previousElementSibling.innerHTML--;
      Total();
    }
  });
}

for (let i = 0; i < btnsDel.length; i++) {
  btnsDel[i].addEventListener("click", function () {
    btnsDel[i].parentElement.parentElement.remove();
    Total();
  });
}

function Total() {
  let qtite = document.getElementsByClassName("qte");
  let prices = document.getElementsByClassName("price");
  let total = document.querySelector(".total");
  let sum = 0;
  for (let i = 0; i < qtite.length; i++) {
    sum = sum + qtite[i].innerHTML * prices[i].innerHTML;
  }
  console.log(sum);
  return (total.innerHTML = sum);
}
