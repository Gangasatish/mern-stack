import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Game logic functions
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'tie';
  }

  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'win';
  }

  return 'lose';
}

// API endpoint for playing the game
app.post('/api/play', (req, res) => {
  const { playerChoice } = req.body;

  if (!choices.includes(playerChoice)) {
    return res.status(400).json({ error: 'Invalid choice' });
  }

  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);

  res.json({
    playerChoice,
    computerChoice,
    result,
    message:
      result === 'win'
        ? '🎉 You Won!'
        : result === 'lose'
        ? '😢 You Lost!'
        : '🤝 It\'s a Tie!',
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
