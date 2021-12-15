import React from 'react';
import { useOutletContext } from 'react-router-dom';

function UseOutletContext(): React.ReactElement {
  const [count, setCount] = useOutletContext();

  const countChange = () => {
    setCount((count: number) => count + 1);
  };

  return (
    <>
      <p>useOutletContext示例</p>
      <p>路由上下文</p>
      <p>参考链接：https://reactrouter.com/docs/en/v6/api#useoutletcontext</p>
      <p>{count}</p>
      <button onClick={countChange}>增加count</button>
    </>
  );
}

export default UseOutletContext;
