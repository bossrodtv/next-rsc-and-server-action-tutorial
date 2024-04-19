import { type DbClient } from '@/shared/db/create-db-client';

export type GetProductsDataArgs = {
  dbClient: DbClient;
};

export async function getProductsData({ dbClient }: GetProductsDataArgs) {
  const products = await dbClient.selectFrom('products').selectAll().execute();
  return products;
}
