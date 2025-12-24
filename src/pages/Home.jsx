import "./Home.css";

const Home = () => {
  return (
    <div className="home-main">
      <header className="hero-simple">
        <p className="intro-text">Welcome to my portfolio</p>
        <h1>I am Edison Shrestha</h1>
        <p className="sub-text">
          A Bachelor's student and aspiring web developer.
        </p>
        <div className="home-buttons">
          <button className="btn-work">See My Projects</button>
        </div>
      </header>
    </div>
  );
};

export default Home;