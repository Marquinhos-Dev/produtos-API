import express from 'express';
import produtosRouter from "./routes/produtos.js";
import sequelize from './config/db.js';
const app = express();

sequelize.sync();

app.use(express.json());
app.use('/Produtos', produtosRouter);

app.listen( 3000, () => console.log("Server on!") );