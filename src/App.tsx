import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { UserList } from "./UserList";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="posts" list={ListGuesser} />
    <Resource name="users" list={UserList} recordRepresentation="name" />
  </Admin>
);
