import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../redux-manager/http-config';
import { api_key } from '../constant/baseUrl';

export interface GifModel {
    id: string
    embed_url: string
    title: string
    user: {
        avatar_url: string
        username: string
        display_name: string
        is_verified: boolean
        description: string
        profile_url: string
    }
}

export const giphyService = createApi({
    reducerPath: 'giphyService',
    baseQuery: baseQuery,
    endpoints: builder => ({
        searchAllGif: builder.query({
            query: (gifName: string) => ({
                url: `search?${api_key}&q=${gifName}&limit=${16}`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useSearchAllGifQuery } = giphyService;
