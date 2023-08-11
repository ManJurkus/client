import  { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';


export function BasicLayout() {
   
    return (
      <>
        <header>
            <Header />
        </header>
        <main>
            <Outlet />
        </main>

        <footer>
            Footer
    
        </footer>  
      </>
    );
  }
  
  
  