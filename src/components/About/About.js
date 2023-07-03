
import './About.css';
import React,{useState} from 'react'
import Resume from '../../Resume/Resume';
import Popup from '../About/Popup';

function About() {
  const [showResume,setShowResume] = useState()
  const handleResume = () =>{
    setShowResume(true);
  }
  const handleClosePopup = () => {
    setShowResume(false);
  };
  return (
    <>
    <div className='About'>
<p className='para'><span className='heading'>Hi there. I am Suman Ghosh. I am a full stack web developer.</span>
  <br></br>
     From the first time i am learned the programming languages when i am in my college here i am learned basic knowledge
      of java c/c++ this year of 2020.
     
     And this thing really inspired me a lot so after completing my graduation from the branch of computer science 
      i am joining Newton School for full-stack-web-development course.
     
     Here i am learned about java,javascript,react,html,css and node js,redux also make some good project on this skills</p>
     <div className='detailse'>
    <div className='all-detailse'>
        <p>Name : Suman Ghosh</p>
        <p>Email : sumanghoshcs@outlook.com</p>
        <p>Adress : West Bengal/Kolkata</p>
        <p>Phone : 7699192575</p>
      </div>
      <div>
        <p>Role : Frontend Developer</p>
        <p>Graduate : Computer Science</p>
        <p>University : Vidyasagar University\Medinipur</p>
        <p>College : Chandrakona Vidyasagar Mohavidalaya</p>
        </div>
      </div>
     {!showResume && (
        <button onClick={handleResume} className='resume-btn'>
          View Resume
        </button>
      )}
      {showResume && (
        <Popup onClose={handleClosePopup}>
          <Resume />
        </Popup>
      )}
   </div>
    </>
  )
}

export default About