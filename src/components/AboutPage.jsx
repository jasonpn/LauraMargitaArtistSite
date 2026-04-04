import React from 'react';

const AboutPage = () => {
    return(
        <section className='section pt-[120px] min-h-screen'>
            <div className='container mx-auto px-5'>
                <div className='flex flex-col'>
                    <div className='w-full pb-10'>
                        <h1 className='text-[#e00284]'>Bio</h1>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-10'>
                        <div className='flex-1'>
                            <p>Laura Margita began her artistic career in Ottawa receiving a BFA from the
                                University of Ottawa in 1991. She began her studio practice at the EBA in visual and
                                new media projects. Now as Gallery 101's Director/Curator, Laura Margita leads with 20+
                                years' experience serving arts organizations from Saskatoon to Ottawa. <br/> <br/>
                                While in Ottawa,
                                Laura worked as a Sculpture technician, teaching
                                assistant and building manager at the University of Ottawa Visual Art Department,
                                founded the Enriched Bread Artists Coop, taught visual art in the Light house program at
                                the Ottawa Board of Education, curated at Creative Outlet/Gallery CO, was the
                                administrator at SAW Gallery for seven years, and then taught as a teacher and outreach
                                coordinator at the Ottawa School of Art, and was the Executive Director at PAVED Arts in
                                Saskatoon. In her studio practice Laura works with fuzzy fabric,
                                both heavy and light objects, paint, media and performance. She is a community activist
                                fighting for social justice, nudity and culture for all with critical feedback. <br/>
                                <br/>


                                The boards she has served on over the years include: the Asinabka Film & Media Festival,
                                Artist-Run Centres and Collectives of Ontario (ARCCO), Artist-Run Centres and
                                Collectives Conference(ARCA), Plains Association of Artist-Run Centres (PARCA),
                                Independent Media Arts Alliance (IMAA), AKA Gallery and the Hintonburg Cultural
                                Association.
                            </p>
                        </div>
                        <div className='lg:w-1/3 flex justify-center items-start'>
                            <img className="w-full object-contain rounded-lg shadow-lg" src="/lmargitaimg.jpg" alt="Laura Margita" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AboutPage;