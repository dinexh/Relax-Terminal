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

const showWelcome = () => {
    console.clear();
    console.log(chalk.cyan(figlet.textSync('Welcome to\nRelax Terminal', {
        horizontalLayout: 'full'
    })));
    console.log('\n');
};

const showExit = () => {
    console.clear();
    console.log(chalk.green(figlet.textSync('Thank you!\nStay Calm', {
        horizontalLayout: 'full'
    })));
    process.exit(0);
};

// Add SIGINT handler for clean exit
process.on('SIGINT', () => {
    showExit();
});

showWelcome();
rl.question(chalk.yellow('What is your name? '), (name) => {
    startBreathingExercise(name);
});

const startBreathingExercise = (name) => {
    const cycle = [
        chalk.cyan('Inhale...'),
        chalk.yellow('Hold...'),
        chalk.magenta('Exhale...')
    ];
    
    let index = 0;
    let cycleCount = 0;
    const maxCycles = 5;

    // Function to display the current state
    const displayState = () => {
        console.clear();
        console.log(chalk.blue(figlet.textSync(`Hello, ${name}!`, { horizontalLayout: 'full' })));
        console.log(centerAlign(chalk.green(getRandomQuote()), process.stdout.columns));
        console.log('\n');
        console.log(centerAlign(cycle[index], process.stdout.columns));
        console.log(centerAlign(chalk.gray(`Cycle ${Math.floor(cycleCount/3 + 1)} of ${maxCycles}`), process.stdout.columns));
        console.log('\n');
        console.log(centerAlign(chalk.dim('Press Ctrl+C to exit'), process.stdout.columns));
    };

    // Display initial state immediately
    displayState();

    const interval = setInterval(() => {
        index = (index + 1) % cycle.length;
        cycleCount++;
        
        displayState();

        if (cycleCount >= maxCycles * 3) {
            clearInterval(interval);
            setTimeout(showExit, 1000);
        }
    }, 4000);
};
