import React from 'react'
import { Link } from 'react-router-dom';

interface ButtonProps {
    id: string
}

const ItemButton = ({ id }: ButtonProps) => {
    return (
        <Link to={`/item/${id}`}>
            <button className="button">Подробнее</button>
        </Link>
    )
}

export default ItemButton
