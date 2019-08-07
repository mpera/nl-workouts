const messages = [
    "Way to go!! 💪",
    "You rock! 🥳",
    "Keep up the good work! 🏋🏽",
    "My, you're looking fit 😘",
    "You inspire me every day ☀️",
    "Wow! I'm lucky to be on your team! 🍀",
];

const randomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)];
}

export default randomMessage;

