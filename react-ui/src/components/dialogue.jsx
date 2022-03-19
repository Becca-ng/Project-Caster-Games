import {useState, useEffect} from 'react';

const Dialogue = ({ battleResults, nextMatch }) => {

    //Create a local state for the quote
    const [quote, setQuote] = useState('');

    //This useEffect will fire off an async api call every time the component loads
    useEffect(async () => {
        //Await is needed in order to make sure getQuote resolves before we move on
        await getQuote();
    },[])

    // Makes a callout to an API Async is required
    const getQuote = async () => {
        const api_url = "https://type.fit/api/quotes"; //API URL
        const response = await fetch(api_url); //Performs the fetch, await is needed in order to get the response
        let data = await response.json(); //Turns the response into a json await is also required here.
        const elementIndex = Math.floor(Math.random() * 1643) + 0; //Picking a random quote from the json
        setQuote(data[elementIndex].text); //Grabbing the quote text and setting that to the current quote
    }

    return (
        <>
            <p>
                {quote}
            </p>
            <p>
                {battleResults}
            </p>
            <button onClick={nextMatch}>
                Next Match
            </button>
        </>
    )
}

export default Dialogue;