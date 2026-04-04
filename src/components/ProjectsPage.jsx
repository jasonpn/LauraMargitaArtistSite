import React from 'react';
import { useNavigate } from 'react-router';
import MadameBlancheImg from '../assets/04_023_Laura-Margita_Madame-Blanche_2011_Photo-Henry-Chan.jpg'
import VisPic from '../assets/paintings/PICT0023.JPG'
const ProjectsPage = () => {
    const navigate = useNavigate();

    return(
        <section className='section pt-[120px] min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-white'>
            <div className='container mx-auto px-5 py-10'>
                <div className='flex flex-col'>
                    {/* Header with artistic flair */}
                    <div className='w-full pb-12 text-center relative'>
                        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#ffde21] rounded-full opacity-20 blur-3xl'></div>
                        <h1 className='text-[#e00284] relative z-10 mb-3'>Projects</h1>
                        <p className='text-xl text-gray-700 italic relative z-10'>
                            Performance and visual expression
                        </p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16'>
                        {/* Performance Art Card */}
                        <div
                            onClick={() => navigate('/performanceart')}
                            className='cursor-pointer group relative'
                        >
                            <div className='relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1'>
                                {/* Background Image */}
                                <div className='aspect-[4/3] overflow-hidden'>
                                    <img
                                        src= {MadameBlancheImg}
                                        alt="Performance Art"
                                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                                    />
                                </div>

                                {/* Overlay with gradient */}
                                <div className='absolute inset-0 bg-gradient-to-t from-[#e00284] via-[#e00284]/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500'></div>

                                {/* Content */}
                                <div className='absolute inset-0 p-8 flex flex-col justify-end text-white'>
                                    <div className='transform transition-transform duration-500 group-hover:translate-y-[-10px]'>
                                        <h2 className='text-4xl font-bold mb-3 text-white drop-shadow-lg'>
                                            Performance Art
                                        </h2>
                                        <p className='text-lg mb-4 drop-shadow-md'>
                                            Live performances fighting for social justice, nudity and culture for all.
                                        </p>
                                        <div className='inline-flex items-center gap-2 text-[#ffde21] font-semibold text-lg'>
                                            <span>Explore Performances</span>
                                            <span className='transform group-hover:translate-x-2 transition-transform duration-300'>→</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative corner element */}
                                <div className='absolute top-4 right-4 w-16 h-16 border-4 border-[#ffde21] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                            </div>
                        </div>

                        {/* Visual Art Card - More artistic */}
                        <div
                            onClick={() => navigate('/visualart')}
                            className='cursor-pointer group relative'
                        >
                            <div className='relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-[-1deg]'>
                                {/* Background Image */}
                                <div className='aspect-[4/3] overflow-hidden'>
                                    <img
                                        src={VisPic}
                                        alt="Visual Art"
                                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                                    />
                                </div>

                                {/* Overlay with gradient */}
                                <div className='absolute inset-0 bg-gradient-to-t from-[#ffde21] via-[#ffde21]/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500'></div>

                                {/* Content */}
                                <div className='absolute inset-0 p-8 flex flex-col justify-end text-black'>
                                    <div className='transform transition-transform duration-500 group-hover:translate-y-[-10px]'>
                                        <h2 className='text-4xl font-bold mb-3 text-[#e00284] drop-shadow-lg'>
                                            Visual Art
                                        </h2>
                                        <p className='text-lg mb-4 drop-shadow-md'>
                                            Bold paintings and mixed media works that challenge perspectives through color, texture, and form.
                                        </p>
                                        <div className='inline-flex items-center gap-2 font-semibold text-lg'>
                                            <span>View Gallery</span>
                                            <span className='transform group-hover:translate-x-2 transition-transform duration-300'>→</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative corner element */}
                                <div className='absolute top-4 left-4 w-16 h-16 border-4 border-[#e00284] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                            </div>
                        </div>
                    </div>

                    {/* bottom decoration */}
                    <div className='mt-16 flex justify-center gap-4'>
                        <div className='w-3 h-3 rounded-full bg-[#e00284] animate-pulse'></div>
                        <div className='w-3 h-3 aspect-square bg-[#ffde21] animate-pulse' style={{animationDelay: '0.2s'}}></div>
                        <div className='w-3 h-3 rounded-full bg-[#e00284] animate-pulse' style={{animationDelay: '0.4s'}}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ProjectsPage;