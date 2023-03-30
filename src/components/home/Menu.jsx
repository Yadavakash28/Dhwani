import React from 'react'
import MenuCard from './MenuCard';
import musicali1 from '../../assets/musicali1.png'
import musicali2 from '../../assets/musicali2.png'
import musicali3 from '../../assets/musicali3.png'
import musicali4 from '../../assets/musicali4.png'
import musicali5 from '../../assets/musicali5.png'
import musicali6 from '../../assets/musicali6.png'
import musicali7 from '../../assets/musicali7.png'
import musicali8 from '../../assets/musicali8.png'
import musicali9 from '../../assets/musicali9.png'
// import musicali10 from '../../assets/musicali10.jpg'


const Menu = () => {

    const addToCartHandler = ( itemNum ) => { };

  return (
    <section id="menu">
      <h1>MENU</h1>   
        <div className='row1'>
          <MenuCard
            itemNum={1}
            musicaliSrc={musicali1}
            price={1000}
            title="Guitar"
            delay={0.1}
            handler={addToCartHandler}
          />
          <MenuCard
            itemNum={2}
            musicaliSrc={musicali2}
            price={2000}
            title="Drums"
            delay={0.3}
            handler={addToCartHandler}
          />
          <MenuCard
            itemNum={3}
            musicaliSrc={musicali3}
            price={3000}
            title="KeyBoard"
            delay={0.5}
            handler={addToCartHandler}
          /></div>
          <div className='row2'>
          <MenuCard
            itemNum={4}
            musicaliSrc={musicali4}
            price={4000}
            title="Tabla"
            delay={0.1}
            handler={addToCartHandler}
          />
          <MenuCard
            itemNum={5}
            musicaliSrc={musicali5}
            price={5000}
            title="Flute"
            delay={0.3}
            handler={addToCartHandler}
          />
          <MenuCard
            itemNum={6}
            musicaliSrc={musicali6}
            price={6000}
            title="Sitar"
            delay={0.5}
            handler={addToCartHandler}
          /></div>
          <div className='row3'>
          <MenuCard
            itemNum={7}
            musicaliSrc={musicali7}
            price={7000}
            title="Piano"
            delay={0.1}
            handler={addToCartHandler}
          />
          <MenuCard
            itemNum={8}
            musicaliSrc={musicali8}
            price={8000}
            title="Harmonica" 
            delay={0.3}
            handler={addToCartHandler}
          />
          <MenuCard
            itemNum={9}
            musicaliSrc={musicali9}
            price={9000}
            title="Saxophone" 
            delay={0.5}
            handler={addToCartHandler}
          />
        </div>
      {/* </h1> */}
    </section>
  )
}
export default Menu;