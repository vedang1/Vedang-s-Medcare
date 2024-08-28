import React from 'react';

const Hero = ({title, imageUrl}) => {
    return (
        <div className='hero container'>
            <div className='banner'>
                <h1>{title}</h1>
                <p>
                Hospitals are institutions that deal with health care activities. They offer treatment to patients with specialized staff and equipment. In other words, hospitals serve humanity and play a vital role in the social welfare of any society.
                </p>
            </div>
            <div className='banner'>
                <img src={imageUrl} alt='hero' className='animated image'/>
                <span>
                    <img src='/Vector.png' alt='vector' />
                </span>
            </div>
        </div>
    )
}

export default Hero