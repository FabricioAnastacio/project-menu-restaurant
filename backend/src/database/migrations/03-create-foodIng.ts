import { DataTypes, Model, QueryInterface } from 'sequelize';
import IFoodIng from '../../interfaces/FoodIng.js';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IFoodIng>>('food_ingredients', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      foodId: {
        type: DataTypes.INTEGER,
        field: 'food_id',
        allowNull: false,
      },
      ingId: {
        type: DataTypes.INTEGER,
        field: 'ing_id',
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      unity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAdditional: {
        type: DataTypes.BOOLEAN,
        field: 'is_additional',
        allowNull: false,
      },
      plusMaxAmount: {
        type: DataTypes.INTEGER,
        field: 'plus_max_amount',
        allowNull: true,
      },
      plusPrice: {
        type: DataTypes.INTEGER,
        field: 'plus_price',
        allowNull: true,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('food_ingredients');
  }
}