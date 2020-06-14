import React from 'react';
import {
  Box, Icon, Input, InputGroup, InputLeftElement,
} from '@chakra-ui/core';

export default function SearchField() {
  return (
    <Box
      maxWidth="650px"
      width="100%"
      mt="30px"
    >
      <InputGroup mx="25px">
        <InputLeftElement>
          <Icon name="search" color="gray.300" />
        </InputLeftElement>
        <Input
          fontSize="lg"
          placeholder="Search"
          borderRadius="5rem"
          autoFocus
          focusBorderColor="#1890FF"
        />
      </InputGroup>
    </Box>
  );
}
