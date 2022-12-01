import React from 'react';
import Container from '@mui/material/Container';
import Header from '../common/header.component';
import Footer from '../common/footer.component';

const ReportedCrimes = () => {
    return(
        <Container>
            <div className="menu-screen">
                <div className="menu-screen--main">
                    <Header/>
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