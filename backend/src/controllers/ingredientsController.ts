import { Request, Response } from 'express';
import IngredientService from '../services/ingredientsService.js';
import mapStatusHTTP from '../utils/mapStatusHTTP.js';

export default class IngredientController {
  constructor(
    private serviceIng = new IngredientService(),
  ) {}

  public async getAllIngredients(req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.serviceIng.findAll();

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
