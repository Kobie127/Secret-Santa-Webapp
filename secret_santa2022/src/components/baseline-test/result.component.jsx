import React, {useEffect, useState} from 'react';
import "./styles/terms.styles.css";

const resultObject = [
    {id: 0, url: "https://youtu.be/FBgWEaFv49c"},
    {id: 1, url: "https://youtu.be/TDcJRPpp6ss"},
    {id: 2, url: "https://youtu.be/wFjEI6mF_Dk"},
    {id: 3, url: "https://youtu.be/YO8AXtGADfM"},
    {id: 4, url: "https://youtu.be/IMD7kxGJkbg"},
    {id: 5, url: "https://youtu.be/Bap4SHOAvLE"},
    {id: 6, url: "https://youtu.be/oRhsOrs_pN0"},
    {id: 7, url: "https://youtu.be/tkZoY7yAlxE"},
    {id: 8, url: "https://youtu.be/cOvp_ozgHv8"},
    {id: 9, url: "https://youtu.be/huGil7WQp6E"},
    {id: 10, url: "https://youtu.be/t_f885oD9zY"}
]

const Results = ({values}) => {

    const [amountOfNo, setAmountOfNo] = useState(0);
    const [url, setUrl] = useState('');
    const objectValues = Object.values(values);

    useEffect(() => {
        let no = 0
        objectValues.forEach(val => {
            if (val === 'no') {
                no += 1;
            } 
        })

        setAmountOfNo(no);
     
        resultObject.forEach(result => {
            if (result.id === amountOfNo) {
                setUrl(result.url)
            }
        })
    }, [
        setAmountOfNo, 
        setUrl, 
        objectValues,  
        amountOfNo
    ])

    return(
        <div className='terms'>
             <p className='termText'>
                Thank you for taking the test!  Here are your results!
            </p>
            <div className='checkbox'>
                <a className='results-link' href={url}>
                    Click here for your result!
                </a>
            </div>
            
        </div>
    )
}
    
   

export default Results;