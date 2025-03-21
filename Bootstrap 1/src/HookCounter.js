import React, { useEffect } from "react";
import { useState } from "react";

export default function HookCounter() {


    const [channelname, setChaname] = useState('TechnicalPraveen');
    const [scount, setscount] = useState(0);
    const [icount, seticount] = useState(0);
    const [dcount, setdcount] = useState(0);

    function handleClick() {
        setChaname("New Tech");
        setscount("112312");
    }


    useEffect(() => {
        console.log("Hi");
    },[])

    const Increment = () => {
        seticount(icount + 1);

    }

    const Decrement = () => {
        setdcount(dcount - 1);

    }

    return (
        <>
            <div>
                New Channel Name is :{channelname}
                Subscriber Count is :{scount}
                <button onClick={handleClick}>Click Me!</button>
                <button onClick={Increment}>IncButtn</button>
                <button onClick={Decrement}>DecButtn</button>
            </div>
        </>
    )
};

// export default HookCounter