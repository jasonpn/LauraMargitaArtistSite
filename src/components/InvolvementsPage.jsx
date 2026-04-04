import React from 'react';

const InvolvementsPage = () => {
    return(
        <section className='section pt-[120px] min-h-screen'>
            <div className='container mx-auto px-5'>
                <div className='flex flex-col'>
                    <div className='w-full pb-10'>
                        <h1 className='text-[#e00284]'>Involvements</h1>
                    </div>
                    <div className='flex flex-col gap-6 max-w-2xl'>
                        <div>
                            <p className='font-semibold'>Gallery 101 Director</p>
                            <a href="https://g101.ca/" className='text-[#e00284] hover:opacity-70 transition-opacity'>
                                Gallery 101
                            </a>
                        </div>
                        <div>
                            <p className='font-semibold'>Enriched Bread Artists Founder</p>
                            <a href="https://www.enrichedbreadartists.com/history/" className='text-[#e00284] hover:opacity-70 transition-opacity'>
                                The Genesis of the EBA: Her Story
                            </a>
                        </div>
                        <div>
                            <p className='font-semibold'>Apartment 7</p>
                            <a href="https://apartment7.art/index.html" className='text-[#e00284] hover:opacity-70 transition-opacity'>
                                Apartment 7 Curator
                            </a>
                        </div>
                        <div>
                            <p className='font-semibold'>MAMA Food Project</p>
                            <a href="https://saw-centre.com/archives/mama-food-project" className='text-[#e00284] hover:opacity-70 transition-opacity'>
                                Beet Salad + How to Pickle Vegetables
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default InvolvementsPage;