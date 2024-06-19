import {
  Admin,
  Layout,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { ReactQueryDevtools } from 'react-query/devtools';
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { FilmList } from "./FilmList";
import { FilmShow } from "./FilmShow";
import { FilmEdit } from "./FilmEdit";
import { ActorList } from "./ActorList";
import { ActorShow } from "./ActorShow";
import { CustomerList } from "./CustomerList";
import { CustomerShow } from "./CustomerShow";
import { CustomerEdit } from "./CustomerEdit";

const MyLayout  = (props: any) => {
  return (
    <>
      <Layout {...props} />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} layout={MyLayout}>
    <Resource name="film" list={FilmList} show={FilmShow} edit={FilmEdit}/>
    <Resource name="actor" list={ActorList} show={ActorShow}/>
    <Resource name="customer" list={CustomerList} show={CustomerShow} edit={CustomerEdit}/>
  </Admin>
);
