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
                    <ul>
                        <li>
                            TEST1
                        </li>
                        <li>
                            TEST
                        </li>
                        <li>
                            TEST1
                        </li>
                        <li>
                            TEST1
                        </li>
                    </ul>
                    <Footer/>
                </div>
            
            </div>
        </Container>
    )
}

export default LandingPage;