import { CreateParams, DeleteManyParams, DeleteParams, GetListParams, GetManyParams, GetManyReferenceParams, GetOneParams, UpdateManyParams, UpdateParams, fetchUtils } from 'react-admin';
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
      ["city", ["city_id"]],
      ["category", ["category_id"]]
    ]),
    schema: defaultSchema
}

const postgrestRestDataProvider = postgrestRestProvider(config);

export const dataProvider = {
  create: (resource: string, params: CreateParams<any>) => {
    console.log("create", resource, params);
    return postgrestRestDataProvider.create(resource, params);
  },
  delete: (resource: string, params: DeleteParams<any>) => {
    console.log("delete", resource, params);
    return postgrestRestDataProvider.delete(resource, params);
  },
  deleteMany: (resource: string, params: DeleteManyParams<any>) => {
    console.log("deleteMany", resource, params);
    return postgrestRestDataProvider.deleteMany(resource, params);
  },
  getList: (resource: string, params: GetListParams) => {
    console.log("getList", resource, params);
    return postgrestRestDataProvider.getList(resource, params);
  },
  getMany: (resource: string, params: GetManyParams) => {
    console.log("getMany", resource, params);
    return postgrestRestDataProvider.getMany(resource, params);
  },
  getManyReference: (resource: string, params: GetManyReferenceParams) => {
    console.log("getManyReference", resource, params);
    return postgrestRestDataProvider.getManyReference(resource, params);
  },
  getOne: (resource: string, params: GetOneParams<any>) => {
    console.log("getOne", resource, params);
    return postgrestRestDataProvider.getOne(resource, params);
  },
  update: (resource: string, params: UpdateParams<any>) => {
    console.log("update", resource, params);
    return postgrestRestDataProvider.update(resource, params);
  },
  updateMany: (resource: string, params: UpdateManyParams<any>) => {
    console.log("updateMany", resource, params);
    return postgrestRestDataProvider.updateMany(resource, params);
  }
};
