import React from 'react';
import { useLocation } from '@reach/router';
import { parse } from 'query-string';
import useTitle from '../hooks/useTitle';
import SearchHeader from '../components/SearchHeader';

export default function Resuls() {
  const location = useLocation();
  const searchParams = parse(location.search);
  const query = searchParams.q;
  const title = `${query || 'Results'} | CorpusHub`;
  useTitle(title);

  return (
    <>
      <SearchHeader />
    </>
  );
}
