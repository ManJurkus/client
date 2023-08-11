import { Link } from 'react-router-dom'
import Logo2 from '../assets/logo2.png'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export function Header() {
  const ctx = useContext(UserContext);

  const userLoggedIn = ctx.user.loggedIn;

  const publicMenu = (
      <div className="col-md-3 text-end">
          <Link to='/login' className="btn btn-outline-primary me-2">Login</Link>
          <Link to='/register' className="btn btn-primary">Sign-up</Link>
      </div>
  );

  const userMenu = (
      <div className="col-md-3 dropdown text-end">
          <Link to="/" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
          </Link>
          <ul className="dropdown-menu text-small">
              <li><Link className="dropdown-item" to="/">New project...</Link></li>
              <li><Link className="dropdown-item" to="/">Settings</Link></li>
              <li><Link className="dropdown-item" to="/">Profile</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item" to="/">Sign out</Link></li>
          </ul>
      </div>
  );

   
    return (
      <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none" >
          <img width="100" src={Logo2} alt="Logo" />
        </Link>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
        <li><Link to="/" className="nav-link px-2">Features</Link></li>
        <li><Link to="/" className="nav-link px-2">Pricing</Link></li>
        <li><Link to="/" className="nav-link px-2">FAQs</Link></li>
        <li><Link to="/" className="nav-link px-2">About</Link></li>
      </ul>


      {userLoggedIn ? userMenu : publicMenu}

    </header>
  </div>






      //   <div className="container">
      //       <div className="row justify-content-center" > 
      //       <img class="mt-4" width="200" src={Logo2} alt="" />
            
      //       </div>
      //   <header className="flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      //     <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      //       <li><Link to="/" className="nav-link px-2 link-secondary">PRADŽIA </Link></li>
      //       <li><Link to="/" className="nav-link px-2">JUVELYRINIAI GAMINIAI </Link></li>
      //       <li><Link to="/" className="nav-link px-2">UŽSAKYTI GAMINĮ </Link></li>
      //       <li><Link to="/" className="nav-link px-2">MODELIAI JUVELYRAMS </Link></li>
      //       <li><Link to="/" className="nav-link px-2">ATSILIEPIMAI </Link></li>
      //       <li><Link to="/" className="nav-link px-2">APIE MANE </Link></li>
      //       <li><Link to="/" className="nav-link px-2">KONTAKTAI </Link></li>
      //     </ul>
    
      //   </header>
      // </div>
    );
  }
  
  