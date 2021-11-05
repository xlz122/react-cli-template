import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchParams(): React.ReactElement {
  //  获取url ?拼接的参数
  const [searchParams, setSearchParams] = useSearchParams();

  const changeParams = (): void => {
    setSearchParams({ name: 'abl' });
  };

  return (
    <>
      <p>url ?拼接参数示例</p>
      <button onClick={changeParams}>change name</button>
      <p>name: {searchParams.get('name')}</p>
    </>
  );
}

export default SearchParams;
