import IDrink from '../interfaces/Drink.js';
import { IReturnAllandOne } from '../interfaces/ICRUDModel.js';
import { ServiceResponse } from '../interfaces/ServiceResponse.js';
import DrinkModel from '../models/drinkModel.js';

class DrinkService {
  constructor(
    private drinkModel: IReturnAllandOne<IDrink> = new DrinkModel(),
  ) {}

  public async findAllDrinks(): Promise<ServiceResponse<IDrink[]>> {
    const allDrinks = await this.drinkModel.findAll();

    return { status: 'SUCCESSFUL', data: allDrinks };
  }

  public async findDrinkById(id: number): Promise<ServiceResponse<IDrink>> {
    const drink = await this.drinkModel.findById(id);

    if (drink === null)
      return { status: 'NOT_FOUND', data: { message: 'Item não encontrado' } };

    return { status: 'SUCCESSFUL', data: drink }; 
  }
}

export default DrinkService;
