import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import { Home, User, AllUsers } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AllUsers />
  },
  {
    path: '/:userid',
    element: <User />,
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
