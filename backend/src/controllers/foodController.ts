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

  public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { status, data } = await this.serviceFood.findById(Number(id));

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getByGroup(req: Request, res: Response): Promise<Response> {
    const { group } = req.params;

    if (!group || typeof group !== 'string') {
      return res.status(mapStatusHTTP('INVALID_VALUE')).json({ message: 'Grupo não informado' });
    }

    const { status, data } = await this.serviceFood.findByGroup(group);
    return res.status(mapStatusHTTP(status)).json(data);
  }
}