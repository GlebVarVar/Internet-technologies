import './App.css';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import { Home, User, AllUsers } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/allusers/:userid',
    element: <User />,
  },
  {
    path: '/allusers',
    element: <AllUsers />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        <RouterProvider />
      </RouterProvider>
    </div>
  );
}


export default App;
