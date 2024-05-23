require('dotenv').config()
const amqp = require("amqplib");
const amqpServer = process.env.AMQP_URL;
let channel, connection;

connectToQueue();

async function connectToQueue() {
    try {
        connection = await amqp.connect(amqpServer);
        channel = await connection.createChannel();
        await channel.assertQueue("waiter");
        channel.consume("waiter", data => {
            console.log(`Food & Beverages received: ${data.content}`);
            channel.ack(data);
            sendingOrder();
        });
    } catch (ex) {
        console.error(ex);
    }
}

const sendingOrder = async () => {
    await sleep(5000);
    console.log("Order Served!\n")

};

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}