import DrinksModel from '../database/models/DrinksModel.js';
import IDrink from '../interfaces/Drink.js';
import { IReturnAllandOne } from '../interfaces/ICRUDModel.js';

class DrinkModel implements IReturnAllandOne<IDrink> {
  private model = DrinksModel;

  async findAll(): Promise<IDrink[]> {
    const drinks = await this.model.findAll() as any as IDrink[];

    return drinks;
  }

  async findById(id: string | number): Promise<IDrink | null> {
    const drink = await this.model.findByPk(id) as any as IDrink;
    
    return drink;
  }
}

export default DrinkModel;
