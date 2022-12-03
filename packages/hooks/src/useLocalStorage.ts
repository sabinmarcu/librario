import {
  useCallback,
  useEffect,
  useState,
  useMemo,
} from 'react';
import type {
  Dispatch,
  SetStateAction,
} from 'react';

// React hook
export const useLocalStorage = <T extends unknown>(
  key: string,
  initialValue: T,
) => {
  const getValueFromLocalStorage = useCallback(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  }, [initialValue, key]);

  const [storedValue, setStoredValue] = useState<T>(getValueFromLocalStorage());

  useEffect(() => {
    const value = getValueFromLocalStorage();
    setStoredValue(value);
  }, [getValueFromLocalStorage]);

  const changeHandler = useCallback(
    (e) => {
      const { key: changeKey, newValue } = e;
      if (key === changeKey) {
        setStoredValue(JSON.parse(newValue));
      }
    },
    [key],
  );

  useEffect(() => {
    window.addEventListener('storage', changeHandler);
    return () => {
      window.removeEventListener('storage', changeHandler);
    };
  }, []);

  return useMemo(() => {
    const setValue = ((value: SetStateAction<T>) => {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      if (valueToStore !== storedValue) {
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
      return true;
    }) satisfies Dispatch<SetStateAction<T>>;

    return [storedValue, setValue] as const;
  }, [storedValue, key]);
};

export default useLocalStorage;
