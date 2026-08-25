import IFood, { IFoodRes } from "../interfaces/Food.js";
import { IReturnFoodModel } from "../interfaces/ICRUDModel.js";
import { ServiceResponse } from "../interfaces/ServiceResponse.js";
import FoodsModel from "../models/foodModel.js";

class FoodService {
  constructor(
    private foodModel: IReturnFoodModel<IFood<IFoodRes>> = new FoodsModel(),
  ) {}

  public async findAll(): Promise<ServiceResponse<IFood<IFoodRes>[]>> {
    const allFood = await this.foodModel.findAll();

    return { status: 'SUCCESSFUL', data: allFood };
  }

  public async findById(id: number): Promise<ServiceResponse<IFood<IFoodRes>>> {
    const food = await this.foodModel.findById(id);

    if (food === null)
      return { status: 'NOT_FOUND', data: { message: 'Item não encontrado!' } };

    return { status: 'SUCCESSFUL', data: food };
  }

  public async findByGroup(group: string): Promise<ServiceResponse<IFood<IFoodRes>[]>> {
    const foods = await this.foodModel.findByGroup(group);

    return { status: 'SUCCESSFUL', data: foods };
  }
}

export default FoodService;
