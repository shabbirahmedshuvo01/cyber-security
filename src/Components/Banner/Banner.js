import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <section className='container'>
                <div>
                    <h1>Technical ingredients of responsive web design</h1>
                    <p>It’s hard to understand the nature of responsive design without understanding its technical side. Responsive websites have three defining features: flexible layouts, media queries and flexible media.</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAVXg3SMAKlkVIbyZhZ_5BDHzBiDbiQ6mFw&usqp=CAU" alt="" />
                </div>
            </section>
        </div>
    );
};

export default Banner;