import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const REDDIT_CLONE_API_KEY = process.env.REACT_APP_REDDIT_CLONE_API_KEY;
const REDDIT_CLONE_HOST_KEY = process.env.REACT_APP_REDDIT_CLONE_HOST_KEY;
const baseUrl = `https://${REDDIT_CLONE_HOST_KEY}/`;

export const redditApi = createApi({
  reducerPath: "rapidApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.reddit.com/",
  }),
  endpoints: (builder) => ({
    getPopularPosts: builder.query({
      query: (type) => `/${type}.json`,
      transformResponse: (response) => {
        return response.data.children.map((post) => {
          return post.data;
        })
      }
    }),
    getSubReddits: builder.query({
      query: () => `subreddits.json`,
      transformResponse: (response) => response.data.children,
    })
  }),
});

export const { useGetPopularPostsQuery, useGetSubRedditsQuery, useGetPostQuery, } = redditApi;
