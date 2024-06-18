import { fetchUtils } from 'react-admin';
import postgrestRestProvider,
     { IDataProviderConfig,
       defaultSchema } from '@raphiniert/ra-data-postgrest';


const config: IDataProviderConfig = {
    apiUrl: 'http://localhost:3000',
    httpClient: fetchUtils.fetchJson,
    defaultListOp: 'eq',
    primaryKeys: new Map([
      ["film", ["film_id"]],
      ["actor", ["actor_id"]],
      ["film_actor", ["film_id", "actor_id"]],
      ["language", ["language_id"]],
      ["customer", ["customer_id"]],
      ["address", ["address_id"]],
      ["city", ["city_id"]]
    ]),
    schema: defaultSchema
}

export const dataProvider = postgrestRestProvider(config);
