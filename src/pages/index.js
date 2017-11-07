/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';

import ContentContainer from '../components/ContentContainer';

import style from './index.module.scss';
import headerImage from '../img/index/home-5.jpg';

var headerAreaStyle = {
  background: 'url(' + headerImage + ')',
  backgroundSize: 'cover'
};

var svgStyle = {
  width: '100%',
  height: '100%'
};

var lineStyle = {
  stroke: 'rgba(255, 255, 255, 0.2)',
  strokeWidth: '150'
};

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogoChange = this.handleLogoChange.bind(this);
  }

  handleLogoChange(payload) {
    this.props.updateLayoutFunction(payload);
  }

  render() {
    return (
      <div style={this.props.transition && this.props.transition.style}>
        <div className={style.headerArea} style={headerAreaStyle}>
          <div className={style.headerOverlay} />
          <div className={style.headerContent}>
            <div className={style.mainHeadline}>
              <h1>
                <span className={style.complementary}>Design</span> meets{' '}
                <span className={style.highlight}>Code</span>
              </h1>
              <p>
                I am here to combine the know-how of a designer and the know-how
                of a developer.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Link to="/cat/">Go to cat</Link>
        </div>
        <div>
          <Link to="/dog/">Go to dog</Link>
        </div>
        <ContentContainer
          isDarkComponent={false}
          componentContent="hallo Welt."
          handleLogoChange={this.handleLogoChange}
        />
      </div>
    );
  }
}

export default Index;
