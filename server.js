// call express
const express = require('express');
const app = express();
const userRouter = require('./routes/user');
// port
const PORT = 3001;

// set end point as root directory
// request (get) to server
app.get('/', (req, res) => {
  // response from server
  console.log('Hello, Express!');

  // display on browser
  //   res.send('Hola!')

  // server error
  //   res.sendStatus(500);
  // res.status(500).send("Error.")
  //   res.status(500).json({ msg: 'Error.' });
});

// routing
app.use('/user', userRouter);

// local server
app.listen(PORT, () => console.log('Server ON'));
