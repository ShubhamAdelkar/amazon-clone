import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>

            <div className='footer__links'>
                {/* <p>
                    Amazon Music
                    Stream millions
                    of songs
                </p>
                <p>
                    Amazon Music
                    Stream millions
                    of songs
                </p> */}
            </div>

            <div className='footer__credits'>
                <span>
                    Design by amazon, built by imbachhu.
                </span>

                <p className='footer__amazon'>
                    © 1996-2023, Amazon.com
                </p>
            </div>

        </div>
    )
}

export default Footer