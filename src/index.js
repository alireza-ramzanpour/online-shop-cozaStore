import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home/Home';
import Footer from './components/Footer';
import Products from './pages/home/Products';
import Contact from './pages/home/Contact';
import About from './pages/home/About';
import Blog from './pages/home/Blog';
import Shop from './pages/home/Shop';
import Product, { loader as productLoader } from './pages/home/Product';
import { Provider } from 'react-redux';
import Store from './store/Store';
import Login from './pages/home/Login';
import Logout, { loader as logoutLoader } from './pages/home/Logout';
import Cart from './pages/home/Cart';
import Admin from './pages/admin/Admin';
import Dashboard from './pages/admin/Dashboard';
import Carts from './pages/admin/Carts';
import Clothes from './pages/admin/Clothes';
import Users from './pages/admin/Users';
import AddHistory from './components/AddHistory';
import AddUser from './components/AddUser';
// import AddToClothes from './pages/admin/AddToClothes';
// import AddUser from './pages/admin/AddUser';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'header',
        element: <Header />
      },
      {
        path: 'footer',
        element: <Footer />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'logout',
        element: <Logout />,
        // loader: logoutLoader
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'products/:name',
        element: <Product />,
        loader: productLoader
      },
      {
        path: 'history',
        element: <AddHistory />
      },
      {
        path: 'adduser',
        element: <AddUser />
      },
      {
        path: 'admin',
        element: <Admin />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />
          },
          {
            path: 'carts',
            element: <Carts />
          },
          {
            path: 'clothes',
            element: <Clothes />
          },
          {
            path: 'users',
            element: <Users />
          },
        ]
      }

    ]
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
