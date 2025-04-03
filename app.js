#!/usr/bin/env node
import readline from 'readline';
import chalk from 'chalk';
import figlet from 'figlet';
import centerAlign from 'center-align';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const quotes = [
    "Relax. Recharge. Refocus.",
    "Take a deep breath and let it go.",
    "Breathe in courage, breathe out fear.",
    "The mind is like water. When it’s turbulent, it’s difficult to see."
];

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

const startBreathingExercise = (name) => {
    console.clear();
    console.log(chalk.blue(figlet.textSync(`Hello, ${name}!`, { horizontalLayout: 'full' })));
    console.log(centerAlign(chalk.green(getRandomQuote()), process.stdout.columns));
    console.log('\n');

    const cycle = [
        chalk.cyan('Inhale...'),
        chalk.yellow('Hold...'),
        chalk.magenta('Exhale...')
    ];
    
    let index = 0;
    setInterval(() => {
        console.clear();
        console.log(chalk.blue(figlet.textSync(`Hello, ${name}!`, { horizontalLayout: 'full' })));
        console.log(centerAlign(chalk.green(getRandomQuote()), process.stdout.columns));
        console.log('\n');
        console.log(centerAlign(cycle[index], process.stdout.columns));
        index = (index + 1) % cycle.length;
    }, 4000);
};

rl.question(chalk.yellow('What is your name? '), (name) => {
    startBreathingExercise(name);
    rl.close();
});
