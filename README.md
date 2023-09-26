# rabbitmq
Playing around with rabbitmq


To run, make sure to run this on docker:

```
docker run --name rabbitmq -p 5672:5672 rabbitmq
```

Then open 2 terminals and run:

```
npm run publish ${number}
```
here, number can be any number you want

This will simply log the requests it gets
```
npm run consume
```
