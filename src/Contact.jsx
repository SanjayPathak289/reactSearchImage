import React from 'react';
import {useNavigate} from "react-router-dom";
const Contact = () => {
    const history = useNavigate();
    console.log(history);
    return(
        <>
            <h1>I am contact page</h1>
            <button onClick={() => history(-1)}>Back</button>
        </>
    )
}
export default Contact;

