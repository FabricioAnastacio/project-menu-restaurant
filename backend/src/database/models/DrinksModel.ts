import FoodModel from './FoodModel.js';
import { DataTypes } from 'sequelize';
import db from './index.js';

class DrinksModel extends FoodModel {}

DrinksModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  desc: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  group: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'drinks',
  timestamps: false,
});

export default DrinksModel;
