import * as React from 'react';
import Container from '@mui/material/Container';
import Header from '../common/header.component';
import Footer from '../common/footer.component';

import "./styles/landing-page.styles.css";
const LandingPage = () => {
    return (
        <Container>
            <div className="menu-screen">
                <div className="menu-screen--main">
                    <Header/>
                    <div className='statement'>
                        <p className='statement-paragraph'>
                            Welcome to the Rochester Police Database admin panel.
                            The intended use for this application is to keep track of
                            and monitor crimes that have been committed and those who are
                            enacting them.  This application keeps an extensive log of 
                            the occurrences that we have collected from reports given to us.
                            If any of the people who are in this database are spotted out in 
                            the public, you have probable cause to detain them.
                        </p>
                        <img 
                            src={require("../../assets/images/roc.png")} 
                            alt="ROC police logo"
                            className='logo'
                        />
                    </div>
                    <Footer/>
                </div>
            
            </div>
        </Container>
    )
}

export default LandingPage;