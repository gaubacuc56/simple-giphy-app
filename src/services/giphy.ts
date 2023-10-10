import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery, HttpStatus } from './http-config';
import { api_key } from '../constant';

export interface GifOwnerModel {
    avatar_url: string
    username: string
    display_name: string
    is_verified: boolean
    description: string
    profile_url: string
}
export interface GifModel {
    id: string
    embed_url: string
    title: string
    user: GifOwnerModel
}
export interface GifHttpResponse {
    data: GifModel[]
    meta: {
        status: HttpStatus,
        response_id: string
        msg: string
    }
    pagination: {
        total_count: number
        count: number
        offset: number
    }
}

export const giphyService = createApi({
    reducerPath: 'giphyService',
    baseQuery: baseQuery,
    endpoints: builder => ({
        searchAllGif: builder.query<GifHttpResponse, string>({
            query: (gifName: string) => ({
                url: `search?${api_key}&q=${gifName}&limit=${16}`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useSearchAllGifQuery } = giphyService;
