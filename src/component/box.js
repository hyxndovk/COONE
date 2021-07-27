import React from 'react';
import "./box.css";

function InfoBox({ title, cases, total }) {
    return(
        <ul className="infoBox">
            <li>
                <div className="title">
                    <p>{ title }</p>
                </div>
                <div className="today">
                    <p>{ cases }</p>
                </div>
                <div className="total">
                    <p>{ total }</p>
                </div>
            </li>
        </ul>
    );
}

export default InfoBox;