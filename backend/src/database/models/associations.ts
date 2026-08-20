import FoodIngModel from './FoodIngModel.js';
import FoodModel from './FoodModel.js';
import IngredientsModel from './IngredientsModel.js';

FoodModel.belongsToMany(IngredientsModel, {
  through: FoodIngModel,
  foreignKey: 'foodId',
  otherKey: 'ingId',
  as: 'ingredients'
});

IngredientsModel.belongsToMany(FoodModel, {
  through: FoodIngModel,
  foreignKey: 'ingId',
  otherKey: 'foodId',
  as: 'foods'
});

export {
  FoodModel,
  IngredientsModel,
  FoodIngModel,
}
