import React, { useState } from "react";
import "../styles/UserDetails.css";
import { EducationDetail, EducationDisplay } from "./Education";
import { ExperienceDetail, ExperienceDisplay } from "./Experience";

function UserDetails() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  const [educationDetailsList, setEducationDetailsList] = useState([]);

  const [experienceDetailsList, setExperienceDetailsList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const addEducation = (newEducation) => {
    setEducationDetailsList((prev) => [
      ...prev,
      { id: Date.now(), ...newEducation },
    ]);
  };

  const deleteEducation = (id) => {
    setEducationDetailsList((prev) => prev.filter((edu) => edu.id !== id));
  };

  const addExperience = (newExperience) => {
    setExperienceDetailsList((prev) => [
      ...prev,
      { id: Date.now(), ...newExperience },
    ]);
  };

  const deleteExperience = (id) => {
    setExperienceDetailsList((prev) => prev.filter((exp) => exp.id !== id));
  };


  return (
    <div className="container">
      {/* Form Sections */}
      <div className="formSection">
        {/* User Details Form */}
        <div className="userDetailsDiv">
          <h2 className="userDetailtitle">Personal Details</h2>
          <label>
            <span>Full name </span>
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
            />
            <span>Email </span>
            <input
              type="text"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
            />
            <span>Mobile </span>
            <input
              type="number"
              name="mobile"
              value={userDetails.mobile}
              onChange={handleChange}
            />
            <span>Address </span>
            <input
              type="text"
              name="address"
              value={userDetails.address}
              onChange={handleChange}
            />
          </label>
        </div>

        <EducationDetail addEducation={addEducation} />

        <ExperienceDetail addExperience={addExperience} />

      </div>


      {/* Display Section */}
      <div className="displayResult">
        <div className="displayuserDetail">
          <p className="fullName">
            <strong>{userDetails.name || "Adnan Chowdhury"}</strong>
          </p>
          <div className="contactInfo">
            <p>{userDetails.email || "adnanchowdhury7249@gmail.com"}</p>
            <p>{userDetails.mobile || "07840223023"}</p>
            <p>{userDetails.address || "London, UK"}</p>
          </div>
        </div>
        <div className="educationFooter">
          <span>Education</span>
        </div>
        {educationDetailsList.map((edu) => (
          <EducationDisplay
            key={edu.id}
            educationDetails={edu}
            onDelete={() => deleteEducation(edu.id)} // Correctly pass onDelete
          />
        ))}
        <div className="experienceFooter">
          <span>Experience</span>
        </div>
        {experienceDetailsList.map((exp) => (
          <ExperienceDisplay
            key={exp.id}
            experienceDetails={exp}
            onDelete={() => deleteExperience(exp.id)} // Correctly pass onDelete
          />
        ))}
      </div>
    </div>

  );
}

export default UserDetails;
