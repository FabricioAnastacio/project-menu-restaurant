import IngredientsModel from '../database/models/IngredientsModel.js';
import { IReturnAllandOne } from '../interfaces/ICRUDModel.js';
import IIngredients from '../interfaces/Ingredients.js';

class IngredientModel implements IReturnAllandOne<IIngredients> {
  private model = IngredientsModel;

  async findAll(): Promise<IIngredients[]> {
    const allIng = await this.model.findAll();
    return allIng;
  }

  async findById(id: string | number): Promise<IIngredients | null> {
    const ing = await this.model.findByPk(id);
    return ing;
  }
}

export default IngredientModel;
