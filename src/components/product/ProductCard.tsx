import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Rating } from "./Rating";
import { FavouriteButton } from "./FavouriteButton";
import { shortenText } from "@/utils/functions";

type Props = {
  product: any;
};

export const ProductCard = (props: Props) => {
  const { product } = props;
  const { title, thumbnail, price, discountPercentage, rating, category } =
    product;
  return (
    <Stack spacing={{ base: "4", md: "5" }}>
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={thumbnail}
            alt={title}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={{ base: "md", md: "xl" }}
          />
        </AspectRatio>

        <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${title} to your favourites`}
        />
      </Box>

      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight={500}
            color={"gray.700"}
            textTransform={"capitalize"}
            display={{ base: "none", md: "block" }}
          >
            {shortenText(title, 20)}
          </Text>
          <Text
            fontWeight={500}
            color={"gray.700"}
            textTransform={"capitalize"}
            display={{ base: "block", md: "none" }}
          >
            {shortenText(title, 15)}
          </Text>
          <HStack spacing="2">
            <Text
              as="span"
              fontWeight={500}
              color={"gray.400"}
              textDecoration={"line-through"}
            >
              {discountPercentage}
            </Text>

            <Text as="span" fontWeight={700} color={"gray.800"}>
              {price}
            </Text>
          </HStack>
        </Stack>
        <VStack align="flex-start" spacing="1">
          <Rating defaultValue={rating} size="sm" />
          <Text fontSize="sm" color={"gray.600"} textTransform={"capitalize"}>
            {category}
          </Text>
        </VStack>
      </Stack>

      <Stack align="center">
        <Button colorScheme="blue" width="full">
          Add to cart
        </Button>
      </Stack>
    </Stack>
  );
};
