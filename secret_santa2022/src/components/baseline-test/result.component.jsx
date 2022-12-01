import React, {useEffect, useState} from 'react';
import "./styles/terms.styles.css";

const Results = ({values}) => {

    const [amountOfYes, setAmountOfYes] = useState(0);
    const [amountOfNo, setAmountOfNo] = useState(0);
    const objectValues = Object.values(values);

    useEffect(() => {
        let yes = 0
        let no = 0
        objectValues.forEach(val => {
            console.log(val)
            if (val === 'yes') {
                yes += 1;
            } 

            if (val === 'no') {
                no += 1;
            } 
        })

        setAmountOfNo(no);
        setAmountOfYes(yes);
    }, [setAmountOfNo, setAmountOfYes, objectValues])

    return(
        <div className='terms'>
             <p className='termText'>
                Thank you for taking the test!  Here are your results!
                <p>Denial Counter = {amountOfNo}</p>
                <p>Acceptance Counter = {amountOfYes}</p>
            </p>
            <div className='checkbox'>
                <a href='https://youtu.be/agYcCDzo_jg'>
                    Click here for your gift
                </a>
            </div>
            
        </div>
    )
}
    
   

export default Results;