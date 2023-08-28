import React from 'react';
import ProfileImage from "./images/picAndrea.JPG";
import './banner.css'

const Banner = () => {
    return(
        <>
      
        <section>

            <div className="header">
              <img src={ProfileImage} alt=" Andrea Rivera" className="homeImage" />
              </div>
             
               <div className="fade_In">
              <h2>Changing careers to become a great Programmer & Web Developer</h2>
              <p className="homeParagraph">
                "I am a web development graduate looking for opportunities as a Front- End developer 
                also with an interest in the Back-end. I am transitioning from the electronics to the 
                software industry where I can continue automating processes and creating interesting apps."
              </p>
              </div>
        
          </section>
        </>
    )
}

export default Banner

