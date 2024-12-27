import React, { useState } from "react";
import "../styles/Education.css";

// Form Component
export function EducationDetail({ addEducation }) {
  // Local state for the form
  const [formState, setFormState] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEducation(formState);
    setFormState({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  };

  return (
    <div className="educationSection">
      <form form onSubmit={handleSubmit}>
        <h2>Education Details</h2>
        <label>
          <span>Institution</span>
          <input
            type="text"
            name="school"
            // required
            value={formState.school}
            onChange={handleEducationChange}
          />
          <span>Degree</span>
          <input
            type="text"
            name="degree"
            // required
            value={formState.degree}
            onChange={handleEducationChange}
          />
          <span>Start Date</span>
          <input
            type="date"
            name="startDate"
            // required
            value={formState.startDate}
            onChange={handleEducationChange}
          />
          <span>End Date</span>
          <input
            type="date"
            name="endDate"
            // required
            value={formState.endDate}
            onChange={handleEducationChange}
          />
          <span>Location</span>
          <input
            type="text"
            name="location"
            // required
            value={formState.location}
            onChange={handleEducationChange}
          />
        </label>
        <button type="submit">Add Education</button>
      </form >
    </div>
  );
}

export function EducationDisplay({ educationDetails, onDelete }) {
  return (
    <div className="educationDisplay">
      <div className="dateandLocation">
        <p>
          {educationDetails.startDate && educationDetails.endDate
            ? `${educationDetails.startDate} - ${educationDetails.endDate}`
            : "01/09/2017 - 01/09/2020"}
        </p>
        <p>{educationDetails.location || "London"}</p>
      </div>
      <div className="educationAndDegree">
        <p>
          <strong>{educationDetails.school || "University of Greenwich"}</strong>
        </p>
        <p>{educationDetails.degree || "Bachelors in Computer Science"}</p>
        <button className="deleteEducation" onClick={onDelete}>
          X
        </button>
      </div>
    </div>
  );
}
