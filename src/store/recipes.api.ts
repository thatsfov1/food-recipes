import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ISearchParams, SearchResponse, ServerResponse, SingleRecipe } from '../models/models'

export const recipesApi = createApi({
    reducerPath:'recipes/api',
    baseQuery: fetchBaseQuery({
        baseUrl: ' https://api.spoonacular.com/recipes/'
    }),
    endpoints: builder => ({
        searchRecipes: builder.query<SearchResponse, ISearchParams >({
            query: ({debounced,type,offset = 0,sort}) => ({
                url: `complexSearch`,
                params:{
                    query:debounced,
                    type:type,
                    offset:offset,
                    sort:sort,
                    apiKey:'4a8d6c25ff14491a8fae9c4583d83577',

                }
            })
        }),
        randomRecipes: builder.query<ServerResponse, void>({
            query: () => ({
                url: `random`,
                params: {
                    number:60,
                    apiKey:'4a8d6c25ff14491a8fae9c4583d83577',

                },
            })
        }),
        singleRecipe: builder.query<any, string>({
            query: (id:string) => ({
                url: `${id}/information`,
                params: {
                    apiKey:'4a8d6c25ff14491a8fae9c4583d83577',
                    includeNutrition:true
                }
            }),
        }),

    })
})

export const {useSearchRecipesQuery, useLazySearchRecipesQuery,useRandomRecipesQuery, useSingleRecipeQuery} = recipesApi