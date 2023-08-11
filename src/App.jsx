import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BasicLayout } from './layout/BasicLayout';
import { Home } from './page/Home';
import { Page404 } from './page/Page404';
import { Register } from './page/Register';
import { Login } from './page/Login';
import { Dashboard } from './page/Dashboard';
import { UserLayout } from './layout/UserLayout';
import { UserContextProvider } from './context/UserContext';





function App() {
  return (
    <UserContextProvider>
      <BrowserRouter >
        <Routes >
          <Route Component={BasicLayout}> 
            <Route index path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>

          <Route Component={UserLayout}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>

          <Route Component={BasicLayout}>
            <Route path='*' element={<Page404 />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
