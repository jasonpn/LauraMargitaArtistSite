import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { artworks } from './Info.jsx'

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const artwork = artworks.find(art => art.id === parseInt(id));

    if (!artwork) {
        return (
            <section className='section pt-[120px] min-h-screen'>
                <div className='container mx-auto px-5'>
                    <h1 className='text-[#e00284]'>Artwork not found</h1>
                    <button
                        onClick={() => navigate('/visualart')}
                        className='mt-5 px-6 py-2 bg-[#ffde21] text-[#e00284] font-semibold rounded hover:opacity-80'
                    >
                        Back to Gallery
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className='section pt-[120px] min-h-screen pb-10'>
            <div className='container mx-auto px-5'>
                <button
                    onClick={() => navigate('/visualart')}
                    className='mb-5 px-6 py-2 bg-[#ffde21] text-[#e00284] font-semibold rounded hover:opacity-80'
                >
                    ← Back to Gallery
                </button>

                <div className='flex flex-col lg:flex-row gap-10'>
                    <div className='flex-1 flex justify-center items-start'>
                        <img
                            src={artwork.image}
                            alt={artwork.title}
                            className='w-full max-w-3xl object-contain'
                        />
                    </div>

                    <div className='lg:w-1/3'>
                        <h1 className='text-[#e00284] mb-4'>{artwork.title}</h1>
                        <div className='space-y-2'>
                            <p><strong>Year:</strong> {artwork.year}</p>
                            <p><strong>Medium:</strong> {artwork.medium}</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
