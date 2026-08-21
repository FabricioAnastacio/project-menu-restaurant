import FoodIngModel from './FoodIngModel.js';
import FoodModel from './FoodModel.js';
import IngredientsModel from './IngredientsModel.js';

// FoodModel.belongsToMany(IngredientsModel, {
//   through: FoodIngModel,
//   foreignKey: 'foodId',
//   otherKey: 'ingId',
//   as: 'ingredients'
// });

// IngredientsModel.belongsToMany(FoodModel, {
//   through: FoodIngModel,
//   foreignKey: 'ingId',
//   otherKey: 'foodId',
//   as: 'foods'
// });

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
