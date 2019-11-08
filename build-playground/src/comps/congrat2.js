import React, { useState } from 'react';

const Congrat2 = () => {
    const [text, setText] = useState("Hello!");

    const changeText = (e) => {
        console.log(123);
        setText(e.target.value);
    };

    return (<p>
        <input type="text" value={text} onChange={changeText}/>
    </p>)
};

export default Congrat2;
