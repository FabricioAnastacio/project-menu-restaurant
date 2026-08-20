import { IReturnAllandOne } from '../interfaces/ICRUDModel.js';
import IIngredients from '../interfaces/Ingredients.js';
import { ServiceResponse } from '../interfaces/ServiceResponse.js';
import IngredientModel from '../models/ingredientsModel.js';

class IngredientService {
  constructor(
    private ingModel: IReturnAllandOne<IIngredients> = new IngredientModel(), 
  ) { }

  public async findAll(): Promise<ServiceResponse<IIngredients[]>> {
    const allIng = await this.ingModel.findAll();
    return { status: 'SUCCESSFUL', data: allIng };
  }
}

export default IngredientService;
