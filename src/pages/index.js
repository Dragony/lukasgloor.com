/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';

import style from './index.module.scss';
import headerImage from './index/dieci.jpg';

const Index = ({ transition }) => (
  <div style={transition && transition.style}>
    <div className={style.mainHeadline}>
      <h1>
        Design meets <span className={style.highlight}>Development</span>
      </h1>
      <h3>
        I am here to <span className={style.highlight}>link</span> the mindeset
        of a designer and the mindset of a developer.
      </h3>
    </div>
    <img src={headerImage} className={style.headerImage} />
    <div>
      <Link to="/cat/">Go to cat</Link>
    </div>
    <div>
      <Link to="/dog/">Go to dog</Link>
    </div>
  </div>
);

export default Index;
