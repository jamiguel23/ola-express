const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) =>{
  res.status(200).send('Ola world')
});

app.get('/about', (req, res) => {
  res.status(200).send('about route hit')
})

app.listen(PORT, () => {
  console.log(`app running on ${PORT}, playa`)
});