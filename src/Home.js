import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://m.media-amazon.com/images/I/71cvRGs+pPL._SX3000_.jpg' alt='' />
            </div>

            <div className='home__row '>
                <Product id='6735678' title='Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 35 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Blue)' seller='by Sony' price={97} image='https://m.media-amazon.com/images/I/61zWFqX+krL._AC_UL480_FMwebp_QL65_.jpg' rating={5} />

                <Product id='7683678' title='MageGee Portable 60% Mechanical Gaming Keyboard for Windows Laptop PC Mac' seller='MageGee' price={27} image={'https://m.media-amazon.com/images/I/71NMtTQkYUL._AC_UY327_FMwebp_QL65_.jpg'} rating={4} />
            </div>

            <div className='home__row '>
                <Product id='8376549' title='Atomic Habits: the life-changing million-copy #1 bestseller' seller='by James Clear' price={10} image='https://5.imimg.com/data5/SELLER/Default/2022/2/UA/RV/VK/147304712/whatsapp-image-2022-02-20-at-5-05-40-pm-4--500x500.jpeg' rating={5} />

                <Product id='9273652' title='OnePlus Nord Watch with 1.78 AMOLED Display, 60 Hz Refresh Rate, 10 Days Battery, Heart Rate, Stress Monitor [Midnight Black]' seller='by One Plus' price={47} image='https://m.media-amazon.com/images/I/510+3Km7MtL._AC_UL480_FMwebp_QL65_.jpg' rating={4} />

                <Product id='1837629' title='Logitech MX Master 2S Wireless Mouse, Multi-Device, Bluetooth Fast Rechargeable, Laptop/PC/Mac/iPad OS - Black' seller='by Logitech' price={62} image='https://m.media-amazon.com/images/I/61lD2tTTi9L._AC_UY327_FMwebp_QL65_.jpg' rating={4} />
            </div>

            <div className='home__row'>
                <Product id='1154985' title='GIGABYTE G34WQC A 34" 144Hz Ultra-Wide Curved Gaming Monitor, 3440 x 1440 VA 1500R Display, 1ms (MPRT) Response Time, 90% DCI-P3, VESA Display HDR400, FreeSync Premium' seller='by Gigabyte' price={510} image='https://m.media-amazon.com/images/I/61mzM7JeQ2L._SL1000_.jpg' rating={5} />
            </div>


        </div>
    )
}

export default Home