import React from 'react';
import "../App.css";

function square({val,chooseSquare}){
    return(
        <div className='square'onClick={chooseSquare}>{val}</div>
    );
}

export default square;