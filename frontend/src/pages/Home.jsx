import React from 'react';
import { Flex, Stack } from '@chakra-ui/core';

import Brand from '../components/Brand';
import SearchField from '../components/SearchField';

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
    >
      <Stack
        width="100%"
        pt="250px"
        align="center"
        spacing={8}
      >
        <Brand />
        <SearchField />
      </Stack>
    </Flex>
  );
}
