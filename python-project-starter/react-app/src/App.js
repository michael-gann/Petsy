import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import PetDetail from "./components/PetDetail/PetDetail";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ItemsList from "./components/ItemsList";
import ItemDetail from "./components/ItemDetail";
import PetsList from "./components/Pets/PetsList";
import User from "./components/User";
import Cart from "./components/ShoppingCart/Cart";
import Search from "./components/Search/Search";
import { authenticate } from "./services/auth";
import ScrollToTop from "./components/ScrollToTop";

export const ScoreContext = createContext();
export const NumCartContext = createContext();

import "./App.css";

// import { setCartContext } from "./components/ShoppingCart/Cart";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [sessionUser, setSessionUser] = useState(undefined);
  const [results, setResults] = useState([]);
  const [scores, setScores] = useState({});
  const [numCartItems, setNumCartItems] = useState(0);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
        setSessionUser(user);
      }
      setLoaded(true);
    })();

    const fetchScores = async () => {
      const res = await fetch("/api/reviews");
      const scoresObj = await res.json();
      setScores(scoresObj);
    };
    fetchScores();

    const fetchCartNum = () => {
      let localItemsCart = JSON.parse(localStorage.getItem("cart"))
        ? JSON.parse(localStorage.getItem("cart"))
        : [{ 1: 0 }];
      let localPetsCart = JSON.parse(localStorage.getItem("petCart"))
        ? JSON.parse(localStorage.getItem("petCart"))
        : [{ 1: 0 }];
      let count = 0;
      localItemsCart.forEach((item) => {
        count += item[Object.keys(item)];
      });
      localPetsCart.forEach((item) => {
        count += item[Object.keys(item)];
      });
      setNumCartItems(count);
    };
    fetchCartNum();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <ScoreContext.Provider value={scores}>
      <BrowserRouter>
        <NumCartContext.Provider value={numCartItems}>
          <NavBar
            setResults={setResults}
            setAuthenticated={setAuthenticated}
            isAuthenticated={authenticated}
          />
        </NumCartContext.Provider>
        <ScrollToTop>
          <Route path="/search" exact={true}>
            <Search results={results}></Search>
          </Route>
          <Route path="/items" exact={true} authenticated={authenticated}>
            <ItemsList />
          </Route>
          <Route path="/pets" exact={true} authenticated={authenticated}>
            <PetsList />
          </Route>
          <Route path="/items/:id" exact={true} authenticated={authenticated}>
            <ItemDetail
              numCartItems={numCartItems}
              user={sessionUser}
              isAuthenticated={authenticated}
            />
          </Route>
          <ProtectedRoute
            path="/users/:userId"
            exact={true}
            authenticated={authenticated}
          >
            <User />
          </ProtectedRoute>
          <ProtectedRoute
            path="/cart"
            exact={true}
            authenticated={authenticated}
          >
            <Cart setNumCartItems={setNumCartItems} />
          </ProtectedRoute>
          <Route path="/" exact={true} authenticated={authenticated}>
            <Homepage />
          </Route>
          <Route path="/pets/:id" exact={true}>
            <PetDetail user={sessionUser} isAuthenticated={authenticated} />
          </Route>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </ScoreContext.Provider>
  );
}

export default App;
