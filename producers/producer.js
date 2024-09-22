// producer.js
const { Kafka } = require("kafkajs");
const readline = require("readline");

// Kafka configuration
const kafka = new Kafka({
  clientId: "notification-app",
  brokers: ["localhost:9092"], // Assuming Kafka broker is on localhost:9092
});

const producer = kafka.producer();

// Initialize readline interface to accept input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to send message to Kafka
async function produceMessage(message) {
  await producer.connect();
  await producer.send({
    topic: "email",
    messages: [{ value: message }],
  });
  console.log("Message produced successfully:", message);
  await producer.disconnect();
}

// Function to prompt user for input and send to Kafka
function askForMessage() {
  rl.question("Enter your message: ", async (inputMessage) => {
    if (inputMessage) {
      await produceMessage(inputMessage); // Send input to Kafka
      askForMessage(); // Continue asking for input
    } else {
      rl.close(); // Close if no input
    }
  });
}

askForMessage(); // Start accepting input
