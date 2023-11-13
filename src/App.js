import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // BEM
    <Router>
      <div className="app">

        <Routes>
          <Route path='/login' element={<>
            <Login />
          </>} />

          <Route path='/checkout' element={<>
            <Header />
            <Checkout />
            <Footer />
          </>} />

          <Route path='/' element={<>
            <Header />
            <Home />
            <Footer />
          </>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
