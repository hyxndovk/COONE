import React from 'react';
import "./date.css";
import Today from '../img/today.svg';

function DateBox() {
    let today = new Date();   

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    return(
        <div className="DateBody">
            <div className="DateInfo">
                <img src={ Today }/>
                <p>{ year + ' / ' + month + ' / ' + date }</p>
            </div>
        </div>
    );
}

export default DateBox;