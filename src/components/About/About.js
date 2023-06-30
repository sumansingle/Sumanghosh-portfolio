import React from 'react';
import './About.css';

function About() {
  return (
    <>
    <div className='about'>About</div>
    <div className='about-container'>
    {/*<div className='about-photo'> <img src={Photo1} alt=''/></div>*/}
   <div className='about-text'>
    <h2 className='text-heading'>Hi there. I am Suman Ghosh. I am a full stack web developer.</h2>
     <p>From the first time i am learned the programming languages when i am in my college here i am learned basic knowledge
      of java c/c++ this year of 2020.
     </p>
     <p>And this thing really inspired me a lot so after completing my graduation from the branch of computer science 
      i am joining Newton School for full-stack-web-development course.
     </p>
     <p>Here i am learned about java,javascript,react,html,css and node js,redux also make some good project on this skills</p>
   </div>
   </div>
   {/*<ContactFrom/>*/}
    </>
  )
}

export default About