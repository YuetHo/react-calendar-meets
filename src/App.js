import './App.css';
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import CalendarPage from './components/CalendarPage'
import MeetsPage from './components/MeetsPage'
import ErrorPage from './components/ErrorPage';
import NavbarTop from './components/NavbarTop';
import NavbarSide from './components/NavbarSide';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './components/Protected'; // put webpage component inside protected element to block access to page if not user
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom' // react-router-dom allows us to have multiple webpages


function App() {
  return (
    <div className='app'>
      <Router>
        {/* Auth functions have to be used within the AuthContextProvider component */}
        <AuthContextProvider> 
          <NavbarTop />
          <NavbarSide />

          <div className='contentContainer'>
            <Routes>
              <Route path='/' element={<Protected><HomePage /></Protected>} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/calendar' element={<Protected><CalendarPage /></Protected>} />
              <Route path='/meets' element={<Protected><MeetsPage /></Protected>} />
              <Route path='*' element={<Protected><ErrorPage /></Protected>} />
            </Routes>
          </div>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
