import { BrowserRouter, Route } from "react-router-dom";
import homescreen from "./screen/homescreen";
import productscreen from "./screen/productscreen";
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
          <Route path="/product/:id" component={productscreen}></Route>
          <Route path="/" component={homescreen} exact></Route>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
