# 🐍Snake-Game-JavaScript-Grid-Based-Game
A classic Snake Game built using HTML, CSS, and Vanilla JavaScript. The game runs on a dynamic grid system with real-time movement, score tracking, high-score persistence, and a timer feature.

# 📌 Project Overview

This Snake Game is a browser-based implementation of the traditional arcade game.
The snake moves within a dynamically generated grid, consumes food, increases in length, and updates the score accordingly. The game tracks time and stores the highest score using browser localStorage.

The project focuses on clean structure, modular logic, and responsive UI design.

# 🚀 Features

🎮 Smooth directional movement using keyboard arrow keys

🍎 Random food spawning across the grid

📈 Real-time score update

🏆 Persistent high score storage using localStorage

⏱️ Live timer tracking game duration

🔁 Restart functionality with modal interface

🎨 Styled snake head with custom pseudo-element eyes

🧩 Grid-based dynamic board generation

# 🛠️ Tech Stack

Technology	             Purpose

HTML5	                   Structure & layout

CSS3	                   Styling, Grid layout, UI design

JavaScript(Vanilla)	     Game logic & DOM manipulation

localStorage	           High score persistence

# 🧠 Core Game Logic

# 1️⃣ Grid System
The board is dynamically generated using CSS Grid.
Each cell is mapped using a coordinate-based key system: 

blocks["row-col"]
This allows precise control of snake movement and food placement.

# 2️⃣ Snake Representation
The snake is stored as an array of coordinate objects:

let snake = [
{ x: 10, y: 19 },
{ x: 10, y: 20 }
];

unshift() → Adds new head

pop() → Removes tail

Movement direction controlled via keydown events

# 3️⃣ Collision Detection

The game ends if:

Snake crosses board boundaries

(Future improvement: self-collision detection)

# 4️⃣ Food System

Random coordinates generated within grid limits

When snake head matches food coordinates:

Score increases

Snake grows

New food is generated

# 5️⃣ Score & High Score

Score increases by 10 per food

High score stored using:

localStorage.setItem("high_Score", high_Score.toString());

High score persists even after page reload

# 6️⃣ Timer Implementation

A separate setInterval() updates the game timer every second:

MM-SS format

# 📂 Project Structure

Snake-Game/
│

├── index.html        # Main HTML structure

├── styling.css       # UI styling & grid layout

├── game_logic.js     # Game mechanics & logic

├── snakeFood.png     # Food image asset

└── README.md         # Project documentation

# 🎮 Controls

| Key            | Action     |

| -------------- | ---------- |

| ⬆️ Arrow Up    | Move Up    |

| ⬇️ Arrow Down  | Move Down  |

| ⬅️ Arrow Left  | Move Left  |

| ➡️ Arrow Right | Move Right |

# 📷 UI Highlights

Modal-based Start & Game Over screens

Styled snake head with custom eye effects

Background blur overlay

Clean scoreboard interface

# 💡 Learning Outcomes

Through this project, the following concepts are demonstrated:

DOM manipulation

Event handling

Game loop management

State management

Coordinate-based movement logic

CSS Grid layout system

Persistent browser storage

Modular function structuring

# 🔮 Future Enhancements

Self-collision detection

Difficulty levels (speed scaling)

Pause functionality

Sound effects

Mobile touch controls

Responsive scaling for smaller screens

Score leaderboard system
