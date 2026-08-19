import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from 'sequelize';
import db from './index.js';

class IngredientsModel extends Model<InferAttributes<IngredientsModel>,
InferCreationAttributes<IngredientsModel>> {
  declare id: CreationOptional<number>;

  declare name: string;

  declare price: number;

  declare unity: string;

  declare quantity: number;
}

IngredientsModel.init({
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
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  unity: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'ingredients',
  timestamps: false,
});

export default IngredientsModel;
