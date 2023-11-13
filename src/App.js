import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // BEM
    <Router>
      <div className="app">

        <Routes>
          <Route path='/login' element={<>
            <h1>LogIn Page</h1>
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
