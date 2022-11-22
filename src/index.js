const messages = [
  "Qué me dice compa?",
  "Qué me dice mae?",
  "Todo bien mi tata?",
  "Todo bien mi mama?",
  "No seas tan mi amor!",
  "Tuanis o morado?",
  "Al chile",
  "No seas tan sampaguabas",
  "Todo bien mi her!",
  "Que tigra mae",
  "Pura vida compa",
  "Sia camote",
  "No se haga la barba",
  "Que tirada",
  "Ta bueno el culantro pero no tanto"
];

const ticoMessage = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
  ticoMessage
};