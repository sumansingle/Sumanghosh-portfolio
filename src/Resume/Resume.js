import React from 'react';
import './Resume.css';

const ResumeComponent = () => {
  const resumePdfUrl = 'https://drive.google.com/file/d/1E9s1m4LBA3UrFlno9i3oN-6LqsBo7rvd/view?usp=sharing'; // Replace with the actual URL of your resume PDF

  return (
    <div className="resume-container">
      <div className="resume-box">
        <iframe src={resumePdfUrl} title="Resume" className="resume-iframe" />
      </div>
      <a href={resumePdfUrl} target="_blank" rel="noopener noreferrer" className="resume-link">
        View Resume
      </a>
    </div>
  );
};

export default ResumeComponent;
