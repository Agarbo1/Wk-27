import { createBrowserRouter, RouterProvider, NavLink, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'stocks',
        element: <Stocks />
      },
      {
        path: 'movies',
        element: <Movies />
      },
      {
        path: '*',
        element: <h1>Page Not Found</h1>
      }
    ]
  }
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
};

function Layout() {
  return (
    <div className='app'>
      <h1>App Component</h1>
      <nav className='comp nav'>
        <ul>
          <li>
          <NavLink className={({isActive}) => isActive? 'purple' : ''} to='/'>Home</NavLink>
          </li>
          <li>
          <NavLink className={({isActive}) => isActive? 'purple' : ''} to='/stocks'>Stocks</NavLink>
          </li>
          <li>
          <NavLink className={({isActive}) => isActive? 'purple' : ''} to='/movies'>Home</NavLink>
          </li>
        </ul>
      <main>
        <Outlet />
      </main>
      </nav>
    </div>
  )
}

export default App;
