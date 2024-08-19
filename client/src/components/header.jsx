export const Header = () => {
    return (
      <header>
        <div className="container">
          <div className="nav_bar">
            <h3>Blogs</h3>
            <ul className="pagelist">
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
            <div className="header_btn">
              <button>
                Login
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <button>
                Sign Up
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  };
  