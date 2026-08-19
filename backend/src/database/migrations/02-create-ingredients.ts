import { DataTypes, Model, QueryInterface } from 'sequelize';
import IIngredients from '../../interfaces/Ingredients.js';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IIngredients>>('ingredients', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      unity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('ingredients');
  }
}