import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "[Full Name]",
    phone: "",
    email: "",
    portfolio: "",
    institute: "",
    course: "",
    educationDuration: "",
    role: "",
    organisation: "",
    experienceDuration: "",
    responsibilities: "",
    skills: "",
    projects: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <header className="header">
        <h1>CV Builder</h1>
      </header>
      <div className="main-content">
        <form className="form-section">
          <div className="personal-info">
            <h2> Personal Info </h2>
            <label>
              Full Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Phone
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <label>
              Email
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Portfolio
              <input
                type="text"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="education">
            <h2> Education </h2>
            <label>
              Institute
              <input
                type="text"
                name="institute"
                value={formData.institute}
                onChange={handleChange}
              />
            </label>
            <label>
              Course
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
              />
            </label>
            <label>
              Duration
              <input
                type="text"
                name="educationDuration"
                value={formData.educationDuration}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="experience">
            <h2> Experience </h2>
            <label>
              Role
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
              />
            </label>
            <label>
              Organisation
              <input
                type="text"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
              />
            </label>
            <label>
              Duration
              <input
                type="text"
                name="experienceDuration"
                value={formData.experienceDuration}
                onChange={handleChange}
              />
            </label>
            <label>
              Responsibilities
              <textarea
                name="responsibilities"
                value={formData.responsibilities}
                onChange={handleChange}
              ></textarea>
            </label>
          </div>

          <div className="skill">
            <h2> Skills </h2>
            <label>
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleChange}
              ></textarea>
            </label>
          </div>

          <div className="project">
            <h2> Projects </h2>
            <label>
              <textarea
                name="projects"
                value={formData.projects}
                onChange={handleChange}
              ></textarea>
            </label>
          </div>
        </form>

        <div className="preview-section">
          <h1>{formData.name}</h1>
          <p>
            <strong>Phone:</strong> {formData.phone}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Portfoilio:</strong> {formData.portfolio}
          </p>

          <h2>Education</h2>
          <div>
            <p>
              <strong>Institute:</strong> {formData.institute}
            </p>
            <p>
              <strong>Duration:</strong> {formData.educationDuration}
            </p>
            <p>
              <strong>Course:</strong> {formData.course}
            </p>
          </div>

          <h2>Experience</h2>
          <div>
            <p>
              <strong>Role:</strong> {formData.role}
            </p>
            <p>
              <strong>Organisation:</strong> {formData.organisation}
            </p>
            <p>
              <strong>Duration:</strong> {formData.experienceDuration}
            </p>
            <p>
              <strong>Responsibilities:</strong> {formData.responsibilities}
            </p>
          </div>

          <h2>Skills</h2>
          <div>
            <p>
             {formData.skills}
            </p>
          </div>

          <h2>Projects</h2>
          <div>
            <p>{formData.projects}</p>
          </div>
        </div>
      </div>
      </div>
  );
}

export default App;
