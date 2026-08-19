import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from 'sequelize';
import db from './index.js';
import FoodModel from './FoodModel.js';
import IngredientsModel from './IngredientsModel.js';

class FoodIngModel extends Model<InferAttributes<FoodIngModel>,
InferCreationAttributes<FoodIngModel>> {
  declare id: CreationOptional<number>;

  declare foodId: number;

  declare ingId: number;

  declare unity: string;

  declare quantity: number;
}

FoodIngModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  foodId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ingId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  unity: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'foodIngredients',
  timestamps: false,
  underscored: true,
});

FoodIngModel.belongsTo(FoodModel, { foreignKey: 'foodId', as: 'food' });

FoodIngModel.belongsTo(IngredientsModel, { foreignKey: 'ingId', as: 'ing' });

export default FoodIngModel;
