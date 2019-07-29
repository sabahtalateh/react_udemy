import React from 'react';
import ReactDOM from 'react-dom';



for (var i = 0; i < 3; i++) {
    console.log('inside' + i);
    setTimeout(function () {
        console.log('futire' + i);
    }, i * 1000)
}
console.log('after' + i);
// i = 0
// проход номер 1
// i = 1
// проход номер 2
// i = 2
// проход номер 3
// i = 3
//
// на будущее
// console.log(i);
// console.log(i);
// console.log(i);

function TodoItem() {
    return (
        <span>Drink Coffee</span>
    )
}

function TodoItemList() {
    return (
        <ul>
            <li><TodoItem/></li>
            <li><TodoItem/></li>
            <li><TodoItem/></li>
        </ul>
    )
}

ReactDOM.render(<TodoItemList/>, document.getElementById('root'));
