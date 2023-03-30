import React from 'react'
import { motion } from "framer-motion";
import me from "../../assets/founder.jpeg"
const Founder = () => {

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
      <section className='founder'>
          <motion.div {...options}>
              <img src={me} alt="Founder" height={100} width={80} />
              <h3>Akash</h3>
              <p>Hey, I am the founder of this website.<br />
                  Our aim is to provide best quality and various
                  varities of musical istruments in the world.
              </p>
          </motion.div>
    </section>
  )
}
export default Founder;
