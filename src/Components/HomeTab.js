import React from 'react'
import Navbar from './Navbar'
import Dp1 from '../Asset/Dp1.jpg'
import Dp2 from '../Asset/Dp2.png'
import { useEffect } from 'react'
import './Main.css';
// import './Home'
export default function HomeTab() {
  useEffect(() => {
    const MainCont = document.getElementById('MCont');
    const Cont2 = document.getElementById('Cont2');
    const Dp2Photo = document.getElementById('Dp2Photo');
    const SkillTag = document.getElementById('SkillTag');
    const skills = [
      document.getElementById('skill1'),
      document.getElementById('skill2'),
      document.getElementById('skill3'),
      document.getElementById('skill4'),
      document.getElementById('skill5'),
    ];

    // Prevent errors if elements are missing
    if (!MainCont || !Cont2 || !Dp2Photo || !SkillTag || skills.includes(null)) {
      console.warn("Some elements not found. Animation skipped.");
      return;
    }
    setTimeout(() => {
      MainCont.style.width = '130%';
    }, 1000);

    setTimeout(() => {
      Cont2.style.marginLeft = '15rem';
    }, 2000);

    setTimeout(() => {
      Dp2Photo.style.transform = 'translateX(0%)';
    }, 2800);

    setTimeout(() => {
      SkillTag.style.transform = 'translateX(0%)';
    }, 3800);

    skills.forEach((skill, index) => {
      setTimeout(() => {
        skill.style.transform = 'translateX(-22.3rem)';
      }, 4800 + index * 1000);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="MainContent" id="MCont">
        <div className="Content1">
          <div className="Dp">
            <img src={Dp1} alt="" className="Dp1Photo" />
          </div>
          <div className="Bio">
            <h2 className="BioTag">Bio..</h2>
            <p className="BioContent">
              Hi, I'm <b>Jumman Sk</b>, a passionate <b>Front-End Developer</b> with expertise in
              crafting responsive, user-friendly web applications. I specialize in
              <b> JavaScript, React, HTML5, CSS3</b> and modern frameworks to build seamless digital
              experiences.
            </p>
          </div>
        </div>
        <div className="Content2" id="Cont2">
          <div className="Dp2" id="Dp2">
            <img src={Dp2} alt="" className="Dp2Photo" id="Dp2Photo" />
          </div>
          <div className="Skills">
            <h2 className="SkillTag" id="SkillTag">Skills</h2>
            <li className="SkillList" id="skill1">HTML5</li>
            <li className="SkillList" id="skill2">CSS3</li>
            <li className="SkillList" id="skill3">JavaScript</li>
            <li className="SkillList" id="skill4">React</li>
            <li className="SkillList" id="skill5">Bootstrap</li>
          </div>
        </div>
      </div>
      <footer className="footer">
        © 2023-2025. All Rights Reserved
      </footer>
    </div>
  );
}

