import React, { useState } from "react";
import "../styles/Experience.css";


export function ExperienceDetail({ addExperience }) {
  const [formState, setFormState] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",

  });

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    addExperience(formState);
    setFormState({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };


  return (
    <div className="educationSection">
      <form form onSubmit={handleSubmit}>
        <h2>Experience Details</h2>
        <label>
          <span>Company</span>
          <input
            type="text"
            name="company"
            // required
            value={formState.company}
            onChange={handleExperienceChange}
          />
          <span>Position</span>
          <input
            type="text"
            name="position"
            // required
            value={formState.position}
            onChange={handleExperienceChange}
          />
          <span>Start Date</span>
          <input
            type="date"
            name="startDate"
            // required
            value={formState.startDate}
            onChange={handleExperienceChange}
          />
          <span>End Date</span>
          <input
            type="date"
            name="endDate"
            // required
            value={formState.endDate}
            onChange={handleExperienceChange}
          />
          <span>Location</span>
          <input
            type="text"
            name="location"
            // required
            value={formState.location}
            onChange={handleExperienceChange}
          />
          <span>Description</span>
          <input
            type="textArea"
            name="description"
            // required
            value={formState.description}
            onChange={handleExperienceChange}
          />
        </label>
        <button type="submit">Add Experience</button>
      </form >
    </div>
  )
}


// Display Component
export function ExperienceDisplay({ experienceDetails, onDelete }) {
  return (
    <div className="experienceDisplay">
      <div className="dateandLocation">
        <p>
          {experienceDetails.startDate && experienceDetails.endDate
            ? `${experienceDetails.startDate} - ${experienceDetails.endDate}`
            : "01/09/2017 - 01/09/2020"}
        </p>
        {experienceDetails.location || "London"}
      </div>
      <div className="educationAndDegree">
        <p>
          <strong> {experienceDetails.company || "University of Greenwich"}</strong>
        </p>
        <p>
          {experienceDetails.position || "Bachelors in Computer Science"}
        </p>
        <p>
          {experienceDetails.description || "Bachelors in Computer Science"}
        </p>
        <button className="deleteExperience" onClick={onDelete}>
          X
        </button>
      </div>
    </div >
  );
}
