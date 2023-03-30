import React from 'react';
import { motion } from "framer-motion";



const MenuCard=({itemNum, musicaliSrc, price, title, handler, delay=0})=> {
    return (
        <motion.div className='menucard'
            initial={{
                x: "-100%",
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            transition={{
                delay,
            }}>
            <div>Item {itemNum}</div>
            <main>
                <img src={musicaliSrc} alt={itemNum} style={{width:220, height:250, backgroundColor: "$reddark"}} />

                <h5>₹{price}</h5>

                <p>{title}</p>

                <button onClick={()=>handler()}>Buy Now</button>

            </main>
        </motion.div>
  )
}
export default MenuCard;