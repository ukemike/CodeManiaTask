import { Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

export const ProductSkeleton = () => {
  return (
    <Stack spacing={{ base: "2", md: "3" }}>
      <Skeleton height="150px" />
      <SkeletonText noOfLines={3} spacing="2" />
      <Skeleton height="45px" />
    </Stack>
  );
};
