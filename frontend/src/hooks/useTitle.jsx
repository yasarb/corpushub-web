import { useRef, useEffect } from 'react';

export default function useTitle(title, retainOnUnmount = false) {
  const previousTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => () => {
    if (!retainOnUnmount) {
      document.title = previousTitle.current;
    }
  }, []);
}
