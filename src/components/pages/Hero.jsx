import React from 'react';

const Hero = () => {
    return (
        <section className='max-w-6xl mx-auto px-4'>
            <div className='w-full h-120 bg-cover bg-center rounded-4xl'
            style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1528712306091-ed0763094c98?w=1600&h=900&fit=crop)",
        }}>
            <div className='text-center ml-62'>
                <h1 className='text-4xl font-bold max-w-xl text-white pt-24'>
                Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mt-4 max-w-xl text-white text-1xl">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Databases and solve 500+ coding problems.
        </p>
            </div>

          <div className="mt-6 ml-102 pt-10 flex gap-4 ">
          <button className="btn btn-success bg-green-500 rounded-3xl p-3 font-bold">Explore Now</button>
          <button className="btn btn-outline text-white outline-2 rounded-full p-3">Our Feedback</button>
        </div>   
                
            </div>

        </section>
    );
};

export default Hero;