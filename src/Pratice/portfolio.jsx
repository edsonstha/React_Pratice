import "./portfolio.css";

function Portfolio() {
  return (
    <div className="container">
      <h1 className="title">Edison Shrestha</h1>
      <p className="subtitle">React & Web Development Learner</p>

      <section>
        <h2>About Me</h2>
        <p>
          I am Edison Shrestha. I am learning web development and React.
          I enjoy building small projects and improving my coding skills.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>Portfolio Website</li>
          <li>To-Do App</li>
          <li>Blog Page</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: edison@example.com</p>
      </section>

      <footer>
        <p>© 2025 Edison Shrestha</p>
      </footer>
    </div>
  );
}

export default portfolio;
