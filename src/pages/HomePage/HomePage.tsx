import React, { useEffect, useState } from 'react'
import './HomePage.scss'
import Button from '../../components/Button'
import Select from '../../components/Select'
import Input from '../../components/Input'
import Item from '../../components/Item'
import { itemAPI } from '../../services/ItemsService'
import { ItemType } from '../../models/IItem'

const HomePage = () => {
    const [currentIds, setcurrentIds] = useState<string[]>([])
    const [currentItemsData, setcurrentItemsData] = useState<[]>([])

    const { data } = itemAPI.useFetchAllItemsIdsQuery({
        offset: 0,
        limit: 49,
    })

    const {
        data: items,
        error,
        isLoading,
    } = itemAPI.useFetchAllItemsDataQuery({
        ids: currentIds,
    })

    useEffect(() => {
        data && setcurrentIds(data.result)
        items && setcurrentItemsData(items.result)
    }, [data, items])

    console.log(currentItemsData)

    return (
        <div className="home-page">
            <div className="container">
                <h1 className="title">Valantis Jewelry</h1>
                <div className="home-page__options">
                    <div className="options__sorting">
                        <Select />
                        <Input />
                        <Input />
                        <Button />
                    </div>
                    <div className="options__filters">
                        <Input />
                        <Input />
                        <Input />
                        <Button />
                    </div>
                </div>
                <div className="home-page__items-box">
                    <div className="home-page__message">
                        {isLoading && (
                            <h1 className="message">Loading Items...</h1>
                        )}
                        {error && <h1 className="message">Error!</h1>}
                    </div>
                    {currentItemsData &&
                        currentItemsData.map(
                            (e: ItemType) => <Item key={e.id} item={e}/>
                        )}
                </div>
            </div>
        </div>
    )
}

export default HomePage
