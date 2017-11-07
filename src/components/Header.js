import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import classNames from 'classnames';

import Navigation from './Navigation.js';

import style from './Header.module.scss';

import logoWhite from '../img/lukas_gloor_logo_white.svg';
import logoDark from '../img/lukas_gloor_logo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFixed: false,
      isDarkComponent: this.props.isDarkComponent,
      testcase: true
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState(nextProps);
  }

  handleScroll() {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 120) {
      this.setState({ isFixed: true });
    }
    if (top < 120) {
      this.setState({ isFixed: false });
    }
  }

  render() {
    return (
      <div
        className={classNames({
          [style.header]: true,
          [style.isFixed]: this.state.isFixed
        })}
      >
        <div className={style.navigation}>
          <Navigation />
        </div>
        <Link to="/">
          <img
            src={this.state.isDarkComponent ? logoWhite : logoDark}
            className={style.logo}
          />
        </Link>
        <div />
      </div>
    );
  }
}

export default Header;
