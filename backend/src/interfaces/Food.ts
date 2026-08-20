export interface IFoodRes {
  id: number,
  name: string,
  quantity: number,
  unity: string,
}

export interface IFoodSQL {
  id: number,
  name: string,
  foodIngredients: {
    quantity: number,
    unity: string,
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
}
