import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Watchlist from './pages/Watchlist';
import Assets from './pages/Assets';
import Login from './pages/Login';
import Nav from './components/Nav';
//Style
import './App.css';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/watchlist' element={<Watchlist/>}/>
        <Route path='/assets' element={<Assets/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
    </Router>
  );
}

export default App;
