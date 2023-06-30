import React,{useState} from 'react'
import '../Home/Home.css';
import Photo1 from '../../assets/gangate.jpg';
import Examples from '../Name/examples';
import Career from '../Career/Career';
import Skills from '../Skill/Skill';
import Resume from '../../Resume/Resume';
import About from '../About/About'
import Popup from './Popup';
function Home() {
  const [showResume,setShowResume] = useState()
  const handleResume = () =>{
    setShowResume(true);
  }
  const handleClosePopup = () => {
    setShowResume(false);
  };
  return (
    <>
    <div className='home'>
<div className='intro'>
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
        <div>
        <p>Role : Frontend Developer</p>
        <p>Graduate : Computer Science</p>
        <p>University : Vidyasagar University\Medinipur</p>
        <p>College : Chandrakona Vidyasagar Mohavidalaya</p>
        </div>
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
  
 {/*<div className='upperdiv'>
    <div className='photo'><img src={Photo1} alt='' height={150} width={150}/></div>
    <div className='text-div'>
      <h4 className='name'>Suman Ghosh</h4>
      <h6 className='position'>Web Developer</h6>
    </div>
      </div>*/}
</div>
</div>
<div className='component-carr-skill'> 
  <div className='career'><Career/></div>
  <div className='skills'><Skills/></div>
</div>
    {/*<Resume/>*/}
    </>
  )
}

export default Home
