import FoodIngModel from './FoodIngModel.js';
import FoodModel from './FoodModel.js';
import IngredientsModel from './IngredientsModel.js';

FoodIngModel.belongsTo(FoodModel, {
  foreignKey: 'foodId',
  as: 'food',
});

FoodIngModel.belongsTo(IngredientsModel, {
  foreignKey: 'ingId',
  as: 'foodIngredients',
});

FoodModel.hasMany(FoodIngModel, {
  foreignKey: 'foodId',
  as: 'ingredients',
});

IngredientsModel.hasMany(FoodIngModel, {
  foreignKey: 'ingId',
  as: 'ingredients',
})

export {
  FoodModel,
  IngredientsModel,
  FoodIngModel,
}
