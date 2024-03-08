import React from 'react'
import { Link } from 'react-router-dom';



const ReturnButton = () => {
    return (
        <Link to={`/`}>
            <button className="button">Назад</button>
        </Link>
    )
}

export default ReturnButton
