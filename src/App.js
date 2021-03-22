import React from "react";
// import { Link, Route } from "react-router-dom";
import { HomePage, HeaderSection, FooterSection } from "./pages";

const App = () => {
  return (
    <div>
      <HeaderSection />
      <main>
        <HomePage />
        {/* <nav className="navApp">
          <Link to="/">Home page</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
        <Route exact={true} path="/" component={HomePage}></Route>
        <Route path="/contacts" component={ContactsPage}></Route> */}
      </main>
      <FooterSection />
    </div>
  );
};

export default App;
