import IFood from './Food.js';

export default interface IDrink extends IFood<null> {
  quantity: number,
  unity: string,
}