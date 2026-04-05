import React from "react"
import { useNavigate } from "react-router"
import { artworks } from "./Info.jsx"

const VisualArtProjectsPage = () => {
    const navigate = useNavigate()

    const handleArtworkClick = (id) => {
        navigate(`/visualart/${id}`)
    }

    return (
        <section className='section pt-[120px] min-h-screen'>
            <div className='container mx-auto px-5'>
                <div className='flex flex-wrap'>
                    <div className='w-full pb-10'>
                        <h1 className='text-[#e00284]'>Visual Art Projects</h1>
                    </div>

                    <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-[repeat(2,minmax(200px,1fr))] lg:grid-cols-[repeat(3,minmax(200px,1fr))] gap-6'>
                        {artworks.map((artwork) => (
                            <div
                                key={artwork.id}
                                onClick={() => handleArtworkClick(artwork.id)}
                                className='cursor-pointer group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300'
                            >
                                <div className='aspect-square overflow-hidden bg-gray-100'>
                                    <img
                                        src={artwork.image}
                                        alt={artwork.title}
                                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                                        loading="lazy"
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
                </div>
            </div>
        </section>
    );
};

export default VisualArtProjectsPage;