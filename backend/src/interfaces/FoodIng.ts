export default interface IFoodIng {
  id: number,
  foodId: number,
  ingId: number,
  quantity: number,
  unity: string,
  isAdditional: boolean,
  plusMaxAmount: number | null,
  plusPrice: number | null,
}