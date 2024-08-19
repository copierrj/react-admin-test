import {
  Admin,
  Layout,
  Resource,
  defaultTheme,
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

const myTheme = {
  ...defaultTheme,
  components: {
    ...defaultTheme.components,
    MuiAppBar: {
      defaultProps: {
        variant: "regular"
      },
      styleOverrides: {
        root: {
          background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
        }
      }
    },
    MuiChip: {
      defaultProps: {
        variant: "outlined"
      },
      styleOverrides: {
        root: {
          borderRadius: "10px"
        },
        label: {
          paddingRight: "100px",
          paddingLeft: "100px"
        }
      }
    },
    MuiButton: {
      defaultProps: {
        variant: "outlined"
      }
    }
  }
}

export const App = () => (
  <Admin theme={myTheme} dataProvider={dataProvider} authProvider={authProvider} layout={MyLayout}>
    <Resource name="film" list={FilmList} show={FilmShow} edit={FilmEdit}/>
    <Resource name="actor" list={ActorList} show={ActorShow}/>
    <Resource name="customer" list={CustomerList} show={CustomerShow} edit={CustomerEdit}/>
  </Admin>
);
