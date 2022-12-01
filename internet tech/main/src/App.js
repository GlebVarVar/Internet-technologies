import './App.css';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


import {Home, User, AllUsers} from './pages';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/allusers/:userid",
    element: <User />,
  },
  {
    path: "/allusers",
    element: <AllUsers />,
  }
]);

function App() {
  return (
    <div className="App">
      <NavBar/>
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
