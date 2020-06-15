import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useLocation } from '@reach/router';
import { parse } from 'query-string';
import { Flex } from '@chakra-ui/core';
import useTitle from '../hooks/useTitle';
import SearchHeader from '../components/SearchHeader';
import { setQuery } from '../search.slice';

const mapDispatch = { setQuery };

const Results = (props) => {
  const location = useLocation();
  const searchParams = parse(location.search);
  const queryParam = searchParams.q;
  const { query } = useSelector((state) => state.search);
  const { setQuery } = props;

  if (query !== queryParam) {
    setQuery(queryParam);
  }
  useTitle(query || 'Results');

  return (
    <>
      <SearchHeader />
      <Flex align="center" justify="center">
        <h1>{query || 'Results'}</h1>
      </Flex>
    </>
  );
};

export default connect(
  null,
  mapDispatch,
)(Results);
