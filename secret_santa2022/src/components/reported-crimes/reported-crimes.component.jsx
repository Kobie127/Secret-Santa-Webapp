import React from 'react';
import Container from '@mui/material/Container';
import Header from '../common/header.component';
import Footer from '../common/footer.component';

import "./styles/reported-crimes.styles.css";

const crimes = [
    'Report 2020234: Stolen pumpkin from Wegmans on Hylan Drive.',
    'Report 4344345: Stolen meat package from Target on Jefferson',
    'Report 3434588: Stolen cards from Target on Jefferson',
    'Report 3478889: Suspicious white woman seen in Target on Jefferson pacing up and down halls',
    'Report 2576885: Missing friend reportedly found heading to New York City', 
    'Report 9328383: Whole cake bought as a singular slice from Wegmans on Hylan Drive',
    'Report 4435667: Various smaller snack items missing from Target on Jefferson',
    'Report 6969696: White woman seen saying she hates the word cum.',
    'Report 4236789: White woman heard saying she hates the Turkish',
    'Report 3553093: White woman heard saying "If its black get back"',
    'Report 7436787: White woman heard saying that their roommate only eats Asian food and hangs with their Asian friends.'
]

const shuffledArray = crimes.sort((a, b) => 0.5 - Math.random());

const ReportedCrimes = () => {
    return(
        <Container>
            <div className="menu-screen">
                <div className="menu-screen--main">
                    <Header/>
                    <h3 className='active-header'>Active Reports:</h3>
                            <ul className="active-reports">
                                {
                                    shuffledArray.map((crime) => (
                                        <li className="crimes">
                                            {crime}
                                        </li>
                                    ))
                                }
                            </ul>
                    <img 
                        src={require("../../assets/images/roc.png")} 
                        alt="ROC police logo"
                        className='logo'
                    />
                    <Footer/>
                </div>
            </div>
        </Container>
    )
}

export default ReportedCrimes;