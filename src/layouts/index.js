import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Header from '../components/Header.js';

import style from './index.module.scss';

import './index.scss';

const Footer = () => (
  <div className={style.footer}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
      className={style.svg}
    >
      <polygon points="100 0 100 10 -100 10" />
    </svg>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div className={style.wrapper}>
    <Helmet
      title="Lukas Gloor - User Expirience Engineer"
      meta={[
        {
          name: `description`,
          content: `Personal protfolio website of Lukas Gloor. User Expirience Engineer.`
        },
        {
          name: `keywords`,
          content: `User Expirience, Web Development, Engineer`
        }
      ]}
    />
    <Header />
    <div className={style.content}>{children()}</div>
    {/* <Footer /> */}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
