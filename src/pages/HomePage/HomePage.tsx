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
    const [selectedField, setSelectedField] = useState('')
    const [inputPriceValue, setInputPriceValue] = useState<string | number>(0)
    const [inputBrandValue, setInputBrandValue] = useState<string | number>('')
    const [inputProductValue, setInputProductValue] = useState<string | number>(
        ''
    )

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

    const handleFieldChange = (value: string) => {
        setSelectedField(value)
    }

    return (
        <div className="home-page">
            <div className="container">
                <h1 className="title">Valantis Jewelry</h1>
                <div className="home-page__options">
                    <div className="options__sorting">
                        <Select onSelectChange={handleFieldChange} />
                        <Button />
                    </div>
                    <div className="options__filters">
                        <Input
                            onInputChange={(value) => {
                                setInputPriceValue(value)
                            }}
                            inputName="Цена"
                        />
                        <Input
                            onInputChange={(value) => {
                                setInputBrandValue(value)
                            }}
                            inputName="Бренд"
                        />
                        <Input
                            onInputChange={(value) => {
                                setInputProductValue(value)
                            }}
                            inputName="Название"
                        />
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
                        currentItemsData.map((e: ItemType) => (
                            <Item key={e.id} item={e} />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage
