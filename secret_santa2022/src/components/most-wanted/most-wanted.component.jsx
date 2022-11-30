import React, {useState, useRef, useEffect} from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Header from "../common/header.component";
import Footer from "../common/footer.component";
import MostWantedPoster from "./most-wanted-poster.component";

import "./styles/most-wanted.styles.css";


const suspectIds = [
    'Suspect_07102000_Henrietta_585',
    'Suspect_07102000_Henrietta_585',
    'Suspect_07102000_Henrietta_585',
    'Suspect_07102000_Henrietta_585',
    'Suspect_07102000_Henrietta_585',
    'Suspect_3333333_Henrietta_585',
    'Suspect_07102000_Henrietta_585',
    'Suspect_07102000_Henrietta_585',
    'Suspect_07102000_Henrietta_585',
    'Suspect_07102000_Henrietta_585',
]

const MostWanted = () => {
    const [showImage, setShowImage] = useState(false);

    const currentId = useRef('');
 

    const handleClick = (event) => {
        var id = event.target.textContent;
        currentId.current = id
        console.log(currentId.current);
        setShowImage(true);
    }


    return (
        <Container>
            <div className="menu-screen">
                <div className="menu-screen--main">
                    <Header/>
                    <Grid 
                        container 
                        spacing={2} 
                        columns={16} 
                        sx={{
                            '--Grid-borderWidth': '1px',
                            borderTop: 'var(--Grid-borderWidth) solid',
                            borderLeft: 'var(--Grid-borderWidth) solid',
                            borderColor: 'divider',
                            '& > div': {
                              borderRight: 'var(--Grid-borderWidth) solid',
                              borderBottom: 'var(--Grid-borderWidth) solid',
                              borderColor: 'divider',
                            },
                        }}
                    >
                        <Grid xs={8}>
                            <h3>Active Suspects:</h3>
                            <ul className="active-list">
                                {
                                    suspectIds.map((suspect) => (
                                        <li id={suspect} onClick={handleClick} className="active-suspect">
                                            {suspect}
                                        </li>
                                    ))
                                }
                            </ul>
                           
                          
                        </Grid>
                        <Grid xs={8}>
                            <h3>
                                Suspect Image Display:
                            </h3>
                            {showImage && 
                                <MostWantedPoster suspectId={currentId.current}/>
                            }
                            {!showImage && 
                                <p>No suspect selected.</p>
                            }
                        </Grid>
                    </Grid>
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

export default MostWanted;