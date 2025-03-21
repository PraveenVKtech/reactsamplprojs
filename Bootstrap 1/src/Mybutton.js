import AboutPage from './AboutPage';
import Setcounter from './Setcounter';
import { useState } from 'react';

function MyButton() {
    const [page, setpage] = useState(0);

    function handleClick() {
        setpage(page+1);
        // alert("You Clicked me!");

    }
    return (
        <>
            {page ?<AboutPage count={page} /> : <h1>About Page isnot set!</h1>} 

            {/* {page ? <Setcounter /> : <AboutPage />}
            {/* {page ? <p>Counter value is :{page}</p> : <p>Page Not Set</p>}
            <br></br>
            {page} */}
            <button onClick={handleClick}>I'm a button</button>
        </>
    );
}

export default MyButton