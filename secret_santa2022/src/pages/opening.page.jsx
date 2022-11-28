import React, {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import LoadingButton from '@mui/lab/LoadingButton';
import { Container } from "@mui/material";

import "./styles/opening.styles.css"

const Opening = () => {

    const [isLoading, setIsLoadingDone] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoadingDone(false), 71000)
    }, []); 

    const handleClick = () => {
        console.log('Nothing yet')
    }

    return(
            <div className="opening" >
                    <div className="video-container"> 
                        <div className="video">
                            <iframe width="1280" height="720" src="https://www.youtube.com/embed/w4vRJxZ4TZU?autoplay=1" title="Expose the truth" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>                       
                        </div>
                    </div>
                    <Link to='/home'>
                        <LoadingButton
                            className="load-button"
                            size="large"
                            onClick={handleClick}
                            loading={isLoading}
                            loadingPosition="end"
                            variant="contained"
                        >
                            Continue to witness the truth...
                        </LoadingButton>
                    </Link>
            </div>
       
    )
}

export default Opening