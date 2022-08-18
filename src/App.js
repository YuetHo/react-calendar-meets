import './App.css';
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import CalendarPage from './components/CalendarPage'
import MeetsPage from './components/MeetsPage'
import Account from './components/Account';
import Signup from './components/SignupPage';
import NavbarTop from './components/NavbarTop';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './components/Protected';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom' // react-router-dom allows us to have multiple webpages

function App() {
  return (
    <div className='app'>
      <Router>
        <AuthContextProvider>
          <nav className='navBarTop'>
            <NavbarTop />
          </nav>
          <nav className='navBarSide'>
            <div>
              <Link to='/'> <button>Home</button> </Link>
              <Link to='/calendar'> <button>Calendar</button> </Link>
              <Link to='/meets'> <button>Meets</button> </Link>
            </div>
          </nav>

          <div className='contentContainer'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/account' element={<Protected><Account /></Protected>} />
              <Route path='/calendar' element={<CalendarPage />} />
              <Route path='/meets' element={<MeetsPage />} />
            </Routes>
          </div>
        </AuthContextProvider>
      </Router>

    </div>
  );
}

export default App;
