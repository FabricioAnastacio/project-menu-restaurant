import { Request, Response } from 'express';
import DrinkService from '../services/drinkService.js';
import mapStatusHTTP from '../utils/mapStatusHTTP.js';

export default class DrinkController {
  constructor(
    private serviceDrink = new DrinkService(),
  ) {}

  public async getAllDrinks(req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.serviceDrink.findAllDrinks();

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getOneDrinks(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { status, data } = await this.serviceDrink.findDrinkById(Number(id));

    return res.status(mapStatusHTTP(status)).json(data);
  }
}