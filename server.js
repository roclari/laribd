require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRoutes);

app.listen(PORT, () => {
	console.log(`Servidor está conectado na porta ${PORT}.`)
});

app.get('/', (req, res) => {
	res.send(":)")
	console.log(req)
});

// MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => 
    console.log('Conectado ao MongoDB com sucesso.')
)
.catch(err => 
    console.error('Erro ao conectar ao MongoDB: ', err)
);
