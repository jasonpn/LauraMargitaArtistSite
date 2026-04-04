import React from 'react';

const ContactPage = () => {
    return(
        <section className='section pt-[120px] min-h-screen'>
            <div className='container mx-auto px-5'>
                <div className='flex flex-col'>
                    <div className='w-full pb-10'>
                        <h1 className='text-[#e00284]'>Contact</h1>
                    </div>
                    <div className='flex flex-col gap-8 max-w-2xl'>
                        <div>
                            <p>
                                <a href="mailto:director@g101.ca?body=Email body" className='text-[#e00284] hover:opacity-70 transition-opacity'>
                                    director@g101.ca
                                </a>
                            </p>
                        </div>
                        <div>
                            <h2 className='text-[#e00284] mb-4'>Gallery</h2>
                            <p>
                                Gallery 101
                                <br/>
                                280 Catherine St, <br/>
                                Ottawa, ON K1R 5T3 <br/>
                                Phone (613) 230-2799 <br/>
                                <a href="https://g101.ca/" className='text-[#e00284] hover:opacity-70 transition-opacity'>
                                    Gallery 101 Website
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ContactPage;