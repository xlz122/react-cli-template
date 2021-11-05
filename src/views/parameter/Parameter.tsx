import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

type IProps = {
  userId: number;
};

function Parameter(props: IProps): React.ReactElement {
  // 获取完整的路由参数
  const { pathname, state } = useLocation();

  // 获取路由参数
  const params = useParams();

  // 获取props参数
  const { userId } = props;

  return (
    <>
      <p>携带参数示例</p>
      <p>location: pathname {pathname}</p>
      <p>location: state {state.name}</p>
      <p>params: id {params.id}</p>
      <p>props: userId {userId}</p>
    </>
  );
}

export default Parameter;
