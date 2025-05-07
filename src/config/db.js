import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";
configDotenv();

const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, // necessário no Supabase
        },
    },
});

// Conecta com o banco
sequelize.authenticate()
    .then(() => console.log('Database conected!'))
    .catch(err => console.error('Erro ao conectar:', err));

export default sequelize;