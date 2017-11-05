const getTransitionStyles = timeout => {
  return {
    entering: {
      position: `absolute`,
      visibility: `hidden`,
      top: '2rem',
      opacity: 0
    },
    entered: {
      transition: `all ${timeout}ms ease-in-out`,
      position: 'relative',
      top: '0',
      opacity: 1
    },
    exiting: {
      transition: `all ${timeout}ms ease-in-out`,
      position: 'relative',
      top: '-2rem',
      opacity: 0
    },
    exited: {
      transition: `all ${timeout}ms ease-in-out`,
      top: '0',
      opacity: 0
    }
  };
};

const getTransitionStyle = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status];

export default getTransitionStyle;
