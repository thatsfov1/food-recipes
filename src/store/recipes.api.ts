import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Hit, Recipe, ServerResponse } from '../models/models'

export const recipesApi = createApi({
    reducerPath:'recipes/api',
    baseQuery: fetchBaseQuery({
        baseUrl: ' https://api.edamam.com/'
    }),
    endpoints: builder => ({
        searchRecipes: builder.query<any, string >({
            query: (search:string) => ({
                url: `api/recipes/v2`,
                params:{
                    type:'public',
                    q:search,
                    app_id:'d721d296',
                    app_key:'931be7096c690b68bf0a1fd0ec727556'
                }
            })
        }),
        homeRecipes: builder.query<ServerResponse, void>({
            query: () => ({
                url: `api/recipes/v2`,
                params: {
                    type: 'public',
                    random: true,
                    diet: 'balanced',
                    app_id: 'd721d296',
                    app_key: '931be7096c690b68bf0a1fd0ec727556'
                }
            })
        }),
        singleRecipe: builder.query<Recipe, string>({
            query: (id:string) => ({
                url: `api/recipes/v2/${id}`,
                params: {
                    type: 'public',
                    app_id: 'd721d296',
                    app_key: '931be7096c690b68bf0a1fd0ec727556'
                }
            }),
            transformResponse: (response:Hit) => response.recipe
        }),

    })
})

export const {useSearchRecipesQuery, useHomeRecipesQuery, useSingleRecipeQuery} = recipesApi