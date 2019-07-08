const messages = [
    "Way to go!! 💪",
    "You rock! 🥳",
    "Keep up the good work! 🏋🏽",
    "My, you're looking fit 😘",
    "You inspire me every day ☀️",
    "Wow! I'm lucky to be on your team! 🍀",
];

function getRandom(items) {
    return items[Math.floor(Math.random() * items.length)];
};

const randomMessage = () => {
    return getRandom(messages);
}

export default randomMessage;

