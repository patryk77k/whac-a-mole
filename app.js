const squares = document.querySelectorAll(".square");
const score = document.querySelector("#score");
//const grid = document.querySelector(".grid");

let hitPosition;

const generateRandomSquare = () => {
  squares.forEach((square) => square.classList.remove("mole"));

  const randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");

  hitPosition = randomPosition.id; //zeby wyprowadzic i miec dostep w innej funkcji
};

const moveMole = () => {
  let timerId = null;
  timerId = setInterval(generateRandomSquare, 1000);
};

let result = 0;
squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    if (square.id == hitPosition) {
      result++;
      score.innerHTML = result;
    }
  });
});

moveMole();
