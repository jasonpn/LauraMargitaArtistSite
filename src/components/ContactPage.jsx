import React from 'react'

const ContactPage = () => {
    return(
        <section className='section'>
            <div className='container mx-auto'>
                <div className='flex flex-col'>
                    <div className='w-full pt-30 pb-15 pl-5 lg:w-auto flex flex-col'>
                        <h1>Contact</h1>
                    </div>
                    <div className='flex flex-col pl-15'>
                        <p>
                            <a href="mailto:director@g101.ca?body=Email body">director@g101.ca</a>
                        </p>
                    </div>
                    <div className='w-full pt-30 pb-15 pl-5 lg:w-auto flex flex-col'>
                        <h1>Gallery</h1>
                    </div>
                    <div className='flex flex-col pl-15'>
                        <p>
                            Gallery 101
                            <br/>
                            280 Catherine St, <br/>
                            Ottawa, ON K1R 5T3 <br/>
                            Phone (613) 230-2799 <br/>
                            <a href="https://g101.ca/">Gallery 101 Website</a>
                        </p>
                    </div>
                </div>
            </div>

        </section>);
};
export default ContactPage;