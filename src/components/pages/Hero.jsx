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
          <button className="px-6 py-3 bg-green-500 font-semibold rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-green-600 hover:shadow-xl hover:translate-y-1 active:scale-95">Explore Now</button>
          <button className="btn outline-1 px-6 text-white outline-2px-6 py-3 semibold rounded-full shadow-md transition-all duration-300 ease-in-out  hover:shadow-xl hover:translate-y-1 active:scale-95">Our Feedback</button>
        </div>   
                
            </div>

        </section>
    );
};

export default Hero;