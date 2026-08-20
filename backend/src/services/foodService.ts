import IFood, { IFoodRes } from "../interfaces/Food.js";
import { IReturnAllandOne } from "../interfaces/ICRUDModel.js";
import { ServiceResponse } from "../interfaces/ServiceResponse.js";
import FoodsModel from "../models/foodModel.js";

class FoodService {
  constructor(
    private foodModel: IReturnAllandOne<IFood<IFoodRes>> = new FoodsModel(),
  ) {}

  public async findAll(): Promise<ServiceResponse<IFood<IFoodRes>[]>> {
    const allFood = await this.foodModel.findAll();

    return { status: 'SUCCESSFUL', data: allFood };
  }
}

export default FoodService;
