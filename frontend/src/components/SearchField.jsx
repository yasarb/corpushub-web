import React from 'react';
import {
  Box, Icon, Input, InputGroup, InputLeftElement,
} from '@chakra-ui/core';
import { navigate } from '@reach/router';

export default function SearchField() {
  let timeout;

  const handleChange = (event) => {
    const { value } = event.target;

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      navigate(`/search?q=${value}`);
    }, 1000);
  };

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
          borderColor="gray.400"
          focusBorderColor="#1890FF"
          onChange={handleChange}
        />
      </InputGroup>
    </Box>
  );
}
