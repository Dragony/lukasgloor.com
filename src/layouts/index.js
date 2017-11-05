import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Navigation from '../components/Navigation.js';

import logo from '../img/lukas_gloor_logo.svg';

import style from './index.module.scss';

import './index.scss';

const Header = () => (
  <div className={style.header}>
    <div className={style.navigation}>
      <Navigation />
    </div>
    <Link to="/">
      <img src={logo} className={style.logo} />
    </Link>
    <div />
  </div>
);

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
      title="Gatsby Default Starter"
      meta={[
        { name: `description`, content: `Sample` },
        { name: `keywords`, content: `sample, something` }
      ]}
    />
    <Header />
    <div className={style.content}>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
