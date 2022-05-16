import React,{ useState } from 'react';
import './Kanye.css'; 
import axios from 'axios';
import Filter from 'bad-words';


function KANYE_QUOTE(){
    const[quote, getQuote] = useState()
    const getQuotes = async () => {
        const response = await axios.get('https://api.kanye.rest')
        
        const filter = new Filter();
        filter.removeWords('God');
        let cleanQuote = filter.clean(response.data.quote)
        console.log(response.data.quote)
        getQuote(cleanQuote)
        
    }
    return(
        <div className='kanye-comp'>
            <button className='getQuoteBtn' onClick={getQuotes}>Get Kanye quote!</button>
            <p className='quotes'><span>Kanye West: </span> "{quote}"</p>
        </div>
    )
}


export default KANYE_QUOTE;