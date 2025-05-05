const ticket = document.querySelector(".ticket");
const flameColor = document.querySelector(".flameColor");
const comment = document.querySelector(".comment");
const wait = document.querySelector(".wait");
const goodLuck = document.querySelector(".goodLuck");
const luckyColor = document.querySelector(".luckyColor");
const oneMore = document.getElementById("oneMore");

let fortuneCount = 1;

const ticketArray = [
  "単勝",
  "複勝",
  "ワイド",
  "枠連",
  "馬連",
  "馬単",
  "三連複",
  "三連単",
];

const flameColorArray = [
  "白",
  "黒",
  "赤",
  "青",
  "緑",
  "黄",
  "オレンジ",
  "ピンク",
];

const commentArray = [
  "本命一択！ 信じることが大切",
  "気になる穴馬を買いましょう",
  "全ての馬を応援しましょう",
  "人気馬を中心にしてみましょう",
  "勝ちそうな馬より好きな馬",
  "荒れそうなレースを探しましょう",
  "人気馬を疑ってみましょう",
  "逃げ馬を狙ってみましょう",
  "頭数の少ないレースに絞りましょう",
  "少しのお金で楽しみましょう",
  "短距離レースで一攫千金",
  "好きな騎手から買ってみましょう",
  "新人騎手を応援してみましょう",
];

const colorArray = [
  "white",
  "black",
  "red",
  "mediumblue",
  "limegreen",
  "gold",
  "darkorange",
  "hotpink",
];

oneMore.addEventListener("click", startFortune);

let randomNum1 = Math.floor(Math.random() * ticketArray.length);
let randomNum2 = Math.floor(Math.random() * flameColorArray.length);
let randomNum3 = Math.floor(Math.random() * commentArray.length);

function startFortune() {
  oneMore.style.display = "none";
  if (fortuneCount === 1) {
    wait.textContent = "券種";
    setTimeout(() => {
      ticket.textContent = ticketArray[randomNum1];
    }, 1000);
    setTimeout(() => {
      luckyColor.textContent = "幸運の色";
    }, 1800);
    setTimeout(() => {
      flameColor.textContent = flameColorArray[randomNum2];
      goodLuck.style.color = colorArray[randomNum2];
    }, 2600);
    setTimeout(() => {
      comment.textContent = commentArray[randomNum3];
    }, 3400);
    setTimeout(() => {
      goodLuck.textContent = "幸運を祈ります";
    }, 4700);
  } else {
    const resultPs = document.querySelectorAll(".result p");
    for (const resultP of resultPs) {
      resultP.textContent = "";
    }
    let randomNum1 = Math.floor(Math.random() * ticketArray.length);
    let randomNum2 = Math.floor(Math.random() * flameColorArray.length);
    let randomNum3 = Math.floor(Math.random() * commentArray.length);
    setTimeout(() => {
      wait.textContent = "券種";
    }, 500);
    setTimeout(() => {
      ticket.textContent = ticketArray[randomNum1];
    }, 1300);
    setTimeout(() => {
      luckyColor.textContent = "幸運の色";
    }, 2100);
    setTimeout(() => {
      flameColor.textContent = flameColorArray[randomNum2];
      goodLuck.style.color = colorArray[randomNum2];
    }, 2900);
    setTimeout(() => {
      comment.textContent = commentArray[randomNum3];
    }, 3700);
    setTimeout(() => {
      goodLuck.textContent = "幸運を祈ります";
    }, 5000);
  }

  setTimeout(() => {
    oneMore.style.display = "inline-block";
    oneMore.textContent = "もう一度占う";
  }, 6000);

  fortuneCount++;
}
