import React from "react";
import { Provider } from "react-redux";
import store from './redux/store';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './components/views/HomePage/HomePage';

function App() {

  const routes = [
    {
      path: '/',
      component: <HomePage />,
    },
  ]

  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            {routes.map(route => (
              <Route key={route.path} path={`${process.env.PUBLIC_URL}${route.path}`} element={route.component} />
            ))}
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
