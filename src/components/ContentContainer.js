import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import _ from 'lodash';

import style from './ContentContainer.module.scss';

class ContentContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDarkComponent: this.props.isDarkComponent
    };

    this.handleScroll = _.throttle(this.handleScroll, 500);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let topOffset = this.container.getBoundingClientRect().top;
    if (topOffset < 0) {
      this.props.handleLogoChange(this.state.isDarkComponent);
    } else {
      this.props.handleLogoChange(!this.state.isDarkComponent);
    }
  }

  render() {
    return (
      <div ref={c => (this.container = c)} className={style.lightContainer}>
        Hey welt.
      </div>
    );
  }
}

export default ContentContainer;
