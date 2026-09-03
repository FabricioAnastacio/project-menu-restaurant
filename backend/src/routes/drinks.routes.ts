import { Router } from 'express';
import DrinkController from '../controllers/drinkController.js';

const drinks = new DrinkController();

const drinksRouter = Router();

drinksRouter.get('/', (req, res) => drinks.getAllDrinks(req, res));
drinksRouter.get('/:id', (req, res) => drinks.getOneDrinks(req, res));

export default drinksRouter;
