import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Academic</span>
          <br /> Career
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Began My School Journey</h4>
                <h5>The Aditya Birla Public School, Veraval</h5>
              </div>
              <h3>2014</h3>
            </div>
            <p>
            Started my academic journey with curiosity and enthusiasm, building the foundation of my education.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Primary Education</h4>
                <h5>Nursery - Class 1</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
            Developed strong fundamentals in core subjects like Mathematics, Science, and Language, along with discipline and learning habits.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Middle School Growth</h4>
                <h5>Class 1 - Class 9</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
            Enhanced analytical thinking, problem-solving skills, and actively participated in academics and co-curricular activities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Achievement in Sports</h4>
                <h5>Co-Curricular Activities</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
            Achieved state-level recognition in chess, strengthening strategic thinking, focus, and decision-making abilities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary Education (Class 10)</h4>
                <h5>Currently Studying</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            Currently focusing on academic excellence while developing skills in technology and programming. Continuously working towards personal and intellectual growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
