import React from 'react'

import LauraImg from '../assets/lmargitaimg.jpg'

const AboutPage = () => {
    return(
        <section className='section'>
            <div className='container mx-auto'>
                <div className='flex flex-col'>
                    <div className='w-full pt-30 pb-15 pl-5 lg:w-full flex flex-col'>
                        <h1>Bio</h1>
                    </div>
                    <div className='flex flex-col pl-10 w-full'>
                        <p>Gallery 101’s Director/Curator Laura Margita leads with 20+ years’ experience serving arts
                            organizations from Saskatoon to Ottawa. Before coming to G101, Laura founded Ottawa’s
                            Enriched Bread Artist co-op, was a multi media technician at the University of Ottawa’s
                            Visual Art Department, Administrator at SAW Gallery, teacher and then Manager of the
                            Outreach Program at the Ottawa School of Art and was the Executive Director at PAVED
                            Arts in Saskatoon.
                            <br/><br/>
                            The boards she has served on over the years include: the Asinabka Film & Media Festival,
                            Artist-Run Centres and Collectives of Ontario (ARCCO), Artist-Run Centres and
                            Collectives Conference(ARCA), Plains Association of Artist-Run Centres (PARCA),
                            Independent Media Arts Alliance (IMAA), AKA Gallery and the Hintonburg Cultural
                            Association.
                        </p>
                    </div>
                    <div className='flex justify-center items-center pt-10 pb-10'>
                        <img class = "h-1/4 w-1/4 object-contain" src={LauraImg} alt="Laura Margita" />

                    </div>
                </div>
            </div>

        </section>
    );
};
export default AboutPage;