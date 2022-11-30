import React from 'react';
import Container from '@mui/material/Container';
import Header from "../common/header.component";
import Footer from "../common/footer.component";

const BaselineForm = () => {
    return (
        <Container>
             <div className="menu-screen">
                <div className="menu-screen--main">
                    <Header/>
                    <Footer/>
                </div>
             </div>
                
        </Container>
    )
}

export default BaselineForm;