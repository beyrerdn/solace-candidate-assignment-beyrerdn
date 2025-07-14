export type Repository<T> = {
  findAll: () => Promise<T[]>,
  create: (data: any) => Promise<T>
}