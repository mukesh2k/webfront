import { BrowserRouter, Route } from "react-router-dom";
import Homescreen from "./screen/Homescreen";
import Productscreen from "./screen/Productscreen";
function App() {
  return (
    <BrowserRouter>
      <div className="grid-con">
        <header className="row">
          <div>
            <a className="brand" href="index.html">
              Website
            </a>
          </div>
          <div>
            <a href="cart.html">cart</a>
            <a href="signin.html">signin</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={Productscreen}></Route>
          <Route path="/" component={Homescreen} exact></Route>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
