import { Text, Select, IconButton, HStack } from "@chakra-ui/react";
import { useMemo } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type PaginationProps = {
  limit: number;
  skip: number;
  total: number;
  setSkip: any;
};

export const Pagination = ({
  limit,
  skip,
  total,
  setSkip,
}: PaginationProps) => {
  // calculate total pages
  const totalPages = useMemo(() => Math.ceil(total / limit), [total, limit]);

  // handle page change when user clicks on next or previous button
  const handlePageChange = (type: string) => {
    if (type === "next") {
      setSkip((prev: any) => prev + limit);
    } else {
      setSkip((prev: any) => prev - limit);
    }
  };

  // handle page change when user selects a page number from the dropdown

  const handleSelectChange = (e: any) => {
    setSkip((parseInt(e.target.value) - 1) * limit);
  };

  // generate page numbers
  const pageNumbers = useMemo(() => {
    const numbers = [];
    for (let i = 1; i <= totalPages; i++) {
      numbers.push(i);
    }
    return numbers;
  }, [totalPages]);

  return (
    <HStack justifyContent="space-between" alignItems="center" mt="8">
      <HStack spacing="2" alignItems="center">
        <IconButton
          aria-label="Previous page"
          icon={<FaArrowLeft />}
          onClick={() => handlePageChange("prev")}
          isDisabled={skip === 0}
        />
        <Select
          onChange={handleSelectChange}
          value={skip / limit + 1}
          w="24"
          size="sm"
        >
          {pageNumbers?.map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
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
