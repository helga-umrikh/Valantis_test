import React, { FC } from 'react'
import { ItemType } from '../models/IItem'
import ItemButton from './ItemButton'

interface ItemProps {
    item: ItemType
}

const Item: FC<ItemProps> = ({ item }) => {
    return (
        <div className="item">
            <p>{item.brand}</p>
            <p>{item.product}</p>
            <p>{item.price}</p>
            <p>{item.id}</p>
            <ItemButton id={item.id}/>
        </div>
    )
}

export default Item
