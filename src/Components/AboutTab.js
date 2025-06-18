import React from 'react'
import Navbar from './Navbar'
export default function AboutTab() {
  return (
    <div>
      <Navbar/>
      <div className="AboutContainer">
        <div className="contents">
            <div className="intro">
                <div className="IntroCap">Itroduce...</div>
                <div className="IntroContent">
                    Hey,me <b>Jumman Sk</b> from south 24 west bengal. I completed Higher secondary exam from a Goverment School.
                    after that i completed a diploma course of Computer Application and programming from a reputed institution.
                    I got 60% of knowledge from that institute and remaining 40% i gain from youtube videos. My hobby is playing
                    cricket. I am a fresher and want to start my carrier in a software industry, Thank You.
                </div>
            </div>
            <div className="Career">
                <div className="CarrerCap">Carrer Objective...</div>
                <div className="CarrerContent">
                    Seeking an opportunity to make optimum utilization of my acquired knowledge and skills as a Front-End-Devloper 
                    in the software industry and to contribute in the best possible way for the betterment of the Organization and 
                    Self  
                </div>
            </div>
            <div className="Additional">
                <div className="AdditionalCap">Additional Skills...</div>
                <div className="AdditionalContent">
                    I also have knowledge in CoreJava,C++,C and python(basic).
                </div>
            </div>
        </div>
        <div className="photos"></div>
    </div>
    <footer class="footer">copyright &copy; 2023-2025.All Right Reserved</footer>
    </div>
  )
}
