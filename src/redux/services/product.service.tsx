import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../baseUrl";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["PRODUCT"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => ({
        url: `products`,
        method: "GET",
        params,
      }),
      providesTags: ["PRODUCT"],
    }),

    getCategories: builder.query({
      query: () => ({
        url: "products/categories",
        method: "GET",
      }),
      providesTags: ["PRODUCT"],
    }),

    getProductsByCategory: builder.query({
      query: ({ category, params }) => ({
        url: `products/category/${category}`,
        method: "GET",
        params,
      }),
      providesTags: ["PRODUCT"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
} = productApi;
