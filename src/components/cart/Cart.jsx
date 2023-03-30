import React from 'react'
import { Link } from 'react-router-dom'
import musicali1 from '../../assets/musicali1.png'
import musicali2 from '../../assets/musicali2.png'
import musicali3 from '../../assets/musicali3.png'
import musicali4 from '../../assets/musicali4.png'
import musicali5 from '../../assets/musicali5.png'
import musicali6 from '../../assets/musicali6.png'
import musicali7 from '../../assets/musicali7.png'
import musicali8 from '../../assets/musicali8.png'
import musicali9 from '../../assets/musicali9.png'

const CartItem = ({ value, title, img, increment, decrement }) => (
    <div className='cartItem'>
        <div>
            <h4>{title}</h4>
            <img src={img} alt="Item" />
        </div>
        <div>
            <button onClick={decrement}>-</button>
            <input type="number" readOnly value={value}></input>
            <button onClick={increment}>+</button>
        </div>
    </div>
)

const Cart = () => {
    
    const increment = (item) => { };
    
    const decrement = (item) => { }; 


  return (
      <section className='cart'>
          <main>
              <CartItem
                title={"Guitar"}
                img={musicali1}
                value={0}
                increment={() => increment(2)}
                decrement={()=> decrement(2)}
              />
              <CartItem
                title={"Drums"}
                img={musicali2}
                value={0}
                increment={() => increment(2)}
                decrement={()=> decrement(2)}
              />
              <CartItem
                title={"Keyboard"}
                img={musicali3}
                value={0}
                increment={() => increment(3)}
                decrement={()=> decrement(3)}
              />
              <CartItem
                title={"Tabla"}
                img={musicali4}
                value={0}
                increment={() => increment(4)}
                decrement={()=> decrement(4)}
              />
              <CartItem
                title={"Flute"}
                img={musicali5}
                value={0}
                increment={() => increment(5)}
                decrement={()=> decrement(5)}
              />
              <CartItem
                title={"Sitar"}
                img={musicali6}
                value={0}
                increment={() => increment(6)}
                decrement={()=> decrement(6)}
              />
              <CartItem
                title={"Piano"}
                img={musicali7}
                value={0}
                increment={() => increment(7)}
                decrement={()=> decrement(7)}
              />
              <CartItem
                title={"harmonica"}
                img={musicali8}
                value={0}
                increment={() => increment(8)}
                decrement={()=> decrement(8)}
              />
              <CartItem
                title={"Saxophone"}
                img={musicali9}
                value={0}
                increment={() => increment(9)}
                decrement={()=> decrement(9)}
              />
              
              <article>
                  <div>
                      <h4>Sub Total</h4>
                      <p>₹{2000}</p>
                  </div>
                  <div>
                      <h4>Tax</h4>
                      <p>₹{2000 *0.18}</p>
                  </div>
                  <div>
                      <h4>Shipping Charges</h4>
                      <p>₹{200}</p>
                  </div>{" "}
                  <div>
                      <h4>Total</h4>
                      <p>₹{2000 + 2000 *0.18 + 200}</p>
                  </div>

                  <Link to="/shipping">Checkout</Link>
              </article>
          </main>
    </section>
  )
}

export default Cart;