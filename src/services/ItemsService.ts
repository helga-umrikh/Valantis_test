import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IItemsIds, IItemsData } from '../models/IItem'

export const itemAPI = createApi({
    reducerPath: 'itemAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.valantis.store:41000/',
        prepareHeaders: (headers) => {
            headers.set('X-Auth', 'd3304c2752445278cf9ba34b2dabf05a')
            headers.set('Content-Type', 'application/json');
            return headers
        },
    }),
    endpoints: (build) => ({
        fetchAllItemsIds: build.query<IItemsIds, { offset: number; limit: number }>({
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
        fetchItemsById: build.query<IItemsData, number>({
            query: (id: number) => `/item/${id}`,
        }),
    }),
})
