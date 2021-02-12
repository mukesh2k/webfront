function App() {
  return (
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
        <div className="row center">
          <div className="card">
            <a href="photo.html">
              <img src="img/photo.jpg" alt="" className="sty" />
            </a>
            <div className="card-bd">
              <a href="photo.html">
                <h2>PHONE</h2>
              </a>
              <div className="rate">
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <div className="prize">
                <h2>120$</h2>
              </div>
            </div>
          </div>

          <div className="card">
            <a href="photo.html">
              <img src="img/photo.jpg" alt="" className="sty" />
            </a>
            <div className="card-bd">
              <a href="photo.html">
                <h2>PHONE</h2>
              </a>
              <div className="rate">
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <div className="prize">
                <h2>120$</h2>
              </div>
            </div>
          </div>
          <div className="card">
            <a href="photo.html">
              <img src="img/photo.jpg" alt="" className="sty" />
            </a>
            <div className="card-bd">
              <a href="photo.html">
                <h2>PHONE</h2>
              </a>
              <div className="rate">
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <div className="prize">
                <h2>120$</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
