import FoodModel from '../database/models/FoodModel.js';
import IFood, { IFoodRes, IFoodSQL } from '../interfaces/Food.js';
import { IReturnAllandOne } from '../interfaces/ICRUDModel.js';
import IngredientsModel from '../database/models/IngredientsModel.js';
import FoodIngModel from '../database/models/FoodIngModel.js';
import '../database/models/associations.js';

const include = [
  {
    model: FoodIngModel,
    as: 'ingredients',
    attributes: ['plusPrice', 'isAdditional', 'quantity', 'unity'],
    include: [
      {
        model: IngredientsModel,
        as: 'foodIngredients',
        attributes: ['id', 'name'],
      }
    ],
  },
];

class FoodsModel implements IReturnAllandOne<IFood<IFoodRes>> {
  private model = FoodModel;

  private returnFindProdutc(itemJson: IFood<IFoodSQL>): IFood<IFoodRes> {
    const ingredients = itemJson.ingredients
      ?.filter((ing) => !ing.isAdditional)
      .map((ing) => ({
        id: ing.foodIngredients.id,
        name: ing.foodIngredients.name,
        quantity: ing.quantity,
        unity: ing.unity,
      }));

    const additionals = itemJson.ingredients
      ?.filter((ing) => ing.isAdditional)
      .map((ing) => ({
        id: ing.foodIngredients.id,
        name: ing.foodIngredients.name,
        quantity: ing.quantity,
        unity: ing.unity,
        plusPrice: ing.plusPrice,
      }));

    return {
      id: itemJson.id,
      name: itemJson.name,
      desc: itemJson.desc,
      img: itemJson.img,
      group: itemJson.group,
      price: itemJson.price,
      ingredients,
      additionals,
    };
  }

  async findAll(): Promise<IFood<IFoodRes>[]> {
    const foods = await this.model.findAll({ include });
    return foods.map((item) => {
      const itemJson = item.toJSON() as any as IFood<IFoodSQL>;

      return this.returnFindProdutc(itemJson);
    });
  }

  async findById(id: string | number): Promise<IFood<IFoodRes> | null> {
    try {
      const oneFood = await this.model.findByPk(id, { include }) as any as IFood<IFoodSQL>;
      return this.returnFindProdutc(oneFood);
    } catch {
      return null;
    }

  }
}

export default FoodsModel;
