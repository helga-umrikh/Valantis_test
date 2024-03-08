import React, { useEffect, useState } from 'react'
import './ItemPage.scss'
import { useParams } from 'react-router-dom'
import { itemAPI } from '../../services/ItemsService'
import ReturnButton from '../../components/ReturnButton'

const ItemPage = () => {
    const { id } = useParams<{ id?: string }>()
    const [currentItemData, setCurrentItemData] = useState<any>(null)
    const {
        data: items,
        isLoading,
        error,
    } = itemAPI.useFetchAllItemsDataQuery({
        ids: id ? [id] : [],
    })

    useEffect(() => {
        items && setCurrentItemData(items.result)
    }, [items])

    return (
        <div className="item-page">
            <div className="container">
                {id && (
                    <div>
                        {isLoading && (
                            <h1 className="message">Loading Item Details...</h1>
                        )}
                        {error && <h1 className="message">Error!</h1>}
                        {currentItemData && <div className="item-page__details item">
                            <p>{currentItemData && currentItemData[0].brand}</p>
                            <p>{currentItemData && currentItemData[0].id}</p>
                            <p>{currentItemData && currentItemData[0].price}</p>
                            <p>{currentItemData && currentItemData[0].product}</p>
                        </div>}
                    </div>
                )}
                <ReturnButton />
            </div>
        </div>
    )
}

export default ItemPage
