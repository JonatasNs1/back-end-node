require('dotenv').config({path: 'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./rotas');
const server = express();
// app.use('/cadastrar', rotas);
server.use(bodyParser.json())

server.use((req, res, next) => {
    res.setHeader('X-Powered-By', 'Express');
    next(); // Chame next() para continuar com a manipulação da rota após configurar os cabeçalhos
  });


server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));

server.use('/', routes);

server.use(express.json());

// server.get('/', (req, res) => {
//     res.send('Node express com mysql')
// })


server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
})