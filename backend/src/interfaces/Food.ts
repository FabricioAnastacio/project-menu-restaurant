export interface IFoodRes {
  id: number,
  name: string,
  quantity: number,
  unity: string,
}

export interface IFoodSQL {
  plusPrice: number | null,
  isAdditional: boolean,
  quantity: number,
  unity: string,
  foodIngredients: {
    id: number,
    name: string,
  },
}

export default interface IFood<T> {
  id: number,
  name: string,
  desc: string,
  img: string,
  group: string,
  price: number,
  ingredients: T[] | undefined,
  additionals: T[] | undefined,
}
