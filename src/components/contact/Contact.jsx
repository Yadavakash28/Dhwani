import React from 'react'
import { motion } from "framer-motion";
import video from "../../assets/guitar.mp4"


const Contact=()=> {
  return (
      <section className='contact'>
          <motion.form
              initial={{
              x: "-100vw",
              opacity: 0,
            }}
              animate={{
                x: 0,
                opacity: 1,
            }}
              transition={{ delay: 0.2 }}
            >
              <h2>Contact Us</h2>
              <video autoPlay loop muted id='video'>
              <source src={video} type="video/mp4" />
              </video>
              <input type="text" placeholder='Name' name='' id='' />
              <input type="email" placeholder='Email' name='' id='' />

              <textarea placeholder='Message...' cols="30" rows="10"></textarea>

              <button type='submit'>Send</button>
          </motion.form>
          {/* <motion.div className='formBorder'>
              <motion.div>
                  <img src="" alt="" />
              </motion.div>
          </motion.div> */}
    </section>
  )
}

export default Contact;