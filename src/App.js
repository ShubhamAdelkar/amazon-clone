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
        <Header />
        <Routes>
          <Route path='/checkout' element={<>
            <Checkout />
          </>} />

          <Route path='/' element={<>
            <Home />
          </>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
