export interface IBaseRepository<T> {
  create(entity: T): void;
  update(entity: T): void;
  delete(id: string): void;
  getById(id: string): Promise<T>;
  getAll(): Promise<Array<T>>;
}
