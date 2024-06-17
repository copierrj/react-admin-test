import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { FilmList } from "./FilmList";
import { FilmShow } from "./FilmShow";
import { ActorList } from "./ActorList";
import { ActorShow } from "./ActorShow";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="film" list={FilmList} show={FilmShow}/>
    <Resource name="actor" list={ActorList} show={ActorShow}/>
  </Admin>
);
