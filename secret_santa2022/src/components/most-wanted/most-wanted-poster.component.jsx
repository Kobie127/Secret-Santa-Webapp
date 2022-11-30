import React, {useRef, useEffect} from 'react';

import "./styles/most-wanted-poster.styles.css";
import posters from '../../constants/constants.js';


const MostWantedPoster = (suspectId) => {
    const imgUrl = useRef('')

    useEffect(() => {
        posters.forEach((poster => {
            console.log(poster)
            if (poster.id === suspectId.suspectId) {
                console.log('dhwew')
                imgUrl.current = poster.src;
            }
        }))
    }, [suspectId])

    return (
      <div>

      </div>
    )
}

export default MostWantedPoster;