import React from "react";
import "../Career/Career.css";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Career() {
  return (
    <>
      <div class="container">
      <Typography variant="h4">Career</Typography>
        <div className="career">
          <div class="line-skill"></div>
          <div className="carrer-details">
            <div className="carrer-circle-job">
              <div id="circle"></div>
              <div class="job">
                <FontAwesomeIcon icon={faCode} size="2x" />
                <Typography variant="h5">Junior UI Developer</Typography>
                <h3>RealBooks, Kolkata</h3>
                <p>September, 2023 - Present</p>
                <p>
                  Creating responsive and interactive UI with React.Build A
                  Static Website Bitdecoders.com.
                </p>
              </div>
            </div>
            <div className="carrer-circle-jobs">
              <div id="circle"></div>
              <div class="job">
                <FontAwesomeIcon icon={faComputer} size="2x" />
                <Typography variant="h5">Full Stack Web Developer Trainee</Typography>
                <h3>Newton School, Bangalore</h3>
                <p>Jul, 2022 - September, 2023</p>
                <p>
                  Here i am learned about html, css, react, javascript, node and
                  also implement some big project on using this language
                </p>
              </div>
            </div>

            <div className="carrer-circle-job">
              <div id="circle"></div>
              <div class="job">
                <FontAwesomeIcon icon={faCode} size="2x" />
                <Typography variant="h5">Project Intern</Typography>
                <h3>Wellsoul, Gurgaion</h3>
                <p>October, 2020 - April, 2021</p>
                <p>
                  Creating responsive and interactive UI with React.Build A
                  Static Website Bitdecoders.com.
                </p>
              </div>
            </div>

            <div className="carrer-circle-job">
              <div id="circle"></div>
              <div class="job">
                <FontAwesomeIcon icon={faGraduationCap} size="2x" />
                <Typography variant="h5">College</Typography>
                <h3>
                  Department of Computer Science(B.sc), Chandrakona Vidyasagar
                  Mohavidyalaya(Vidyasagar University), Medinipur
                </h3>
                <p>July, 2019 - September, 2019</p>
                <p>
                  Completed college with grade of 87% here i am starting my
                  first knowlege in coding
                </p>
              </div>
            </div>

            <div className="carrer-circle-job">
              <div id="circle"></div>
              <div class="job">
                <FontAwesomeIcon icon={faSchool} size="2x" />
                <Typography variant="h5">School</Typography>
                <h3>Science, Jara High School, Jara</h3>
                <p>March, 2018 - June, 2019</p>
                <p>
                  Pass the higher secendary exmination subject is
                  phys,chem,math,bio,ben,eng percentage is 63%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Career;
