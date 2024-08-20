import { Text, Select, IconButton, HStack } from "@chakra-ui/react";
import { useMemo } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type PaginationProps = {
  limit: number;
  skip: number;
  total: number;
  setSkip: any;
  setLimit: (limit: number) => void;
};

export const Pagination = ({
  limit,
  skip,
  total,
  setSkip,
  setLimit,
}: PaginationProps) => {
  // handle page change when user clicks on next or previous button
  const handlePageChange = (type: string) => {
    if (type === "next") {
      setSkip((prev: any) => prev + limit);
    } else {
      setSkip((prev: any) => prev - limit);
    }
  };

  // hanldle limit change when user selects a different limit
  const handleLimitChange = (e: any) => {
    setLimit(parseInt(e.target.value));
  };

  return (
    <HStack justifyContent="space-between" alignItems="center" mt="8">
      <HStack spacing="2" alignItems="center">
        <IconButton
          aria-label="Previous page"
          icon={<FaArrowLeft />}
          onClick={() => handlePageChange("prev")}
          isDisabled={skip === 0}
        />
        <Select w="24" size="sm" value={limit} onChange={handleLimitChange}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
        </Select>
        <IconButton
          aria-label="Next page"
          icon={<FaArrowRight />}
          onClick={() => handlePageChange("next")}
          isDisabled={skip + limit >= total}
        />
      </HStack>

      <Text as="span" fontSize="sm" color="gray.500" fontWeight="semibold">
        {skip + 1} - {skip + limit} of {total}
      </Text>
    </HStack>
  );
};
