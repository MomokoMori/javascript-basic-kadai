const btnEvent = document.getElementById("btn");

btnEvent.addEventListener("click", () => {
  const textH2 = document.getElementById("text");
  textH2.textContent = "ボタンをクリックしました";
});
