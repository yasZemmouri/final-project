import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Watchlist from './pages/Watchlist';
import Assets from './pages/Assets';
import Nav from './components/Nav';
import Footer from './components/Footer';
//Style
import './App.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
  <GlobalProvider>
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/watchlist' element={<Watchlist/>}/>
        <Route path='/assets' element={<Assets/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
    </GlobalProvider>
  );
}

export default App;
