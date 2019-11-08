import React from 'react';
import ReactDOM from 'react-dom';
import bobr from './img/bober.gif';
import Congrat from './comps/congrat';
import Congrat2 from './comps/congrat2';

const App = () => (<div>
    <h1>Здорова Бобрик!!!!</h1>
    <img src={bobr} alt=""/>
    <Congrat/>
    <Congrat2/>
</div>);

ReactDOM.render(<App/>, document.getElementById('root'));
