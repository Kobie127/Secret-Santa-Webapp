import React from 'react';

import "./styles/most-wanted-poster.styles.css";
import posters from '../../constants/constants.js';


const MostWantedPoster = (imageIndex) => {
    console.log(imageIndex)
    return (
        <img className='poster' src={posters[imageIndex.imageIndex].src} alt='Wanted Poster'/>
    )
}

export default MostWantedPoster;