import './App.css';
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import CalendarPage from './components/CalendarPage'
import MeetsPage from './components/MeetsPage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom' // react-router-dom allows us to have multiple webpages

function App() {
  return (
    <div className='app'>

      <Router>
        <nav className='navBarTop'>
          <Link to='/login'> <button>Login</button> </Link>
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
            <Route path='/calendar' element={<CalendarPage />} />
            <Route path='/meets' element={<MeetsPage />} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
