import React from 'react';

const Biograghy = ({imageUrl}) => {
    return (
        <div className='container biography'>
            <div className='banner'>
                <img src={imageUrl} alt="aboutImg" />
            </div>
            <div className='banner'>
                <p>Biography</p>
                <h3>Who We Are</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ut atque voluptatem accusantium sequi ducimus molestiae neque officiis dolore. Sint repudiandae nemo modi ducimus eveniet illum sit, asperiores earum? Quisquam maiores ipsum quae, debitis quasi, nisi enim tempore, maxime distinctio amet deleniti iusto perspiciatis molestias corporis dolore expedita similique. Rerum!
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore perspiciatis itaque dolor distinctio exercitationem laborum tempora sit tenetur consequatur debitis vel voluptatum, ratione placeat, nisi in minus. Ab et provident blanditiis sapiente officia, perferendis voluptate!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, explicabo. Perspiciatis, illo.</p>
                <p>Lorem, ipsum dolor.</p>
            </div>
        </div>
    )
}

export default Biograghy