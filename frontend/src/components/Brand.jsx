import React from 'react';
import { Text } from '@chakra-ui/core';

export default function Brand(props) {
  const { fontSize } = props;

  return (
    <Text
      fontSize={fontSize || '6xl'}
      fontWeight="600"
      fontFamily="Montserrat"
      color="#424242"
    >
      corpushub
    </Text>
  );
}
