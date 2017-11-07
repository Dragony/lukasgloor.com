import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import style from './NavigationLink.module.scss';

class NavigationLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCurrentPath: false
    };
    this.handleNavigationClick = this.handleNavigationClick.bind(this);
  }

  handleNavigationClick() {
    this.props.onNavigationClick(this.props.value);
  }

  render() {
    return (
      <li onClick={this.handleNavigationClick} className={style.navigationLink}>
        <h3>{this.props.name}</h3>
      </li>
    );
  }
}

export default NavigationLink;
