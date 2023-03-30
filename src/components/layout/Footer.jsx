import React from 'react';
import {AiFillInstagram, AiFillFacebook, AiFillGithub} from "react-icons/ai"

const Footer=()=> {
    return <footer className='footer'>
      
        <div>
            <h2>Dhwani</h2>
            <p>"Melody which rejuvinates the soul."</p>
            <br />

            <em>We give attention to genuine feebacks.</em><br />
            <strong>All rights reserved @dhwani</strong>
        </div>
        <aside>
            <h4>Follow Us</h4>

            <a href='https://www.instagram.com/yadavakash28/'>
                <AiFillInstagram />
            </a>
            <a href='https://www.facebook.com/profile.php?id=100006452750343'>
                <AiFillFacebook />
            </a>
            <a href='https://github.com/Yadavakash28'>
                <AiFillGithub />
            </a>

        </aside>
  </footer>
}

export default Footer;