import React from 'react'
import "../App.css"
function Square({val,chosesquare}){
    return <div className="square" onClick={chosesquare}>{val}</div>;
    

}
export default Square;