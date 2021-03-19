import React from "react";
import {Link, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { HomePage, ContactsPage } from "./pages";

const App = () => {
  return (
    <div>
      <Header/>
        <nav className="navApp">
          <Link to="/">Home page</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
        <Route exact={true} path="/" component={HomePage}></Route>
        <Route path="/contacts" component={ContactsPage}></Route>
        <Footer/>
    </div>
  );
}

export default App;
