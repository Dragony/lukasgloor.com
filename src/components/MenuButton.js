import React from 'react';
import { Motion, spring, presets } from 'react-motion';
import style from './MenuButton.module.scss';

class MenuButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.onStateToggle(!this.props.isActive);
  }

  render() {
    return (
      <div className={style.menuButton} onClick={this.handleClick.bind(this)}>
        <svg viewBox="0 0 96 96" height="1em" className={style.svg}>
          <Motion
            style={{
              x: spring(this.props.isActive ? 1 : 0, presets.wobbly),
              y: spring(this.props.isActive ? 0 : 1, presets.wobbly)
            }}
          >
            {({ x, y }) => (
              <g
                id="navicon"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line
                  transform={`translate(${x * 12}, ${x * -7}) rotate(${x *
                    45}, 7, 26)`}
                  x1="7"
                  y1="26"
                  x2="89"
                  y2="26"
                />
                <line
                  transform={`translate(${x * 12}, ${x * 7}) rotate(${x *
                    -45}, 7, 70)`}
                  x1="7"
                  y1="70"
                  x2="89"
                  y2="70"
                />
                <line
                  transform={`translate(${x * -96})`}
                  opacity={y}
                  x1="7"
                  y1="48"
                  x2="89"
                  y2="48"
                />
              </g>
            )}
          </Motion>
        </svg>
        <span>Menu</span>
      </div>
    );
  }
}

export default MenuButton;
