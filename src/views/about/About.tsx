import React from 'react';
import { Link } from 'react-router-dom';
import renderRoutes from '@router/renderRoutes';
import type { Props } from '@/types/index';

function About(props: Props): React.ReactElement {
  return (
    <div className="about">
      <p>about page</p>
      <Link to="/about">about/bar | </Link>
      <Link to="/about/foo">about/foo</Link>
      {renderRoutes(props.route)}
    </div>
  );
}

export default About;
