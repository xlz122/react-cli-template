import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound(): React.ReactElement {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/');
  }, 3000);
  return <p>未找到该页面，将在3秒后返回首页...</p>;
}

export default NotFound;
