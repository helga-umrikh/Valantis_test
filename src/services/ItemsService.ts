import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IItemsIds, IItemsData } from '../models/IItem'

export const itemAPI = createApi({
    reducerPath: 'itemAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.valantis.store:41000/',
        prepareHeaders: (headers) => {
            headers.set('X-Auth', '')
            headers.set('Content-Type', 'application/json')
            return headers
        },
    }),
    endpoints: (build) => ({
        fetchAllItemsIds: build.query<
            IItemsIds,
            { offset: number; limit: number }
        >({
            query: ({ offset = 0, limit = 49 }) => ({
                url: '/',
                method: 'POST',
                body: JSON.stringify({
                    action: 'get_ids',
                    params: { offset, limit },
                }),
            }),
        }),
        fetchAllItemsData: build.query<IItemsData, { ids: string[] }>({
            query: ({ ids }) => ({
                url: '/',
                method: 'POST',
                body: JSON.stringify({
                    action: 'get_items',
                    params: { ids },
                }),
            }),
        }),
        fetchAllItemsFields: build.query<IItemsData, { field: string; offset: number; limit: number }
        >({
            query: ({ offset = 0, limit = 49 }) => ({
                url: '/',
                method: 'POST',
                body: JSON.stringify({
                    action: 'get_fields',
                    params: { offset, limit },
                }),
            }),
        }),
        fetchAllItemsFilter: build.query<IItemsIds, { price: number; brand: string; product: string}>({
            query: () => ({
                url: '/',
                method: 'POST',
                body: JSON.stringify({
                    action: 'filter'
                })
            })
        })
    }),
})
