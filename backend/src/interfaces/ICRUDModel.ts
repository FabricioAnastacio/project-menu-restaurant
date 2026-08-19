export interface IReturnAllandOne<T> {
  findAll(): Promise<T[]>
  findById(id: string | number): Promise<T | null>
}
