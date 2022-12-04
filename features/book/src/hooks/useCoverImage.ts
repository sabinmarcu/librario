import {
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { ISBNProps } from '../types';

export const useCoverImage = ({
  isbn,
}: ISBNProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<string>();
  const src = useMemo(
    () => `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`,
    [isbn],
  );
  useEffect(
    () => {
      setLoading(false);
      setError(false);
      const controller = new AbortController();
      setLoading(true);
      fetch(src)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.blob();
        })
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = () => {
            setData(reader.result as string);
          };
          reader.readAsDataURL(blob);
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
      return () => controller.abort();
    },
    [src],
  );
  return [data, loading, error] as const;
};
