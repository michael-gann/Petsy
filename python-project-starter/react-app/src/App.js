import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage/Homepage"
import Footer from "./components/Footer/Footer"
import PetDetail from "./components/PetDetail/PetDetail"
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ItemsList from "./components/ItemsList";
import ItemDetail from "./components/ItemDetail"
import PetsList from "./components/Pets/PetsList"
import User from "./components/User";
import { authenticate } from "./services/auth";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [sessionUser, setSessionUser] = useState(undefined)

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
        setSessionUser(user);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar setAuthenticated={setAuthenticated} isAuthenticated={authenticated} />
      <Route path="/login" exact={true}>
        <LoginForm
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/sign-up" exact={true}>
        <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </Route>
      <ProtectedRoute path="/items" exact={true} authenticated={authenticated}>
        <ItemsList />
      </ProtectedRoute>
      <ProtectedRoute path="/pets" exact={true} authenticated={authenticated}>
        <PetsList />
      </ProtectedRoute>
      <ProtectedRoute path="/items/:id" exact={true} authenticated={authenticated}>
        <ItemDetail />
      </ProtectedRoute>
      <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
        <User />
      </ProtectedRoute>
      <Route path="/" exact={true} authenticated={authenticated}>
        <Homepage />
      </Route>
      <Route path="/pets/:id" exact={true}>
        <PetDetail user={sessionUser}/>
      </Route>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
