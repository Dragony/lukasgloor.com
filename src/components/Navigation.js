import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import MenuButton from './MenuButton';
import NavigationLink from './NavigationLink';
import style from './Navigation.module.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };

    this.handleStateToggle = this.handleStateToggle.bind(this);
    this.handleNavigationClick = this.handleNavigationClick.bind(this);
  }

  handleStateToggle(currentState) {
    this.setState({
      isActive: currentState
    });
  }

  handleNavigationClick(path) {
    this.setState({
      isActive: false
    });
    navigateTo(path);
  }

  render() {
    return (
      <div className={style.navigation}>
        <div
          className={classNames({
            [`${style.menuButton}`]: true,
            [`${style.isActive}`]: this.state.isActive
          })}
        >
          <MenuButton
            onStateToggle={this.handleStateToggle}
            isActive={this.state.isActive}
          />
        </div>
        <div
          className={classNames({
            [`${style.navigationOverlay}`]: true,
            [`${style.isOpen}`]: this.state.isActive
          })}
        >
          <ul className={style.navigationList}>
            <NavigationLink
              value="/"
              name="Home"
              onNavigationClick={this.handleNavigationClick}
            />
            <NavigationLink
              value="/cat/"
              name="Cat"
              onNavigationClick={this.handleNavigationClick}
            />
            <NavigationLink
              value="/dog/"
              name="Dog"
              onNavigationClick={this.handleNavigationClick}
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
