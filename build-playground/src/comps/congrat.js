import React, { useState } from 'react';

const Congrat = () => {
    const [text, setText] = useState("Hello!");

    const changeText = (e) => {
        setText(e.target.value)
    };

    return (<p>
        <input type="text" value={text} onChange={changeText}/>
    </p>)
};

export default Congrat;
