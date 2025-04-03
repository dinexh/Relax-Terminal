🧘 Relax-Terminal: A Terminal Breathing Exercise

Relax-Terminal is a simple, customizable terminal-based breathing exercise tool built with Node.js. It helps you practice deep breathing by displaying inhale, hold, and exhale prompts with smooth transitions.

✨ Features

⏳ Guided Breathing – Inhale, Hold, and Exhale cycle with customizable durations.

🎨 Color-Coded Phases – Uses chalk to enhance the experience.

🔄 Infinite Loop – Keeps running until you exit manually.

⚡ Lightweight & Fast – No extra dependencies apart from chalk.

🎛️ Customizable – Modify cycle durations and add animations!

🚀 Installation

Clone the repository:

git clone https://github.com/yourusername/Relax-Terminal.git
cd Relax-Terminal

Install dependencies:

npm install

Run the app:

node app.js

⚙️ Customization

You can modify the breathing cycle durations inside app.js:

const phases = [
  { text: "Inhale...", duration: 4000, color: chalk.green },
  { text: "Hold...", duration: 4000, color: chalk.yellow },
  { text: "Exhale...", duration: 4000, color: chalk.blue },
];

Want animations or sounds? Feel free to contribute! 🎨🎵

🤝 Contributing

We welcome contributions! To contribute:

Fork the repo

Create a new branch (git checkout -b feature-name)

Commit changes (git commit -m "Added feature")

Push to your branch (git push origin feature-name)

Open a Pull Request 🚀

📜 License

MIT License - You can use, modify, and distribute this project freely.

🎉 Enjoy a calming breathing session right from your terminal! 🧘‍♂️

