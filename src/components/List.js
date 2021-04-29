import React from 'react'
import './List.css'
import PropTypes from 'prop-types'

function List({name,calories}){
    return <div className = "list-style">
             <h4>{name}</h4>
             <h4>{calories}</h4>
           </div>
}


List.propTypes = {
    name: PropTypes.string,
    calories: PropTypes.string
}

export default List;

