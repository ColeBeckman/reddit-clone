import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const REDDIT_CLONE_API_KEY = process.env.REACT_APP_REDDIT_CLONE_API_KEY;
const REDDIT_CLONE_HOST_KEY = process.env.REACT_APP_REDDIT_CLONE_HOST_KEY;
const baseUrl = `https://${REDDIT_CLONE_HOST_KEY}/`;

export const redditApi = createApi({
  reducerPath: 'redditApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      headers.set('X-RapidAPI-Key', REDDIT_CLONE_API_KEY);
      headers.set('X-RapidAPI-Host', REDDIT_CLONE_HOST_KEY);
      return headers
    }
  }),
  endpoints: (builder) => ({
    getTopPosts: builder.query({
      query: () => 'getPopularPosts?sort=new'
    })
  })
});
