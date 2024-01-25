import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../baseUrl";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["PRODUCT"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (data) => ({
        url: `products?limit=${data.limit}&skip=${data.skip}`,
        method: "GET",
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
      query: (data) => ({
        url: `products/category/${data.category}?limit=${data.limit}&skip=${data.skip}`,
        method: "GET",
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
