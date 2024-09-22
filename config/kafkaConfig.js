const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "notification-app",
  brokers: ["localhost:9092"], // Update if you have multiple brokers
});

module.exports = kafka;
