import React from 'react'
import { MdError } from 'react-icons/md'
import { Link } from 'react-router-dom'

const NotFound=()=> {
  return (
      <section className='notFound'>
          <main>
              <div>
                  <MdError />
                  <h1>Error 404</h1>
              </div>

              <p>
                  Page not found, click below to go to home page.
                  <Link to="/">Go to Home</Link>
              </p>
          </main>
    </section>
  )
}

export default NotFound