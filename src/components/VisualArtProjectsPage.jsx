import React from "react";
import BunnyImg from "../assets/IMG_4967.jpg"
import Owl1Img from "../assets/IMG_4976.jpg"
import Owl2Img from "../assets/IMG_4974.jpeg"
import Owl3Img from "../assets/IMG_4975.jpeg"

const VisualArtProjectsPage = () => {

    return (
        <section className='section'>
            <div className='container mx-auto'>
                <div className='flex flex-col'>
                    <div className='w-full pt-30 pb-15 pl-5 lg:w-auto flex flex-col'>
                        <h1>Visual Art Projects</h1>
                    </div>
                    <div className='flex flex-col pl-15'>
                        <h2>
                            Oh Look, Bunny! (2020) <br/>
                        </h2>
                        <br/>
                        <div className='flex items-center lg:w-auto '>
                            <img className="object-fit object-center" src={BunnyImg} alt="Laura Margita Oh Look, Bunny Painting (2020)"/>
                        </div>
                        <p className='pb-5'>
                            Laura Margita, <b><i>Oh Look, Bunny!</i></b>, 2020 <br/>
                            Acrylic on Galvanized Steel <br/>
                            16"x16" <br/>

                        </p>
                    </div>
                    <div className='flex flex-col pl-15 pt-10'>
                        <h2>
                            Owl #1 <br/>
                        </h2>
                        <br/>
                        <div className='flex items-center lg:w-auto '>
                            <img className="object-fit object-center" src={Owl1Img} alt="Laura Margita Owl #1 Painting"/>
                        </div>
                        <p className='pb-5'>
                            Laura Margita, <b><i>Owl #1</i></b>, n.d <br/>
                            Acrylic on found paper image, framed <br/>

                        </p>
                    </div>
                    <div className='flex flex-col pl-15 pt-10'>
                        <h2>
                            Owl #2 <br/>
                        </h2>
                        <br/>
                        <div className='flex items-center lg:w-100 '>
                            <img className="object-fit object-center" src={Owl2Img} alt="Laura Margita Owl #1 Painting"/>
                        </div>
                        <p className='pb-5'>
                            Laura Margita, <b><i>Owl #2</i></b>, n.d <br/>
                            Acrylic on slate <br/>

                        </p>
                    </div>
                    <div className='flex flex-col pl-15 pt-10'>
                        <h2>
                            Owl #3 <br/>
                        </h2>
                        <br/>
                        <div className='flex items-center lg:w-100'>
                            <img className="object-fit object-center" src={Owl3Img} alt="Laura Margita Owl #1 Painting"/>
                        </div>
                        <p className='pb-5'>
                            Laura Margita, <b><i>Owl #3</i></b>, n.d <br/>
                            Acrylic on slate <br/>

                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default VisualArtProjectsPage;