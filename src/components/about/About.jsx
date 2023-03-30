import React from 'react'
import { Link } from 'react-router-dom'
import { RiFindReplaceLine } from "react-icons/ri"
import me from "../../assets/founder.jpeg"

const About= ()=> {
  return (
      <section className='about'>
          <main>
              <h1>About Us</h1>
              <article>
                  <h4>Dhwani</h4>
                  <p>
                      We Provide all types of musical instruments used in day to day life.<br /><br />
                      Dhwani meaning sound, melody or music.
                      Musical instruments have been used since earliest times for a variety of purposes,
                      ranging from the entertainment of concert audiences to the accompaniment of dances,
                      rituals, work, and medicine.
                  </p>
                  
                  <p>Explore the various types of musical instruments.
                      Click below to see the menu. </p>
                  
                  <Link to="/#menu">
                      <RiFindReplaceLine />
                  </Link>
              </article>
              <div>
                <h2>Founder</h2>
                <article>
                      <div>
                          <img src={me} alt="Founder" />
                          <h3>Akash</h3>
                      </div>
                      <p>I am the founder of this website.
                          Our aim is to provide best quality and
                          various varities of musical istruments
                          in the world.
                      </p>
                </article>  
              </div>
          </main>
    </section>
  )
}

export default About