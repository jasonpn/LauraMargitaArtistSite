import React from 'react'
import ReactPlayer from 'react-player'
import MadameBlancheImg from '../assets/04_023_Laura-Margita_Madame-Blanche_2011_Photo-Henry-Chan.jpg'
import LauraImg from "../assets/lmargitaimg.jpg";
const PerformanceProjectsPage = () => {
    return(
        <section className='section'>
            <div className='container mx-auto'>
                <div className='flex flex-col'>
                    <div className='w-full pt-30 pb-15 pl-5 lg:w-auto flex flex-col'>
                        <h1>Performance Art Projects</h1>
                    </div>
                    <div className='flex flex-col pl-15'>
                        <h2>
                            Laura Margita, Sad Empire (2020) <br/>
                        </h2>
                        <div className='flex flex-col pt-5 pb-5 lg:w-auto'>
                            <ReactPlayer
                                src='https://vimeo.com/473114988'
                                controls = {true}
                                preload = {true}
                                width="960px"
                                height="540px"
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
                    <div className='flex flex-col pl-15 pt-10'>
                        <h2>
                            Laura Margita, Madame Blanche Hears Your Confessions (2011)<br/>
                        </h2>
                        <div className='flex flex-col pt-5 pb-5 lg:w-auto'>
                            <ReactPlayer
                                src='https://player.vimeo.com/video/845563263'
                                controls = {true}
                                preload = {true}
                                width="960px"
                                height="540px"
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

        </section>
    );
};
export default PerformanceProjectsPage;