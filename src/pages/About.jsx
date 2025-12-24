import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>

      {/* Intro Section */}
      <div className="simple-box">
        <p>
          Hi! I'm <strong>Edison Shrestha</strong> from Nepal. I started 
          coding after high school and I really enjoy building websites.
        </p>
      </div>

      {/* Education Section */}
      <div className="simple-box">
        <h3>Education</h3>
        <p><strong>Bachelor's Degree:</strong> Currently in 3rd Semester</p>
        <p><strong>High School (+2):</strong> Successfully Completed</p>
      </div>

      {/* Projects Section */}
      <div className="simple-box">
        <h3>My Projects</h3>
        <div className="project-item">
          <strong>Amazon Clone</strong> - Built with React
        </div>
        <div className="project-item">
          <strong>Tic-Tac-Toe</strong> - Built with JavaScript
        </div>
        <div className="project-item">
          <strong>Rock-Paper-Scissors</strong> - Basic Web Game
        </div>
      </div>
    </div>
  );
};

export default About;