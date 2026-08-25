export interface IReturnFoodModel<T> extends IReturnAllandOne<T> {
  findByGroup(group: string): Promise<T[]>,
}

export interface IReturnAllandOne<T> {
  findAll(): Promise<T[]>,
  findById(id: string | number): Promise<T | null>,
}
