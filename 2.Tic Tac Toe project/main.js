console.log("welcome to tic tac toe ");
let audioturn = new Audio("sounds/ting.mp3");
let music = new Audio("sounds/music.mp3");
let gameover = new Audio("sounds/gameover.mp3");

let changeturn = (turn) => {
  if (turn === "X") {
    return (turn = "0");
  } else if (turn === "0") {
    return (turn = "X");
  }
};
let turn = "X";
//function to check for a  win
const checkwin = () => {
  boxtexts = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2][3, 4, 5][6, 7, 8][0, 3, 6][1, 4, 7][2, 5, 8][0, 4, 8][ 2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      (boxtexts[e[0]].innerText = boxtexts[e[1]]) && boxtexts[e[1]].innerText === boxtexts[e[2]]
    ) {
      console.log(gandu);
    }
  });
};

// game main logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  element.addEventListener("click", () => {
    if (element.innerText === "") {
      element.innerText = turn;
      turn = changeturn(turn);
      audioturn.play();
      checkwin();
      document.getElementsByClassName(
        "chanceinfo"
      )[0].innerText = `Chance for ${turn}`;
    }
  });
});
