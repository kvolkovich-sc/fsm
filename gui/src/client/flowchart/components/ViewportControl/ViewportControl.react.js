import React, { Component, PropTypes } from 'react';
import Viewport from '../Viewport';
import './ViewportControl.less';

const propTypes = {};
const defaultProps = {};

export default
class ViewportControl extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="viewport-control">
        <Viewport

        />
      </div>
    );
  }
}

ViewportControl.propTypes = propTypes;
ViewportControl.defaultProps = defaultProps;
