import puppetmaster from "/src/assets/puppetmaster-btn.svg";
import stringpuller from "/src/assets/stringpuller-btn.svg";
import wildcard from "/src/assets/thewildcard-btn.svg";

import "./App.css";
const Background = "/images/background-mobile.png";
function App() {
  const Logo = "svgs/logo-main.svg";
  return (
    <div style={{ backgroundImage: `url(${Background})`, height: "100vh" }}>
      <nav className="nav-container">
        <img className="logo" src={Logo} alt="puppeteer me logo" />
      </nav>
      <header className="header-container">
        <p className="header-p-1">
          Answer <span className="red-pop">5 questions</span> about someone you
          know
        </p>
        <p className="header-p-2">will your version of them match reality?</p>
      </header>

      <section className="category-container">
        <h2 className="category-title">CATEGORY</h2>

        <button className="puppetmaster-btn">
          <img
            className="puppetmaster-btn"
            src={puppetmaster}
            alt="puppetmaster button"
          />
        </button>
        <p className="category-info-1">
          How well do you <span className="red-pop">truly</span> understand
          them?
        </p>

        <button className="stringpuller-btn">
          <img
            className="stringpuller-btn"
            src={stringpuller}
            alt="stringpuller button"
          />
        </button>
        <p className="category-info-2">
          What <span className="red-pop">role</span> do they play in social
          settings?
        </p>

        <button className="wildcard-btn">
          <img className="wildcard-btn" src={wildcard} alt="wildcard button" />
        </button>
        <p className="category-info-3">
          What <span className="red-pop">surprises</span> lie beneath?
        </p>
      </section>
    </div>
  );
}

export default App;
