import React from 'react';
import { Flex } from '@chakra-ui/core';
import Brand from '../components/Brand';

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Brand />
      {/* <SearchField /> */}
    </Flex>
  );
}
