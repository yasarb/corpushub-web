import React from 'react';
import { Link } from '@reach/router';
import { Box, Flex } from '@chakra-ui/core';
import Brand from './Brand';
import SearchField from './SearchField';

export default function SearchHeader() {
  return (
    <Flex
      h="120px"
      align="center"
      justify="start"
      borderBottom="1px solid #EEE"
    >
      <Flex
        ml="auto"
        mr="auto"
        pl="3"
        pr="3"
        w="100%"
        maxW="1300px"
      >
        <Box as="a" href="/" minW="100px" width="25%">
          <Brand fontSize="3xl" />
        </Box>
        <Box w="100%">
          <SearchField />
        </Box>
      </Flex>

    </Flex>
  );
}
