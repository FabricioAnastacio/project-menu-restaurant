import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP.js';
import FoodService from '../services/foodService.js';

export default class FoodController {
  constructor(
    private serviceFood = new FoodService(),
  ) {}

  public async getAllFoods(req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.serviceFood.findAll();

    return res.status(mapStatusHTTP(status)).json(data);
  }
}