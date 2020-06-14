import React from 'react';
import { Heading } from '@chakra-ui/core';

export default function Brand(props) {
  const { fontSize } = props;

  return (
    <Heading
      fontSize={fontSize || '6xl'}
      fontWeight="600"
      color="#424242"
    >
      corpushub
    </Heading>
  );
}
