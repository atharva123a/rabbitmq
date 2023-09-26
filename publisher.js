const amqp = require('amqplib');

const message = { number: process.argv[2] };


const connect = async function () {
    try {
        const connection = await amqp.connect('amqp://localhost:5672');
        
        // create a communication channel:
        const channel = await connection.createChannel();
        
        // we create a queue:
        const result = await channel.assertQueue('jobs');
        
        channel.sendToQueue('jobs', Buffer.from(JSON.stringify(message)));
        
        console.log(`Job sent successfully ${message.number}`);
    } catch (error) {
        console.error(error);
    }
};

connect();
