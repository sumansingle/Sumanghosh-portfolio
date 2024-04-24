import React from "react";
import "./Resume.css";

const ResumeComponent = () => {
  // Replace YOUR_FILE_ID with the actual ID of your Google Drive PDF
  const resumePdfId = "1WmmsOJRoO6FBuBTXGRA2jLr5Wf1zkzJ2";
  const resumePdfUrl = ` https://drive.google.com/file/d/${resumePdfId}/preview`;

  return (
    <div className="resume-container">
      <div className="resume-box">
        <iframe src={resumePdfUrl} title="Resume" className="resume-iframe" />
      </div>
      <a
        href={resumePdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        View Resume
      </a>
    </div>
  );
};

export default ResumeComponent;
