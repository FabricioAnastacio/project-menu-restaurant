import FoodModel from '../database/models/FoodModel.js';
import IFood from '../interfaces/Food.js';
import { IReturnAllandOne } from '../interfaces/ICRUDModel.js';

class FoodsModel implements IReturnAllandOne<IFood> {
  private model = FoodModel;

  async findAll(): Promise<IFood[]> {
    const foods = await this.model.findAll();
    return foods;
  }

  async findById(id: string | number): Promise<IFood | null> {
    const oneFood = await this.model.findByPk(id);
    return oneFood;
  }
}

export default FoodsModel;
