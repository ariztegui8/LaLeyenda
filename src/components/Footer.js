import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer">
            <p>Derechos reservados por Jorge Ariztegui &#174; 2021</p>

            <div className="footer-logos">
                <div className="footer-icon">
                    <a href="https://www.facebook.com/jorge.ariztegui.1" target="_blank"><FaFacebook/></a>
                </div>

                <div className="footer-icon">
                <a href="https://www.instagram.com/jorge.ariztegui" target="_blank"><FaInstagram/></a>
                </div>
               
                <div className="footer-icon">
                <a href="https://www.linkedin.com/in/jorge-ariztegui8" target="_blank"><FaLinkedin/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
