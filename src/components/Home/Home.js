import React from 'react'
import '../Home/Home.css';
import Examples from '../Name/examples';
import Career from '../Career/Career';
import Skills from '../Skill/Skill';
import Resume from '../../Resume/Resume';
function Home() {
  return (
    <>
    <div className='home'>
    <div class="typewriter">
		<span>H</span>
		<span>i</span>
		<span>&nbsp;</span>
		<span>T</span>
		<span>h</span>
		<span>e</span>
		<span>r</span>
    <span>e</span>
    <span>,</span>
	</div>
    <p className='myname'> I am Suman</p>
    <Examples/>
    <p className='text'><marquee width="80%" direction="left" height="100px">
    Helping people writing quality code & softwares. 
    </marquee></p>
    </div>
    <Career/>
    <Skills/>
    <Resume/>
    </>
  )
}

export default Home
