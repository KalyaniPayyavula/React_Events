import React from 'react'
import './List.css'
//import '../App.css'
import PropTypes from 'prop-types'

function List({name,calories, onClick}){
    return <div className = "list-style">
             <h4>{name}</h4>
             <h4>{calories}</h4>
             <button name={name} onClick={onClick} className="button-style">Remove Item</button>
           </div>
}


List.propTypes = {
    name: PropTypes.string,
    calories: PropTypes.string
}

export default List;

