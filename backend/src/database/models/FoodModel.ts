import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from 'sequelize';
import db from './index.js';

class FoodModel extends Model<InferAttributes<FoodModel>,
InferCreationAttributes<FoodModel>> {
  declare id: CreationOptional<number>;

  declare name: string;

  declare desc: string;

  declare img: string;

  declare group: string;

  declare price: number;
}

FoodModel.init({
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
  modelName: 'foods',
  timestamps: false,
});

export default FoodModel;
