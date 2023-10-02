import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
    'alphafinanzas',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

export const connect = async () => {

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return sequelize;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
