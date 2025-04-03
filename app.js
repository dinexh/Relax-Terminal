import chalk from "chalk";
import readline from "readline";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function breathingExercise() {
  const phases = [
    { text: "Inhale...", duration: 4000, color: chalk.green },
    { text: "Hold...", duration: 4000, color: chalk.yellow },
    { text: "Exhale...", duration: 4000, color: chalk.blue },
  ];

  while (true) {
    for (const phase of phases) {
      readline.cursorTo(process.stdout, 0);
      process.stdout.write(phase.color(phase.text));
      await sleep(phase.duration);
      readline.clearLine(process.stdout, 0);
    }
  }
}

console.clear();
console.log(chalk.cyan("🧘 Welcome to the Terminal Breathing Exercise 🧘"));
breathingExercise();

