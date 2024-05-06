require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post('/api/login', async (req, res) => {
	const {email, password} = req.body;

	try {
		const User = require('./models/users');
		const user = await User.findOne({email, password});

		if (user) {
			return res.status(200).json({message: 'Login efetuado.'});
		} else {
			return res.status(401).json({message: 'Login não efetuado.'});
		}
	} catch(err) {
		console.error('Erro ao efetuar login: ', err);
		res.status(500).json({message: 'Erro no servidor.'});
	}
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login', 'login.html'));
});
app.use(express.static(path.join(__dirname, 'login')));
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
	console.log(`Servidor está conectado na porta ${PORT}.`)
});

// MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => 
    console.log('Conectado ao MongoDB com sucesso.')
)
.catch(err => 
    console.error('Erro ao conectar ao MongoDB: ', err)
);
