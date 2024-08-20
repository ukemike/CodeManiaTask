import { Box, Select, Text, IconButton, HStack } from "@chakra-ui/react";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Navbar } from "@/components/ui/NavBar";
import {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
} from "@/redux/services/product.service";
import { ProductSkeleton } from "@/components/product/ProductSkeleton";
import { useState, useMemo, useEffect } from "react";
import { Pagination } from "@/components/ui/Pagination";
import { MdOutlineFilterAltOff } from "react-icons/md";

const Home = () => {
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [category, setCategory] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  const { data, isLoading, refetch, isFetching } = useGetProductsQuery({
    limit: limit,
    skip: skip,
  });
  const products = useMemo(() => data?.products, [data]);

  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategoriesQuery("");

  const {
    data: productsByCategory,
    isLoading: isLoadingProductsByCategory,
    refetch: refetchProductsByCategory,
    isFetching: isFetchingProductsByCategory,
  } = useGetProductsByCategoryQuery(
    {
      category,
      params: {
        limit: limit,
        skip: skip,
      },
    },
    {
      skip: !category,
    }
  );

  const productsByCategoryData = useMemo(
    () => productsByCategory?.products,
    [productsByCategory]
  );

  useEffect(() => {
    if (category) {
      refetchProductsByCategory();
    } else {
      refetch();
    }
  }, [category, refetch, refetchProductsByCategory]);

  useEffect(() => {
    if (category) {
      setAllProducts(productsByCategoryData);
    } else {
      setAllProducts(products);
    }
  }, [category, products, productsByCategoryData]);

  return (
    <Box>
      <Navbar />
      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <HStack alignItems="center" justifyContent="space-between" mb="8">
          <Text fontSize="2xl" fontWeight={700}>
            Products
          </Text>

          <HStack>
            <Select
              w="auto"
              variant="filled"
              placeholder="Select Category"
              onChange={(e) => setCategory(e.target.value)}
              textTransform="capitalize"
            >
              {isLoadingCategories
                ? [...Array(5)].map((_, index) => (
                    <option key={index} value="">
                      Loading...
                    </option>
                  ))
                : categories?.map((category: any) => (
                    <option
                      key={category?.slug}
                      value={category?.slug}
                      style={{ textTransform: "capitalize" }}
                    >
                      {category?.slug}
                    </option>
                  ))}
            </Select>
            {category && (
              <IconButton
                aria-label="Clear filter"
                icon={<MdOutlineFilterAltOff />}
                onClick={() => {
                  setCategory("");
                }}
                disabled={isLoadingProductsByCategory}
                isLoading={isFetchingProductsByCategory}
              />
            )}
          </HStack>
        </HStack>
        <ProductGrid>
          {isLoading || isFetching
            ? [...Array(12)].map((_, index) => <ProductSkeleton key={index} />)
            : allProducts?.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </ProductGrid>

        <Pagination
          limit={limit}
          setLimit={setLimit}
          skip={skip}
          total={category ? productsByCategory?.total : data?.total}
          setSkip={setSkip}
        />
      </Box>
    </Box>
  );
};

export default Home;
