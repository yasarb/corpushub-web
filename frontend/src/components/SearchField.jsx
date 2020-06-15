import React, { useState, useEffect, useRef } from 'react';
import { connect, useSelector } from 'react-redux';
import { navigate } from '@reach/router';
import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/core';
import { setQuery } from '../search.slice';

const mapDispatch = { setQuery };

const SearchField = (props) => {
  let timer = null;
  const { query } = useSelector((state) => state.search);
  const { setQuery } = props;
  const [currentQuery, setCurrentQuery] = useState(query);
  const queryRef = useRef(currentQuery);
  queryRef.current = currentQuery;

  function callback() {
    setQuery(queryRef.current);
    navigate(`/search?q=${queryRef.current}`);
  }

  useEffect(() => {
    if (!currentQuery) return () => {};

    // eslint-disable-next-line
    timer = setTimeout(callback, 300);
    return () => clearTimeout(timer);
  }, [currentQuery]);

  return (
    <Box
      maxWidth="650px"
      width="100%"
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
          value={currentQuery}
          onChange={(event) => setCurrentQuery(event.target.value)}
        />
      </InputGroup>
    </Box>
  );
};

export default connect(
  null,
  mapDispatch,
)(SearchField);
