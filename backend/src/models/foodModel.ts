import FoodModel from '../database/models/FoodModel.js';
import IFood, { IFoodRes, IFoodSQL } from '../interfaces/Food.js';
import { IReturnAllandOne } from '../interfaces/ICRUDModel.js';
import '../database/models/associations.js';
import IngredientsModel from '../database/models/IngredientsModel.js';

const include = [
  {
    model: IngredientsModel,
    as: 'ingredients',
    attributes: ['id', 'name'],
    through: {
      attributes: ['quantity', 'unity'],
    },
  },
];

class FoodsModel implements IReturnAllandOne<IFood<IFoodRes>> {
  private model = FoodModel;

  async findAll(): Promise<IFood<IFoodRes>[]> {
    const foods = await this.model.findAll({ include });
    const foodResult = foods.map((item) => {
      const itemJson = item.toJSON() as any as IFood<IFoodSQL>;
      return {
        ...itemJson,
        ingredients: itemJson.ingredients?.map((ing) => ({
          id: ing.id,
          name: ing.name,
          quantity: ing.foodIngredients.quantity,
          unity: ing.foodIngredients.unity,
        }))
      }
    });

    return foodResult;
  }

  async findById(id: string | number): Promise<IFood<IFoodRes> | null> {
    const oneFood = await this.model.findByPk(id, { include }) as any as IFood<IFoodSQL>;
    return {
      ...oneFood,
      ingredients: oneFood.ingredients?.map((ing) => ({
        id: ing.id,
        name: ing.name,
        quantity: ing.foodIngredients.quantity,
        unity: ing.foodIngredients.unity,
      }))
    };
  }
}

export default FoodsModel;
