import React from 'react'
import Navbar from './Navbar'
export default function ContactTab() {
  return (
    <div>
        <Navbar/>
      <div className="MainContent2">
        <h1 className="ContactHeading">Contact Me</h1>
        <div className="ContactCont">
            <input type="text" placeholder="Your Name" id="Name"/>
            <input type="email" name="email" id="email" placeholder="Your Email"/>
            <textarea name="area" id="Des" placeholder="Description"></textarea>
            <button type="submit" className="SubBtn">Submit</button>
        </div>
    </div>
    <footer className="footer">
        © 2023-2025. All Rights Reserved
      </footer>
    </div>
  )
}
