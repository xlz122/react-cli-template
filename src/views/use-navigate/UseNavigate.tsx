import React from 'react';
import { useNavigate } from 'react-router-dom';

function UseNavigate(): React.ReactElement {
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <>
      <p>useNavigate示例</p>
      <p>useHistory 被干掉了，换成了 useNavigate</p>
      <p>naviaget(to) 默认就是 history.push</p>

      <p>-------------------------------</p>

      <p>js传参方式</p>
      <p>js传参刷新页面，参数并不会被清空</p>
      <p onClick={() => navigate('/use-location', { state: { id: 123 } })}>
        跳转useLocation页面
      </p>

      <p>-------------------------------</p>

      <p>v6 navigate('/home');</p>
      <p>v5 history.push('/home')</p>

      <p>-------------------------------</p>

      <p>v6 {`navigate('/home', { replace: true });`}</p>
      <p>v5 history.replace('/home')</p>

      <p>-------------------------------</p>

      <p>v6 naviaget(to: number)</p>
      <p>v5 history.go(to: number)</p>
    </>
  );
}

export default UseNavigate;
