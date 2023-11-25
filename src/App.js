import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Payment from './Payment';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_live_51JwnC5SFI3S1gLTCwWKRHSgVykGj6kJ7gTF7ZQmu9oUbbphRUkbd6qOBJ7NwREfd9bwl5NjRyJHETUIKCHlL3aVg00qCOmb5Li');

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
            <Elements stripe={promise}>
              < Payment />
            </Elements>
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
