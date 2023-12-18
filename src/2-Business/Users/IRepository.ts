export interface IRepository<TEntity> {
  create(entity: TEntity): Promise<void>;
}
