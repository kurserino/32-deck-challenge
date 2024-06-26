import { useRef } from 'react';

export const useDebounce = (fn: Function, delay: number) => {
  const timeoutId = useRef<ReturnType<typeof setTimeout>>();

  return function (...args: any[]) {
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => fn(...args), delay);
  };
};
