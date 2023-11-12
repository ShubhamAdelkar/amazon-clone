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
                <Product id='6735678' title='Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 35 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Blue)' seller='by Sony' price={97.99} image='https://m.media-amazon.com/images/I/61zWFqX+krL._AC_UL480_FMwebp_QL65_.jpg' rating={5} list='$112' save='Save $3' />

                <Product id='7683678' title='MageGee Portable 60% Mechanical Gaming Keyboard, MK-Box LED Backlit Compact 68 Keys Mini Wired Office Keyboard with Blue Switch for Windows Laptop PC Mac - Grey/Black' seller='by MageGee' price={27.20} image={'https://m.media-amazon.com/images/I/71NMtTQkYUL._AC_UY327_FMwebp_QL65_.jpg'} rating={4} list='$47' save='Save $5' />
            </div>

            <div className='home__row '>
                <Product id='8376549' title='Atomic Habits: the life-changing million-copy #1 bestseller' seller='by James Clear' price={10} image='https://5.imimg.com/data5/SELLER/Default/2022/2/UA/RV/VK/147304712/whatsapp-image-2022-02-20-at-5-05-40-pm-4--500x500.jpeg' rating={5} list='$15' save='Save $1' />

                <Product id='9273652' title='OnePlus Nord Watch with 1.78 AMOLED Display, 60 Hz Refresh Rate, 10 Days Battery [Midnight Black]' seller='by One Plus' price={47} image='https://m.media-amazon.com/images/I/510+3Km7MtL._AC_UL480_FMwebp_QL65_.jpg' rating={4} list='$65' save='Save $4' />

                <Product id='1837629' title='Apple AirPods Pro (2nd Generation) Wireless Ear Buds with USB-C Charging' seller='by Apple' price={19.99} image='https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY327_FMwebp_QL65_.jpg' rating={5} list='$40' save='Save $4.5' />
            </div>

            <div className='home__row'>
                <Product id='1154985' title='LG (38") UltraWide Monitor Curved (3840 * 1600) QHD IPS Display with USB Type-C, HDR 10, DCI-P3 95%, AMD FreeSync, Tilt/Height Adjustable Stand, DP, HDMI, Head Phone Out (38WP85C)' seller='by LG' price={1170} image='https://m.media-amazon.com/images/I/61L1pOFmtZL._AC_UY327_FMwebp_QL65_.jpg' rating={5} list='$1300' save='Save $8' />
            </div>

            <div className='home__row '>
                <Product id='6472987' title='Green Soul® Raptor 2.0 Racing Edition Ergonomic Gaming Chair with Premium PU Leather, Adjustable Neck & Lumbar Pillow, 3D Adjustable Armrests & Heavy Duty Nylon Base (Black)' seller='by Green Soul' price={121} image='https://m.media-amazon.com/images/I/71cIMcceUmL._AC_UL480_FMwebp_QL65_.jpg' rating={4} list='$150' save='Save $4' />

                <Product id='3647869' title='Green Soul® Trigger Multipurpose Electric Height Adjustable Engineered Wood Table Desk, Ergonomic Spacious Sit-Stand Desk, Digital Display with Memory Preset Option- (62"X29"X46" | Black)' seller='by Green Soul' price={243} image='https://m.media-amazon.com/images/I/91CRdhwg60L._AC_UL480_FMwebp_QL65_.jpg' rating={5} list='$300' save='Save $5' />
            </div>

            <div className='home__row'>
                <Product id='6478365' title='Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver' seller='by Apple' price={853} image='https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UY327_FMwebp_QL65_.jpg' rating={5} list='$900' save='Save $5' />
            </div>


        </div>
    )
}

export default Home