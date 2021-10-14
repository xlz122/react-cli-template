import React from 'react';
import renderRoutes from '@router/renderRoutes';
import type { Props } from '@/types/index';

function Home(props: Props): React.ReactElement {
  return (
    <div className="home">
      <p>home page</p>
      {renderRoutes(props.route)}
    </div>
  );
}

export default Home;
