# Rock Paper Scissors - MERN Game

A simple Rock Paper Scissors game built with MERN stack (MongoDB not needed for this simple version).

## Features
- Play Rock Paper Scissors against the computer
- Keep track of wins, losses, and ties
- Beautiful and responsive UI
- Real-time game results

## Project Structure
```
assignment8/
├── server.js          # Express backend with game logic
├── package.json       # Node dependencies
└── public/
    └── index.html     # Frontend HTML + CSS + JavaScript
```

## Installation & Setup

1. **Navigate to the assignment8 folder:**
```bash
cd assignment8
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the server:**
```bash
npm start
```

4. **Open in browser:**
Visit `http://localhost:5000` in your web browser

## How to Play
- Click on Rock, Paper, or Scissors button to make your choice
- Computer automatically makes a choice
- Results are displayed with your score tracked
- Click "New Game" to reset scores

## Game Rules
- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock
- Same choices = Tie

## API Endpoint
**POST** `/api/play`

Request body:
```json
{
  "playerChoice": "rock" | "paper" | "scissors"
}
```

Response:
```json
{
  "playerChoice": "rock",
  "computerChoice": "paper",
  "result": "win" | "lose" | "tie",
  "message": "🎉 You Won!"
}
```

## Technologies Used
- **Backend:** Node.js, Express.js
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Communication:** REST API with Fetch API
