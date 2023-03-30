import React from 'react'

const OrderDetails=()=> {
  return (
      <section className='orderDetails'>
          <main>
              <h1><u>Order Details</u></h1>
                <div>
                    <h1>Shipping Details</h1> 
                  <p><b>Adress -</b>{"Jmd Gardens, Sec-33, Gurugram"}</p>
              </div>
              <div>
                    <h1>Contact</h1> 
                  <p><b>Name -</b>
                      {"Akash"}
                  </p>
                  <p>
                      <b>Phone No. -</b>
                      {"1592634870"}
                  </p>
              </div>
              <div>
                    <h1>Status</h1> 
                  <p><b>Order Status -</b>
                      {"Processing"}
                  </p>
                  <p>
                      <b>Placed At -</b>
                      {"28-03-2023"}
                  </p>
                  <p>
                      <b>Delivered At -</b>
                      {"28-04-2023"}
                  </p>
              </div>
              <div>
                    <h1>Payment</h1> 
                  <p><b>Payment Method -</b>
                      {"Online"}
                  </p>
                  <p>
                      <b>Payment Reference -</b>
                      #{"159263"}
                  </p>
                  <p>
                      <b>Paid At -</b>
                      {"28-03-2023"}
                  </p>
              </div>
              <div>
                    <h1>Amount</h1> 
                  <p><b>Items Total-</b>
                      ₹{2000}
                  </p>
                  <p><b>Shipping Charges -</b>
                      ₹{200}
                  </p>
                  <p><b>Tax Charges -</b>
                      ₹{232}
                  </p>
                  <p><b>Total Amount -</b>
                      ₹{232+2000+200}
                  </p>
              </div>
              
              <article>
                  <h1>Ordered Items</h1>
                  <div>
                      <h4>Guitar</h4>
                      <div>
                          <span>{1}</span> X <span>{1000}</span>
                      </div>
                  </div>
                  <div>
                      <h4>Drums</h4>
                      <div>
                          <span>{1}</span> X <span>{2000}</span>
                      </div>
                  </div>
                  <div>
                      <h4>Keyboard</h4>
                      <div>
                          <span>{1}</span> X <span>{3000}</span>
                      </div>
                  </div>
                  <div>
                      <h4>Tabla</h4>
                      <div>
                          <span>{1}</span> X <span>{4000}</span>
                      </div>
                  </div>
                  <div>
                      <h4>Flute</h4>
                      <div>
                          <span>{1}</span> X <span>{5000}</span>
                      </div>
                  </div>
                  <div>
                      <h4>Sitar</h4>
                      <div>
                          <span>{1}</span> X <span>{6000}</span>
                      </div>
                  </div>
                  <div>
                      <h4>Piano</h4>
                      <div>
                          <span>{1}</span> X <span>{7000}</span>
                      </div>
                  </div>
                  <div>
                      <h4>Harmonica</h4>
                      <div>
                          <span>{1}</span> X <span>{8000}</span>
                      </div>
                  </div>
                  <div>
                      <h4>Saxophone</h4>
                      <div>
                          <span>{1}</span> X <span>{9000}</span>
                      </div>
                  </div>

                  <div>
                      <h4 style={{fontWeight:800,}}>
                          Sub Total</h4>
                      <div style={{
                          fontWeight: 800,}}>
                          ₹{45000}</div>
                  </div>
              </article>
          </main>
    </section>
  )
}

export default OrderDetails