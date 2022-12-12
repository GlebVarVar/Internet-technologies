import NavBar from '../components/Navbar';
import { useParams } from 'react-router';
import data from '../store/data';
import Page404 from './Page404';

import {
  Maks,
  Daniil,
  Ksenia,
  Valery,
  Lev,
  Roman,
  Natalia,
  Vladislav,
  David,
  Alexander,
  Andrey,
  Petrov,
  Kirill,
  Dmitry,
  Ivan,
  Kukareko,
  Polina,
  Evgeniy
} from '../UsersPages/index';

const User = () => {
  const { userid } = useParams();

  let user = data.find((user) => user.route === userid);

  if (!user) {
    return <Page404 />;
  } else {
    let UserPage = null;

    switch (userid) {
      case 'valera':
        UserPage = Valery;
        break;
      // case 'denis':
        // UserPage = Denis;
        // break;
      case 'alexander':
        UserPage = Alexander;
        break;
      case 'daniil':
        UserPage = Daniil;
        break;
      case 'maxim':
        UserPage = Maks;
        break;
      // case 'alexey':
        // UserPage = Alexey;
        // break;
      case 'lev':
        UserPage = Lev;
        break;
      case 'david':
        UserPage = David;
        break;
      case 'dmitry':
        UserPage = Dmitry;
        break;
      case 'vladislav':
        UserPage = Vladislav;
        break;
      // case 'mikhail':
        // UserPage = Mikhail;
        // break;
      case 'ivan':
        UserPage = Ivan;
        break;
      // case 'gleb':
        // UserPage = Gleb;
        // break;
      case 'kukareko':
        UserPage = Kukareko;
        break;
      case 'polina':
        UserPage = Polina;
        break;
      case 'kirill':
        UserPage = Kirill;
        break;
      case 'ksenia':
        UserPage = Ksenia;
        break;
      case 'natalia':
        UserPage = Natalia;
        break;
      // case 'seredokhin':
        // UserPage = Seredokhin;
        // break;
      // case 'fomenko':
        // UserPage = Fomenko;
        // break;
      case 'roman':
        UserPage = Roman;
        break;
      case 'andrey':
        UserPage = Andrey;
        break;
      case 'evgeniy':
        UserPage = Evgeniy;
        break;
      case 'petrov':
        UserPage = Petrov;
        break;
      default:
        return (
          <Page404/>
        )
      

    }
    return (
      <>
        <NavBar />
        <UserPage />
      </>
    );
  }
};

export default User;
