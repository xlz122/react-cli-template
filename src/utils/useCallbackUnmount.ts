import { useRef, useEffect } from 'react';

/**
 * @descriptio useEffect 回调函数
 */
function useCallbackUnmount<T extends unknown[]>(
  callback: (cbRef: { current: boolean }) => void,
  source: T
): void {
  const cbRef = useRef(false);

  useEffect(() => {
    cbRef.current = false;
    callback(cbRef);
    return () => {
      cbRef.current = true;
    };
  }, source);
}

export default useCallbackUnmount;
