import React from 'react';
import ReactPlayer from 'react-player';

const PerformanceProjectsPage = () => {
    return(
        <section className='section pt-[120px] min-h-screen'>
            <div className='container mx-auto px-5'>
                <div className='flex flex-col'>
                    <div className='w-full pb-10'>
                        <h1 className='text-[#e00284]'>Performance Art Projects</h1>
                    </div>

                    <div className='flex flex-col gap-12 max-w-5xl mx-auto'>
                        {/* Sad Empire */}
                        <div className='flex flex-col'>
                            <h2 className='text-[#e00284] mb-4'>
                                Laura Margita, Sad Empire (2020)
                            </h2>
                            <div className='w-full aspect-video'>
                                <ReactPlayer
                                    src='https://vimeo.com/473114988'
                                    controls={true}
                                    preload = "auto"
                                    width='100%'
                                    height='100%'
                                    config={{
                                        vimeo: {
                                            color: '#ffd6a7',
                                            byline: false,
                                            portrait: false,
                                        }
                                    }}
                                />
                            </div>
                        </div>

                        {/* Madame Blanche */}
                        <div className='flex flex-col'>
                            <h2 className='text-[#e00284] mb-4'>
                                Laura Margita, Madame Blanche Hears Your Confessions (2011)
                            </h2>
                            <div className='w-full aspect-video'>
                                <ReactPlayer
                                    src='https://player.vimeo.com/video/845563263'
                                    controls={true}
                                    preload = "auto"
                                    width='100%'
                                    height='100%'
                                    config={{
                                        vimeo: {
                                            color: '#ffd6a7',
                                            byline: false,
                                            portrait: false,
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default PerformanceProjectsPage;