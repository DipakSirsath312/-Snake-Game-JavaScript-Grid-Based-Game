const board = document.querySelector(".board");
const startButton = document.querySelector(".btn-start");
const modal = document.querySelector(".modal");
const startGameModal = document.querySelector(".start-game");
const gameOverModal = document.querySelector(".game-over");
const restartButton = document.querySelector(".btn-restart");

const highScore = document.querySelector("#high-score");
const Score = document.querySelector("#score");
const Time = document.querySelector("#time");

const blockHeight = 30;
const blockWidth = 30;

let high_Score = localStorage.getItem("high_Score") || 0;
let score = 0;
let time = `00-00`;

highScore.innerText = high_Score;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

let intervalId = null;
let timeIntervalId;

let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};

const blocks = [];
let snake = [
  {
    x: 10,
    y: 19,
  },
  {
    x: 10,
    y: 20,
  },
];

let direction = "down";

// for (let i = 0; i < rows * cols; i++) {
//     const block = document.createElement('div');
//     block.classList.add("block");
//     board.appendChild(block);
// }

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    // block.innerText = `${row}, ${col}`;
    blocks[`${row}-${col}`] = block;
  }
}

function render() {
  let head = null;

  blocks[`${food.x}-${food.y}`].classList.add("food");

  if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  } else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  }

  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    clearInterval(intervalId);

    modal.style.display = "flex";
    startGameModal.style.display = "none";
    gameOverModal.style.display = "flex";
    return;
  }

  if (head.x == food.x && head.y == food.y) {
    blocks[`${food.x}-${food.y}`].classList.remove("food");

    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };
    blocks[`${food.x}-${food.y}`].classList.add("food");
    snake.unshift(head);

    score += 10;
    Score.innerText = score;

    if (score > high_Score) {
      high_Score = score;
      localStorage.setItem("high_Score", high_Score.toString());
    }
  }

  // snake.forEach((segment) => {
  //   blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  // });
  snake.forEach((segment) => {
    const block = blocks[`${segment.x}-${segment.y}`];
    block.classList.remove("fill", "head"); // head bhi remove karna
  });

  snake.unshift(head);
  snake.pop();

  // snake.forEach((segment) => {
  //   // console.log(segment );
  //   blocks[`${segment.x}-${segment.y}`].classList.add("fill");
  // });
  snake.forEach((segment, index) => {
    const block = blocks[`${segment.x}-${segment.y}`];

    block.classList.add("fill");

    if (index === 0) {
      block.classList.add("head"); // sirf first div me eyes
    }
  });
}

// intervalId = setInterval(() => {
//   render();
// }, 200);

startButton.addEventListener("click", () => {
  modal.style.display = "none";
  intervalId = setInterval(() => {
    render();
  }, 250);

  timeIntervalId = setInterval(() => {
    let [min, sec] = time.split("-").map(Number);

    if (sec == 59) {
      min += 1;
      sec = 0;
    } else {
      sec += 1;
    }

    time = `${min}-${sec}`;
    Time.innerText = time;
  }, 1000);
});

restartButton.addEventListener("click", restartGame);

function restartGame() {
  blocks[`${food.x}-${food.y}`].classList.remove("food");

  // snake.forEach((segment) => {
  //   blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  // });
  snake.forEach((segment) => {
    const block = blocks[`${segment.x}-${segment.y}`];
    block.classList.remove("fill", "head"); // head bhi remove karna
  });

  score = 0;
  time = `00-00`;

  Score.innerText = score;
  Time.innerText = time;
  highScore.innerText = high_Score;

  modal.style.display = "none";
  direction = "down";

  snake = [
    {
      x: 10,
      y: 19,
    },
    {
      x: 10,
      y: 20,
    },
  ];

  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };

  intervalId = setInterval(() => {
    render();
  }, 250);
}

addEventListener("keydown", (event) => {
  //   console.log(event.key);
  if (event.key == "ArrowUp") {
    direction = "up";
  } else if (event.key == "ArrowRight") {
    direction = "right";
  } else if (event.key == "ArrowLeft") {
    direction = "left";
  } else if (event.key == "ArrowDown") {
    direction = "down";
  }
});
