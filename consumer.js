const amqp = require('amqplib');

const connect = async function () {
  try {
    const connection = await amqp.connect('amqp://localhost:5672');

    // create a communication channel:
    const channel = await connection.createChannel();

    // we create a queue:
    const result = await channel.assertQueue('jobs');

    channel.consume('jobs', (message) => {
      const input = JSON.parse(message.content.toString());
    
    // if we acknowledge something, we can close our channel for that particular publisher
      if(input.number == 2){
        channel.ack(message);
      }
      console.log(`Recieved number from input: ${input.number}`);
    });

    console.log('Waiting for messages...');
  } catch (error) {
    console.error(error);
  }
};

connect();
