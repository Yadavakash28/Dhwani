import React from 'react'
import { motion } from "framer-motion";
import Founder from './Founder';
import Menu from './Menu';
import amusic from '../../assets/audio1.mp3'

const Home = () => {

    const options = {
        initial: {
            x: "-100%",
            opacity: 0,
        },
        whileInView: {
            x: 0,
            opacity: 1
        }
  }

  return (
    <>
        <section className='home'>
        <div>
              <motion.h1 {...options}>Dhwani</motion.h1>
              <motion.p {...options}
                  transition={{ delay: 0.1, }}>
                  "Find the artist within YOU"
              </motion.p>
            <audio autoPlay loop ><source src={amusic} type="audio/mp3" /></audio>
        </div>

          <motion.a href="#menu"
              initial={{ y: "-100%", opacity: 0, }}
              whileInView={{ y: 0, opacity: 1, }}>
              Explore Menu
          </motion.a>  
        </section>
          
      <Founder />   
      <Menu />
    </>
  )
}
export default Home;