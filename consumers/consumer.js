// consumers/emailConsumer.js
const { Kafka } = require("kafkajs");

// Kafka configuration
const kafka = new Kafka({
  clientId: "notification-app",
  brokers: ["localhost:9092"], // Assuming Kafka broker is on localhost:9092
});

const consumer = kafka.consumer({ groupId: "email-group" });

async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic: "email", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Received message: ${message.value.toString()}`);
    },
  });
}

run().catch(console.error);
