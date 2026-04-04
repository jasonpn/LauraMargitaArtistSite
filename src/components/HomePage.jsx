import React from 'react';
import { useNavigate } from 'react-router';
import { artworks } from './Info.jsx';

const HomePage = () => {
    const navigate = useNavigate();

    // Display first 3 artworks on homepage
    const featuredArtworks = artworks.slice(0, 3);

    return (
        <div className='pt-[120px] min-h-screen'>
            <div className='container mx-auto px-5'>
                {/* Hero Section */}
                <section className='py-20 text-center'>
                    <h1 className='text-5xl lg:text-6xl font-bold text-[#e00284] mb-6'>
                        LAURA MARGITA
                    </h1>
                    <p className='text-xl lg:text-2xl mb-8'>
                        Visual & Performance Artist <br/>
                        Gallery Director/Curator
                    </p>
                    <button
                        onClick={() => navigate('/visualart')}
                        className='px-8 py-3 bg-[#ffde21] text-[#e00284] font-semibold rounded-lg hover:opacity-80 transition-opacity text-lg'
                    >
                        View Gallery
                    </button>
                </section>

                {/* Featured Artworks */}
                <section className='py-10'>
                    <h2 className='text-3xl font-bold text-[#e00284] mb-8 text-center'>
                        Featured Works
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
                        {featuredArtworks.map((artwork) => (
                            <div
                                key={artwork.id}
                                onClick={() => navigate(`/visualart/${artwork.id}`)}
                                className='cursor-pointer group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300'
                            >
                                <div className='aspect-square overflow-hidden'>
                                    <img
                                        src={artwork.image}
                                        alt={artwork.title}
                                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                                    />
                                </div>
                                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
                                    <div className='p-4 text-white'>
                                        <h3 className='font-semibold text-lg'>{artwork.title}</h3>
                                        <p className='text-sm'>{artwork.year}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomePage;