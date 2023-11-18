import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';

function App() {
  const [{ }, dispatch] = useStateValue(); // eslint-disable-next-line
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
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

          <Route path='/payment' element={<>
            <Header />
            <h1>This is payment page</h1>
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
