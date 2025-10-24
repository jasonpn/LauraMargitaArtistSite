import React from 'react'
import {BrowserRouter} from "react-router";

const InvolvementsPage = () => {
    return(
        <section className='section'>
            <div className='container mx-auto'>
                <div className='flex flex-col'>
                    <div className='w-full pt-30 pb-15 pl-5 lg:w-auto flex flex-col'>
                        <h1>Involvements</h1>
                    </div>
                    <div className='flex flex-col pl-15'>
                        <p>
                            Gallery 101 Director<br/>
                            <a href="https://g101.ca/">Gallery 101</a>
                            <br/><br/>
                            Enriched Bread Artists Founder<br/>
                            <a href="https://www.enrichedbreadartists.com/history/">The Genesis of the EBA: Her Story</a>
                            <br/><br/>
                            Apartment 7 <br/>
                            <a href="https://apartment7.art/index.html">Apartment 7 Curator</a>
                            <br/><br/>
                            MAMA Food Project <br/>
                            <a href="https://saw-centre.com/archives/mama-food-project">Beet Salad + How to Pickle Vegetables</a>
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};
export default InvolvementsPage;