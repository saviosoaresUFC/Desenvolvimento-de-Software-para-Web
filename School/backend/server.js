const express = require('express');
const cors = require('cors');
const alunoRoutes = require('./api/routes/alunoRoutes');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); 

app.use('/alunos', alunoRoutes);

app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});